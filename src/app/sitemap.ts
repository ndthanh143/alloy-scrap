// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_CLIENT_URL || "https://www.thumuahopkimcao.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
  ];
}
