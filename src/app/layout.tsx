import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ContactFloatButton } from "@/components";
import Head from "next/head";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const clientUrl =
  process.env.NEXT_PUBLIC_CLIENT_URL || "https://www.thumuahopkimcao.com";

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
  metadataBase: new URL(`${clientUrl}`),
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: `${clientUrl}`,
    siteName: "Nam Nguyên - Thu mua phế liệu hợp kim",
    title: "Nam Nguyên - Thu mua phế liệu hợp kim toàn quốc giá cao",
    description:
      "Chuyên thu mua dao cụ hợp kim các loại với giá cao, làm việc chuyên nghiệp, hỗ trợ toàn quốc.",
    images: [
      {
        url: `${clientUrl}/og-image.jpg`,
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
    images: [`${clientUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": "-1",
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
    canonical: `${clientUrl}`,
    languages: {
      vi: `${clientUrl}`,
    },
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nam Nguyên",
  image: `${clientUrl}/og-image.jpg`,
  url: `${clientUrl}`,
  telephone: process.env.NEXT_PUBLIC_INFO_PHONE || "0934364348",
  description:
    "Chuyên thu mua phế liệu hợp kim toàn quốc giá cao: dao cụ hợp kim, mũi khoan, chip phay tiện, dao tiện phay các loại...",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Số 1 Võ Văn Ngân, Phường Linh Chiểu, Thành phố Thủ Đức, Hồ Chí Minh",
    addressLocality: "Thành Phố Thủ Đức",
    addressRegion: "Hồ Chí Minh",
    postalCode: "700000",
    addressCountry: "VN",
  },
  openingHours: ["Mo-Sa 08:00-17:30"],
  geo: {
    "@type": "GeoCoordinates",
    latitude: 10.8231,
    longitude: 106.6297,
  },
  priceRange: "Liên hệ",
  sameAs: [
    process.env.NEXT_PUBLIC_INFO_FACEBOOK,
    process.env.NEXT_PUBLIC_INFO_ZALO,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({ ...schema }),
          }}
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ContactFloatButton />
      </body>
    </html>
  );
}
