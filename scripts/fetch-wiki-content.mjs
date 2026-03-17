#!/usr/bin/env node
/**
 * Fetches all content pages from the MediaWiki API at aiwiki.ai
 * and saves them as markdown files for the Next.js site.
 * Uses throttling to avoid rate limiting.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = path.join(__dirname, '..', 'content');
const API_URL = 'https://aiwiki.ai/api.php';
const DELAY_MS = 200; // delay between requests to avoid rate limiting

fs.mkdirSync(CONTENT_DIR, { recursive: true });

function slugify(title) {
  return title
    .replace(/ /g, '_')
    .replace(/[^a-zA-Z0-9_\-\u4e00-\u9fff\u3040-\u309f\u30a0-\u30ff]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '')
    .toLowerCase();
}

function htmlToMarkdown(html) {
  if (!html) return '';
  let md = html;

  // Remove edit sections and TOC
  md = md.replace(/<span class="mw-editsection">[\s\S]*?<\/span>/g, '');
  md = md.replace(/<div id="toc"[\s\S]*?<\/div>\n*<\/div>/g, '');
  md = md.replace(/<div[^>]*class="toc"[\s\S]*?<\/div>\n*<\/div>/g, '');

  // Handle headings
  for (let i = 6; i >= 1; i--) {
    const hashes = '#'.repeat(i);
    const re = new RegExp(`<h${i}[^>]*>([\\s\\S]*?)<\\/h${i}>`, 'g');
    md = md.replace(re, `${hashes} $1\n\n`);
  }

  // Handle paragraphs
  md = md.replace(/<p[^>]*>([\s\S]*?)<\/p>/g, '$1\n\n');

  // Handle bold and italic
  md = md.replace(/<b[^>]*>([\s\S]*?)<\/b>/g, '**$1**');
  md = md.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/g, '**$1**');
  md = md.replace(/<i[^>]*>([\s\S]*?)<\/i>/g, '*$1*');
  md = md.replace(/<em[^>]*>([\s\S]*?)<\/em>/g, '*$1*');

  // Handle wiki-style internal links
  md = md.replace(/<a[^>]*href="\/wiki\/([^"]*)"[^>]*>([\s\S]*?)<\/a>/g, (match, href, text) => {
    const slug = slugify(decodeURIComponent(href));
    return `[${text}](/wiki/${slug})`;
  });
  md = md.replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g, '[$2]($1)');

  // Handle unordered lists
  md = md.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/g, (match, content) => {
    return content.replace(/<li[^>]*>([\s\S]*?)<\/li>/g, '- $1\n') + '\n';
  });

  // Handle ordered lists
  md = md.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/g, (match, content) => {
    let counter = 0;
    return content.replace(/<li[^>]*>([\s\S]*?)<\/li>/g, (m, text) => {
      counter++;
      return `${counter}. ${text}\n`;
    }) + '\n';
  });

  // Handle code blocks
  md = md.replace(/<pre[^>]*>([\s\S]*?)<\/pre>/g, '```\n$1\n```\n\n');
  md = md.replace(/<code[^>]*>([\s\S]*?)<\/code>/g, '`$1`');

  // Handle tables
  md = md.replace(/<table[^>]*>([\s\S]*?)<\/table>/g, (match, tableContent) => {
    let result = '';
    const rows = tableContent.match(/<tr[^>]*>([\s\S]*?)<\/tr>/g) || [];
    let isFirstRow = true;
    for (const row of rows) {
      const cells = [];
      const cellMatches = row.match(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g) || [];
      for (const cell of cellMatches) {
        const content = cell.replace(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/, '$1').trim();
        cells.push(content);
      }
      if (cells.length > 0) {
        result += '| ' + cells.join(' | ') + ' |\n';
        if (isFirstRow) {
          result += '| ' + cells.map(() => '---').join(' | ') + ' |\n';
          isFirstRow = false;
        }
      }
    }
    return result + '\n';
  });

  // Handle blockquotes
  md = md.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/g, (match, content) => {
    return content.split('\n').map(line => `> ${line}`).join('\n') + '\n\n';
  });

  // Handle images
  md = md.replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*\/?>/g, '![$2]($1)');
  md = md.replace(/<img[^>]*alt="([^"]*)"[^>]*src="([^"]*)"[^>]*\/?>/g, '![$1]($2)');
  md = md.replace(/<img[^>]*src="([^"]*)"[^>]*\/?>/g, '![]($1)');

  md = md.replace(/<br\s*\/?>/g, '\n');
  md = md.replace(/<hr\s*\/?>/g, '\n---\n\n');

  // Handle divs and spans
  md = md.replace(/<div[^>]*>([\s\S]*?)<\/div>/g, '$1\n');
  md = md.replace(/<span[^>]*>([\s\S]*?)<\/span>/g, '$1');

  // Remove remaining HTML tags
  md = md.replace(/<[^>]+>/g, '');

  // Decode HTML entities
  md = md.replace(/&amp;/g, '&');
  md = md.replace(/&lt;/g, '<');
  md = md.replace(/&gt;/g, '>');
  md = md.replace(/&quot;/g, '"');
  md = md.replace(/&#039;/g, "'");
  md = md.replace(/&nbsp;/g, ' ');
  md = md.replace(/&#160;/g, ' ');

  // Clean up excessive whitespace
  md = md.replace(/\n{3,}/g, '\n\n');
  md = md.trim();

  return md;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchJSON(url, retries = 3) {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const response = await fetch(url);
      if (response.status === 429) {
        const waitTime = Math.pow(2, attempt + 1) * 1000;
        console.log(`  Rate limited, waiting ${waitTime / 1000}s...`);
        await sleep(waitTime);
        continue;
      }
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    } catch (err) {
      if (attempt === retries - 1) throw err;
      await sleep(1000 * (attempt + 1));
    }
  }
}

async function getAllPageTitles() {
  const titles = [];
  let apcontinue = '';

  while (true) {
    const params = new URLSearchParams({
      action: 'query',
      list: 'allpages',
      aplimit: '500',
      apnamespace: '0',
      format: 'json',
    });
    if (apcontinue) params.set('apcontinue', apcontinue);

    const data = await fetchJSON(`${API_URL}?${params}`);
    for (const page of data.query.allpages) {
      titles.push(page.title);
    }
    console.log(`Fetched ${titles.length} page titles...`);

    if (data.continue) {
      apcontinue = data.continue.apcontinue;
    } else {
      break;
    }
    await sleep(100);
  }

  return titles;
}

// Check which pages we already have
function getExistingSlugs() {
  const existing = new Set();
  if (fs.existsSync(CONTENT_DIR)) {
    for (const file of fs.readdirSync(CONTENT_DIR)) {
      if (file.endsWith('.md')) {
        existing.add(file.replace('.md', ''));
      }
    }
  }
  return existing;
}

async function main() {
  console.log('Fetching all page titles from aiwiki.ai...');
  const titles = await getAllPageTitles();
  console.log(`Found ${titles.length} pages total.\n`);

  const existingSlugs = getExistingSlugs();
  console.log(`Already have ${existingSlugs.size} pages cached.\n`);

  // Filter to pages we still need
  const needed = titles.filter(t => !existingSlugs.has(slugify(t)));
  console.log(`Need to fetch ${needed.length} remaining pages.\n`);

  const allPages = [];

  // Load existing index if present
  const indexPath = path.join(CONTENT_DIR, '_index.json');
  if (fs.existsSync(indexPath)) {
    const existing = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));
    allPages.push(...existing);
  }

  let saved = 0;
  let failed = 0;

  for (let i = 0; i < needed.length; i++) {
    const title = needed[i];
    try {
      const params = new URLSearchParams({
        action: 'parse',
        page: title,
        prop: 'text|categories',
        format: 'json',
        disableeditsection: '1',
      });

      const data = await fetchJSON(`${API_URL}?${params}`);

      if (data.error) {
        console.warn(`  Skip "${title}": ${data.error.info}`);
        failed++;
        await sleep(DELAY_MS);
        continue;
      }

      const html = data.parse.text['*'];
      const categories = (data.parse.categories || []).map(c => c['*']);
      const slug = slugify(title);
      const markdown = htmlToMarkdown(html);

      // Skip pages that are basically empty or redirects
      if (markdown.length < 20) {
        await sleep(DELAY_MS);
        continue;
      }

      const frontmatter = [
        '---',
        `title: "${title.replace(/"/g, '\\"')}"`,
        `slug: "${slug}"`,
        categories.length > 0 ? `categories:\n${categories.map(c => `  - "${c.replace(/"/g, '\\"')}"`).join('\n')}` : '',
        '---',
        '',
      ].filter(Boolean).join('\n');

      const content = frontmatter + markdown;
      const filePath = path.join(CONTENT_DIR, `${slug}.md`);

      fs.writeFileSync(filePath, content, 'utf-8');
      allPages.push({ title, slug, categories });
      saved++;
    } catch (err) {
      console.warn(`  Failed "${title}": ${err.message}`);
      failed++;
    }

    if ((i + 1) % 25 === 0 || i === needed.length - 1) {
      console.log(`Progress: ${i + 1}/${needed.length} (saved: ${saved}, failed: ${failed})`);
      // Save index periodically
      fs.writeFileSync(indexPath, JSON.stringify(allPages, null, 2), 'utf-8');
    }

    await sleep(DELAY_MS);
  }

  // Final index save
  fs.writeFileSync(indexPath, JSON.stringify(allPages, null, 2), 'utf-8');

  console.log(`\nDone! Total pages saved: ${allPages.length}`);
  console.log(`New: ${saved}, Failed: ${failed}`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
