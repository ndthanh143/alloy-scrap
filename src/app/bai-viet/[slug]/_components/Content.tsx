"use client";

import { NotionRenderer } from "react-notion-x";

/* eslint-disable @typescript-eslint/no-explicit-any */
export function Content({ recordMap }: { recordMap: any }) {
  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={false}
      darkMode={false}
      className="!m-0 !p-0"
    />
  );
}
