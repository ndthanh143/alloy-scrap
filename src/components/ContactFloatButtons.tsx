// ContactFloatButton.tsx
"use client";

import { Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

const Tooltip = ({ text }: { text: string }) => (
  <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 px-3 py-1 text-sm text-white bg-gray-800 rounded-lg shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 z-10 whitespace-nowrap">
    {text}
    {/* Mũi tên bên phải */}
    <div className="absolute left-full top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
  </div>
);

export const ContactFloatButton = () => {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end gap-3 z-50">
      {/* Zalo button */}
      <a
        href="https://zalo.me/0123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group"
      >
        <Tooltip text="Nhắn Zalo" />

        <div className="bg-white border border-zinc-300 hover:shadow-xl rounded-full p-3 transition-transform transform hover:scale-105">
          <Image
            src="/zalo-icon.webp"
            alt="Zalo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </div>
      </a>

      {/* Phone button */}
      <a href="tel:0123456789" className="relative group">
        <Tooltip text="Gọi ngay" />

        <div className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 transition-transform transform hover:scale-105 shadow-lg">
          <Phone className="w-8 h-8" />
        </div>
      </a>
    </div>
  );
};
