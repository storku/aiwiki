"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { Table } from "@tiptap/extension-table";
import { TableRow } from "@tiptap/extension-table-row";
import { TableCell } from "@tiptap/extension-table-cell";
import { TableHeader } from "@tiptap/extension-table-header";
import { Wikilink } from "@/lib/tiptap-extensions/wikilink";

interface WikiEditorProps {
  slug: string;
  title: string;
  contentTiptap: unknown | null;
  categories: string[];
  version: number;
}

// ---------------------------------------------------------------------------
// Toolbar Button
// ---------------------------------------------------------------------------

function ToolbarButton({
  onClick,
  active = false,
  disabled = false,
  title,
  children,
}: {
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`
        px-2 py-1.5 rounded text-sm font-medium transition-colors
        disabled:opacity-40 disabled:cursor-not-allowed
        ${
          active
            ? "bg-[var(--color-primary)] text-white"
            : "text-[var(--foreground)] hover:bg-[var(--color-surface-hover)]"
        }
      `}
    >
      {children}
    </button>
  );
}

function ToolbarDivider() {
  return (
    <div className="w-px h-6 bg-[var(--color-border)] mx-1 shrink-0" />
  );
}

// ---------------------------------------------------------------------------
// Toolbar
// ---------------------------------------------------------------------------

function EditorToolbar({ editor }: { editor: NonNullable<ReturnType<typeof useEditor>> }) {

  const insertImage = () => {
    const url = window.prompt("Image URL:");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const insertWikilink = () => {
    const slug = window.prompt("Wiki page slug (e.g. machine-learning):");
    if (!slug) return;
    const href = `/wiki/${slug.trim()}`;
    const { from, to } = editor.state.selection;
    if (from === to) {
      // No selection: insert the slug as text with wikilink mark
      editor
        .chain()
        .focus()
        .insertContent({
          type: "text",
          marks: [{ type: "wikilink", attrs: { href } }],
          text: slug.trim(),
        })
        .run();
    } else {
      // Wrap selected text with wikilink
      editor
        .chain()
        .focus()
        .setMark("wikilink", { href })
        .run();
    }
  };

  const insertTable = () => {
    editor
      .chain()
      .focus()
      .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
      .run();
  };

  return (
    <div
      className="flex flex-wrap items-center gap-0.5 p-2 border border-[var(--color-border)] rounded-t-lg bg-[var(--color-surface)]"
      role="toolbar"
      aria-label="Editor formatting toolbar"
    >
      {/* Text formatting */}
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        active={editor.isActive("bold")}
        title="Bold (Ctrl+B)"
      >
        <strong>B</strong>
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        active={editor.isActive("italic")}
        title="Italic (Ctrl+I)"
      >
        <em>I</em>
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleStrike().run()}
        active={editor.isActive("strike")}
        title="Strikethrough"
      >
        <s>S</s>
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleCode().run()}
        active={editor.isActive("code")}
        title="Inline Code"
      >
        <code className="text-xs font-mono">&lt;/&gt;</code>
      </ToolbarButton>

      <ToolbarDivider />

      {/* Headings */}
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        active={editor.isActive("heading", { level: 2 })}
        title="Heading 2"
      >
        H2
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        active={editor.isActive("heading", { level: 3 })}
        title="Heading 3"
      >
        H3
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        active={editor.isActive("heading", { level: 4 })}
        title="Heading 4"
      >
        H4
      </ToolbarButton>

      <ToolbarDivider />

      {/* Lists */}
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        active={editor.isActive("bulletList")}
        title="Bullet List"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="8" y1="6" x2="21" y2="6" />
          <line x1="8" y1="12" x2="21" y2="12" />
          <line x1="8" y1="18" x2="21" y2="18" />
          <circle cx="3" cy="6" r="1" fill="currentColor" />
          <circle cx="3" cy="12" r="1" fill="currentColor" />
          <circle cx="3" cy="18" r="1" fill="currentColor" />
        </svg>
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        active={editor.isActive("orderedList")}
        title="Ordered List"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="10" y1="6" x2="21" y2="6" />
          <line x1="10" y1="12" x2="21" y2="12" />
          <line x1="10" y1="18" x2="21" y2="18" />
          <text x="1" y="8" fontSize="8" fill="currentColor" stroke="none" fontFamily="sans-serif">1</text>
          <text x="1" y="14" fontSize="8" fill="currentColor" stroke="none" fontFamily="sans-serif">2</text>
          <text x="1" y="20" fontSize="8" fill="currentColor" stroke="none" fontFamily="sans-serif">3</text>
        </svg>
      </ToolbarButton>

      <ToolbarDivider />

      {/* Blocks */}
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        active={editor.isActive("blockquote")}
        title="Blockquote"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21" />
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3" />
        </svg>
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        active={editor.isActive("codeBlock")}
        title="Code Block"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        title="Horizontal Rule"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="2" y1="12" x2="22" y2="12" />
        </svg>
      </ToolbarButton>

      <ToolbarDivider />

      {/* Insert */}
      <ToolbarButton onClick={insertImage} title="Insert Image">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      </ToolbarButton>
      <ToolbarButton onClick={insertWikilink} title="Insert Wikilink">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      </ToolbarButton>
      <ToolbarButton onClick={insertTable} title="Insert Table (3x3)">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="3" y1="15" x2="21" y2="15" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="15" y1="3" x2="15" y2="21" />
        </svg>
      </ToolbarButton>

      <ToolbarDivider />

      {/* Undo / Redo */}
      <ToolbarButton
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().undo()}
        title="Undo (Ctrl+Z)"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="1 4 1 10 7 10" />
          <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
        </svg>
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().redo()}
        title="Redo (Ctrl+Shift+Z)"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 4 23 10 17 10" />
          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
        </svg>
      </ToolbarButton>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Wiki Editor Component
