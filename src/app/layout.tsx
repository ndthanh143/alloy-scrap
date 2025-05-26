import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ContactFloatButton } from "@/components";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata
export const metadata: Metadata = {
  title: "Nam Nguyên - Thu mua phế liệu hợp kim toàn quốc giá cao",
  description:
    "Chuyên thu mua phế liệu dao cụ hợp kim các loại: Dao phay hợp kim, mũi khoan hợp kim, chip phay hợp kim, chip tiện hợp kim, dao hợp kim các loại... Cam kết giá cao và làm việc chuyên nghiệp.",
  keywords: [
    "thu mua phế liệu",
    "thu mua hợp kim",
    "dao cụ hợp kim",
    "mũi khoan hợp kim",
    "chip tiện hợp kim",
    "thu mua dao phay",
    "Nam Nguyên",
    "phế liệu giá cao",
    "thu mua toàn quốc",
  ],
  metadataBase: new URL("https://www.thumuahopkimcao.com"),
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://www.thumuahopkimcao.com",
    siteName: "Nam Nguyên - Thu mua phế liệu hợp kim",
    title: "Nam Nguyên - Thu mua phế liệu hợp kim toàn quốc giá cao",
    description:
      "Chuyên thu mua dao cụ hợp kim các loại với giá cao, làm việc chuyên nghiệp, hỗ trợ toàn quốc.",
    images: [
      {
        url: "https://www.thumuahopkimcao.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nam Nguyên - Thu mua phế liệu hợp kim",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@namnguyen", // optional Twitter username
    title: "Nam Nguyên - Thu mua phế liệu hợp kim toàn quốc giá cao",
    description:
      "Thu mua hợp kim dao cụ toàn quốc, giá cao, uy tín, hỗ trợ tận nơi.",
    images: ["https://www.thumuahopkimcao.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  alternates: {
    canonical: "https://www.thumuahopkimcao.com",
    languages: {
      vi: "https://www.thumuahopkimcao.com",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ContactFloatButton />
      </body>
    </html>
  );
}
