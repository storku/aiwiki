import { Mark, mergeAttributes } from "@tiptap/core";

export const Wikilink = Mark.create({
  name: "wikilink",
  priority: 1001,

  addAttributes() {
    return {
      href: { default: null },
    };
  },

  parseHTML() {
    return [{ tag: 'a[data-type="wikilink"]' }];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "a",
      mergeAttributes(HTMLAttributes, {
        "data-type": "wikilink",
        class: "wikilink",
      }),
      0,
    ];
  },
});