// ---------------------------------------------------------------------------

export default function WikiEditor({
  slug,
  title: initialTitle,
  contentTiptap,
  categories: initialCategories,
  version,
}: WikiEditorProps) {
  const router = useRouter();
  const [title, setTitle] = useState(initialTitle);
  const [categoryInput, setCategoryInput] = useState(
    initialCategories.join(", ")
  );
  const [summary, setSummary] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasChanges, setHasChanges] = useState(false);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Image,
      Table.configure({ resizable: true }),
      TableRow,
      TableCell,
      TableHeader,
      Wikilink,
    ],
    content: (contentTiptap as Record<string, unknown>) ?? {
      type: "doc",
      content: [{ type: "paragraph" }],
    },
    onUpdate: () => {
      setHasChanges(true);
    },
    editorProps: {
      attributes: {
        class: "wiki-content outline-none min-h-[400px] px-6 py-4",
      },
    },
  });

  // Warn about unsaved changes
  useEffect(() => {
    const handler = (e: BeforeUnloadEvent) => {
      if (hasChanges) {
        e.preventDefault();
      }
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [hasChanges]);

  // Track title/category changes
  useEffect(() => {
    if (title !== initialTitle || categoryInput !== initialCategories.join(", ")) {
      setHasChanges(true);
    }
  }, [title, categoryInput, initialTitle, initialCategories]);

  const handleSave = useCallback(async () => {
    if (!editor) return;
    if (!summary.trim()) {
      setError("Please enter an edit summary before saving.");
      return;
    }

    setSaving(true);
    setError(null);

    const categories = categoryInput
      .split(",")
      .map((c) => c.trim())
      .filter(Boolean);

    try {
      const res = await fetch(`/api/wiki/${slug}/save`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          contentTiptap: editor.getJSON(),
          categories,
          summary: summary.trim(),
          expectedVersion: version,
        }),
      });

      if (res.status === 409) {
        const data = await res.json();
        alert(
          `Version conflict: ${data.message}\n\nPlease reload the page and re-apply your changes.`
        );
        setSaving(false);
        return;
      }

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Failed to save. Please try again.");
        setSaving(false);
        return;
      }

      setHasChanges(false);
      router.push(`/wiki/${slug}`);
    } catch {
      setError("Network error. Please check your connection and try again.");
      setSaving(false);
    }
  }, [editor, summary, categoryInput, slug, title, version, router]);

  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href={`/wiki/${slug}`}
            className="shrink-0 flex items-center gap-1.5 text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to article
          </Link>
          <div className="w-px h-5 bg-[var(--color-border)]" />
          <h1 className="text-lg font-semibold truncate">
            Editing: {title || "Untitled"}
          </h1>
        </div>
        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="shrink-0 px-5 py-2 rounded-lg text-sm font-medium text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
          {saving ? "Saving..." : "Save"}
        </button>
      </div>

      {/* Error message */}
      {error && (
        <div className="mb-4 px-4 py-3 rounded-lg border border-red-300 bg-red-50 text-red-800 text-sm dark:border-red-800 dark:bg-red-950/30 dark:text-red-300">
          {error}
        </div>
      )}

      {/* Title input */}
      <div className="mb-4">
        <label
          htmlFor="editor-title"
          className="block text-sm font-medium text-[var(--color-muted)] mb-1.5"
        >
          Title
        </label>
        <input
          id="editor-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Article title"
          className="w-full px-4 py-2.5 text-xl font-bold rounded-lg border border-[var(--color-border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--color-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)]/50 transition-all"
        />
      </div>

      {/* Categories input */}
      <div className="mb-4">
        <label
          htmlFor="editor-categories"
          className="block text-sm font-medium text-[var(--color-muted)] mb-1.5"
        >
          Categories (comma-separated)
        </label>
        <input
          id="editor-categories"
          type="text"
          value={categoryInput}
          onChange={(e) => setCategoryInput(e.target.value)}
          placeholder="e.g. Machine Learning, Neural Networks, Deep Learning"
          className="w-full px-4 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--background)] text-[var(--foreground)] text-sm placeholder:text-[var(--color-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)]/50 transition-all"
        />
        {categoryInput && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {categoryInput
              .split(",")
              .map((c) => c.trim())
              .filter(Boolean)
              .map((cat) => (
                <span
                  key={cat}
                  className="inline-flex items-center px-2.5 py-1 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-medium text-[var(--foreground)]"
                >
                  {cat}
                </span>
              ))}
          </div>
        )}
      </div>

      {/* Edit summary */}
      <div className="mb-4">
        <label
          htmlFor="editor-summary"
          className="block text-sm font-medium text-[var(--color-muted)] mb-1.5"
        >
          Edit summary <span className="text-red-500">*</span>
        </label>
        <input
          id="editor-summary"
          type="text"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="Briefly describe your changes"
          className="w-full px-4 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--background)] text-[var(--foreground)] text-sm placeholder:text-[var(--color-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)]/50 transition-all"
        />
      </div>

      {/* Toolbar + Editor */}
      <div className="border border-[var(--color-border)] rounded-lg overflow-hidden">
        {editor && <EditorToolbar editor={editor} />}
        <div className="border-t border-[var(--color-border)] bg-[var(--background)]">
          <EditorContent editor={editor} />
        </div>
      </div>

      {/* Bottom save bar */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-[var(--color-border)]">
        <p className="text-sm text-[var(--color-muted)]">
          Version {version}
          {hasChanges && (
            <span className="ml-2 text-[var(--color-warm)]">
              (unsaved changes)
            </span>
          )}
        </p>
        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="px-5 py-2 rounded-lg text-sm font-medium text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
          {saving ? "Saving..." : "Save changes"}
        </button>
      </div>
    </div>
  );
}
