import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SCREENSHOT_DIR = path.join(__dirname, '..', 'screenshots');
const BASE_URL = 'http://localhost:3099';

const PAGES = [
  { name: 'home', path: '/' },
  { name: 'article-chatgpt', path: '/wiki/chatgpt' },
  { name: 'article-agent', path: '/wiki/agent' },
  { name: 'article-claude', path: '/wiki/claude_ai' },
  { name: 'all-pages', path: '/wiki' },
  { name: 'categories', path: '/categories' },
  { name: 'category-terms', path: '/categories/Terms' },
  { name: 'search', path: '/search?q=neural' },
  { name: 'not-found', path: '/wiki/this-does-not-exist-12345' },
];

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    colorScheme: 'dark',
  });

  for (const page of PAGES) {
    const tab = await context.newPage();

    // Set dark theme via localStorage before navigating
    await tab.addInitScript(() => {
      localStorage.setItem('theme', 'dark');
    });

    await tab.goto(`${BASE_URL}${page.path}`, { waitUntil: 'networkidle' });

    // Also ensure data-theme is set
    await tab.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'dark');
    });

    // Wait a moment for any transitions
    await tab.waitForTimeout(500);

    // Full page screenshot
    await tab.screenshot({
      path: path.join(SCREENSHOT_DIR, `dark-${page.name}.png`),
      fullPage: true,
    });

    // Also take a viewport-only screenshot for above-the-fold view
    await tab.screenshot({
      path: path.join(SCREENSHOT_DIR, `dark-${page.name}-viewport.png`),
      fullPage: false,
    });

    console.log(`Captured: ${page.name}`);
    await tab.close();
  }

  await browser.close();
  console.log(`\nAll screenshots saved to ${SCREENSHOT_DIR}`);
}

main().catch(console.error);
