"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 10); // khi cuộn quá 10px thì thay đổi style
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow border-b" : "bg-transparent"
      }`}
    >
      <div className="mx-auto bg-primary text-white">
        <div className="container flex justify-end items-center py-2 px-4 ">
          <p className="text-xs font-medium">+84 934 364 348</p>
          <Phone className="ml-2 w-3 h-3" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <button
          onClick={handleScrollToTop}
          className="text-xl md:text-2xl font-bold text-primary tracking-wide hover:opacity-80 transition cursor-pointer uppercase text-red-500"
          aria-label="Trang chủ KhanhTuong"
        >
          Nam Nguyên
        </button>
        <a
          href="tel:0934364348"
          aria-label="Gọi ngay"
          className="relative group"
        >
          <Button>Gọi ngay</Button>
        </a>
      </div>
    </header>
  );
}
