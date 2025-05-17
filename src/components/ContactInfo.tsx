"use client";

import {
  Phone,
  Mail,
  Globe,
  MessageSquareText,
  Building,
  Facebook,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const info = {
  companyName: "Nam Nguyên",
  phone: process.env.NEXT_PUBLIC_INFO_PHONE || "+84 934 364 348",
  facebook: process.env.NEXT_PUBLIC_INFO_FACEBOOK || "Phế liệu hợp kim",
  zalo: process.env.NEXT_PUBLIC_INFO_ZALO || "Zalo: 0934 364 348",
  email: process.env.NEXT_PUBLIC_INFO_EMAIL || "",
  website: process.env.NEXT_PUBLIC_INFO_WEBSITE || "https://namnguyen.com.vn",
};

const items = [
  { icon: Building, label: info.companyName },
  { icon: Phone, label: info.phone },
  {
    icon: Facebook,
    label: "Phế Liệu Hợp Kim",
    href: info.facebook,
    isLink: true,
  },
  {
    icon: MessageSquareText,
    label: info.zalo,
    href: info.zalo,
    isLink: true,
  },
  { icon: Mail, label: info.email },
  { icon: Globe, label: info.website, href: info.website, isLink: true },
];

export function ContactInfo() {
  return (
    <section className="py-4 xl:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-primary">
          Thông tin liên hệ
        </h2>

        <Card className="bg-gradient-to-br from-primary to-primary/80 text-white shadow-xl rounded-2xl">
          <CardContent className="p-8 grid gap-5">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 hover:bg-white/10 transition rounded-lg px-3 py-2"
              >
                <item.icon className="w-5 h-5 mt-1 shrink-0" />
                {item.isLink ? (
                  <Link
                    href={item.isLink ? item.href : "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base underline transition"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <p className="text-base">{item.label}</p>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
