"use client";

import { useEffect } from "react";

function processContent(el: HTMLElement) {
  const imgs = el.querySelectorAll("img");
  for (const img of imgs) {
    if (!img.dataset.errorHandled) {
      img.dataset.errorHandled = "1";
      img.addEventListener("error", () => {
        img.style.display = "none";
      });
      if (img.complete && img.naturalWidth === 0 && img.src) {
        img.style.display = "none";
      }
    }
  }

  const tables = el.querySelectorAll("table");
  let infoboxDetected = false;
  for (const table of tables) {
    if (table.classList.contains("infobox")) {
      infoboxDetected = true;
      continue;
    }
    if (
      !infoboxDetected &&
      !table.tHead &&
      !table.parentElement?.classList.contains("table-wrapper") &&
      table.querySelectorAll("td > strong").length >= 3
    ) {
      table.classList.add("infobox");
      infoboxDetected = true;
      continue;
    }
    if (table.parentElement?.classList.contains("table-wrapper")) continue;
    const wrapper = document.createElement("div");
    wrapper.className = "table-wrapper overflow-x-auto -mx-1 px-1";
    table.parentNode?.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  }
}

export default function WikiContentEnhancer({
  processDomContent = false,
}: {
  processDomContent?: boolean;
}) {
  useEffect(() => {
    const el = document.querySelector<HTMLElement>("[data-wiki-content]");
    if (!el) return;

    let observer: MutationObserver | null = null;

    if (processDomContent) {
      processContent(el);
      observer = new MutationObserver(() => {
        processContent(el);
      });
      observer.observe(el, { childList: true, subtree: true });
    }

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchorBtn = target.closest(".heading-anchor") as HTMLButtonElement | null;
      if (!anchorBtn) return;

      e.preventDefault();
      const id = anchorBtn.dataset.headingId;
      if (!id) return;

      const url = `${window.location.origin}${window.location.pathname}#${id}`;
      navigator.clipboard.writeText(url).catch(() => {});
      anchorBtn.style.opacity = "1";
      anchorBtn.style.color = "var(--color-primary)";
      setTimeout(() => {
        anchorBtn.style.opacity = "";
        anchorBtn.style.color = "";
      }, 1000);
    };

    el.addEventListener("click", handleClick);
    return () => {
      observer?.disconnect();
      el.removeEventListener("click", handleClick);
    };
  }, [processDomContent]);

  return null;
}
