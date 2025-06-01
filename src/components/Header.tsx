"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import Link from "next/link";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false); // Đóng menu nếu đang mở
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
      {/* Top bar */}
      <div className="bg-primary text-white">
        <div className="max-w-6xl mx-auto flex justify-end items-center py-2 px-4">
          <p className="text-xs font-medium">+84 934 364 348</p>
          <Phone className="ml-2 w-3 h-3" />
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <button
          onClick={handleScrollToTop}
          className="text-xl md:text-2xl font-bold text-primary tracking-wide hover:opacity-80 transition cursor-pointer uppercase text-red-500"
          aria-label="Trang chủ KhanhTuong"
        >
          Nam Nguyên
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/">
            <Button variant="link">Trang chủ</Button>
          </Link>
          <Link href="/bai-viet">
            <Button variant="link">Tin tức</Button>
          </Link>
          <a href="tel:0934364348" aria-label="Gọi ngay">
            <Button>Gọi ngay</Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Mở menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Items */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Button variant="link" className="w-full justify-start">
              Trang chủ
            </Button>
          </Link>
          <Link href="/bai-viet" onClick={() => setMenuOpen(false)}>
            <Button variant="link" className="w-full justify-start">
              Tin tức
            </Button>
          </Link>
          <a
            href="tel:0934364348"
            aria-label="Gọi ngay"
            onClick={() => setMenuOpen(false)}
          >
            <Button className="w-full justify-start">Gọi ngay</Button>
          </a>
        </div>
      )}
    </header>
  );
}
