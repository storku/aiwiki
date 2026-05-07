"use client";

import { useSyncExternalStore } from "react";

function subscribeToPlatformChanges() {
  return () => {};
}

function getClientIsMac() {
  return /Mac|iPhone|iPad/.test(navigator.userAgent);
}

function getServerIsMac() {
  return false;
}

interface SearchShortcutHintProps {
  className?: string;
}

export default function SearchShortcutHint({ className = "" }: SearchShortcutHintProps) {
  const isMac = useSyncExternalStore(
    subscribeToPlatformChanges,
    getClientIsMac,
    getServerIsMac
  );

  return (
    <kbd className={className}>
      <span>{isMac ? "Cmd" : "Ctrl"}</span>
      <span>K</span>
    </kbd>
  );
}
