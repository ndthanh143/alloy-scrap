// app/sitemap.ts
import { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/notion"; // hoặc API tương ứng nếu bạn gọi HTTP

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_CLIENT_URL || "https://www.thumuahopkimcao.com";

  const posts = await getPublishedPosts();

  const blogUrls = posts.map((post: any) => {
    const slug = post.properties.Slug.rich_text[0]?.plain_text || "";
    return {
      url: `${baseUrl}/bai-viet/${slug}`,
      lastModified: new Date(), // có thể dùng post.properties.Date.date.start nếu có ngày
    };
  });

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/bai-viet`,
      lastModified: new Date(),
    },
    ...blogUrls,
  ];
}
