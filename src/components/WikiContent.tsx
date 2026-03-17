interface WikiContentProps {
  content: string;
}

export default function WikiContent({ content }: WikiContentProps) {
  // Convert markdown to simple HTML for rendering
  let html = content;

  // Headings
  html = html.replace(/^###### (.+)$/gm, "<h6>$1</h6>");
  html = html.replace(/^##### (.+)$/gm, "<h5>$1</h5>");
  html = html.replace(/^#### (.+)$/gm, "<h4>$1</h4>");
  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.+)$/gm, "<h1>$1</h1>");

  // Bold and italic
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>");
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");

  // Code blocks
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, "<pre><code>$2</code></pre>");
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");

  // Links
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2">$1</a>'
  );

  // Images
  html = html.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    '<img src="$2" alt="$1" loading="lazy" />'
  );

  // Horizontal rules
  html = html.replace(/^---$/gm, "<hr />");

  // Tables
  html = html.replace(
    /(?:^\|.+\|$\n?)+/gm,
    (tableBlock) => {
      const rows = tableBlock.trim().split("\n");
      if (rows.length < 2) return tableBlock;

      let tableHtml = "<table>";
      rows.forEach((row, idx) => {
        // Skip separator row
        if (/^\|[\s\-:|]+\|$/.test(row)) return;
        const cells = row
          .split("|")
          .filter((c) => c.trim() !== "")
          .map((c) => c.trim());
        const tag = idx === 0 ? "th" : "td";
        const rowHtml = cells.map((c) => `<${tag}>${c}</${tag}>`).join("");
        tableHtml += `<tr>${rowHtml}</tr>`;
      });
      tableHtml += "</table>";
      return tableHtml;
    }
  );

  // Unordered lists
  html = html.replace(
    /(?:^- .+$\n?)+/gm,
    (listBlock) => {
      const items = listBlock
        .trim()
        .split("\n")
        .map((line) => `<li>${line.replace(/^- /, "")}</li>`)
        .join("");
      return `<ul>${items}</ul>`;
    }
  );

  // Ordered lists
  html = html.replace(
    /(?:^\d+\. .+$\n?)+/gm,
    (listBlock) => {
      const items = listBlock
        .trim()
        .split("\n")
        .map((line) => `<li>${line.replace(/^\d+\. /, "")}</li>`)
        .join("");
      return `<ol>${items}</ol>`;
    }
  );

  // Blockquotes
  html = html.replace(
    /(?:^> .+$\n?)+/gm,
    (block) => {
      const text = block
        .split("\n")
        .map((line) => line.replace(/^> /, ""))
        .join("\n");
      return `<blockquote>${text}</blockquote>`;
    }
  );

  // Paragraphs: wrap remaining bare text lines
  html = html.replace(
    /^(?!<[a-z/])[^\n]+$/gm,
    (line) => `<p>${line}</p>`
  );

  // Clean up empty paragraphs
  html = html.replace(/<p>\s*<\/p>/g, "");

  return (
    <div
      className="wiki-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
