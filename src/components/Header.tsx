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
        <div className="max-w-6xl  flex justify-end items-center py-1 px-4 ">
          <p className="text-xs font-medium">+84 354 999 999</p>
          <Phone className="ml-2 w-3 h-3" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <button
          onClick={handleScrollToTop}
          className="text-xl md:text-2xl font-bold text-primary tracking-wide hover:opacity-80 transition"
          aria-label="Trang chủ KhanhTuong"
        >
          KhanhTuong
        </button>
        <Button>Gọi ngay</Button>
      </div>
    </header>
  );
}
