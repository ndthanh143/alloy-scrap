import Link from "next/link";
import { getPublishedPosts } from "@/lib/notion";
import { formatDate } from "@/lib/formatDate";
import Image from "next/image";
import { BreadCrumb } from "@/components";
import { Metadata } from "next";

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl =
    process.env.NEXT_PUBLIC_CLIENT_URL || "https://www.thumuahopkimcao.com";

  return {
    title: "Tin Tức & Kiến Thức | Thu mua phế liệu hợp kim",
    description:
      "Cập nhật tin tức mới nhất về thu mua phế liệu hợp kim, mẹo tiết kiệm và kiến thức chuyên ngành hữu ích.",
    alternates: {
      canonical: `${baseUrl}/bai-viet`,
    },
    openGraph: {
      title: "Tin Tức & Kiến Thức | Thu mua phế liệu hợp kim",
      description:
        "Theo dõi những bài viết mới nhất về ngành hợp kim, mẹo tái chế và giải pháp tiết kiệm chi phí.",
      url: `${baseUrl}/bai-viet`,
      type: "website",
      images: [
        {
          url: `${baseUrl}/og-default.png`, // ✅ ảnh mặc định cho chia sẻ
          width: 1200,
          height: 630,
          alt: "Tin tức hợp kim",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Tin Tức & Kiến Thức | Thu mua phế liệu hợp kim",
      description: "Cập nhật các bài viết mới nhất về hợp kim và tái chế.",
      images: [`${baseUrl}/og-default.png`],
    },
  };
}

export default async function BlogsPage() {
  const posts = await getPublishedPosts();

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const featuredBlog = posts[0] as any;
  const fTitle =
    featuredBlog.properties.Name.title[0]?.plain_text || "Không tiêu đề";
  const fSlug = featuredBlog.properties.Slug.rich_text[0]?.plain_text || "";
  const fThumbnailRaw =
    featuredBlog.properties.Thumbnail.files[0]?.file?.url || "/placeholder.png";
  const fThumbnail = `/api/notion-image?url=${encodeURIComponent(
    fThumbnailRaw
  )}`;
  const fDate =
    featuredBlog.properties.Date.date.start || new Date().toISOString();
  const fReadTime = featuredBlog.properties.ReadTime?.number || 5; // Default read time if not set

  const otherBlogs = posts.slice(1);

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    {
      label: "Bài viết",
      href: "/bai-viet",
    },
  ];

  return (
    <section className="pt-[124px] box max-w-6xl mx-auto px-4 pb-12">
      <div className="pt-2 pb-8">
        <BreadCrumb items={breadcrumbItems} />
      </div>
      <div className="mb-10">
        <h2 className="text-3xl md:text-5xl font-semibold">
          Tin Tức & Kiến Thức
        </h2>
        <h3 className="text-base mb-2 text-gray-600 mt-2">
          Cập nhật những tin tức mới nhất về thu mua phế liệu hợp kim, các mẹo
          và kiến thức hữu ích.
        </h3>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-6 items-start md:items-center mb-10">
        <Link href={`/bai-viet/${fSlug}`}>
          <div className="rounded-lg overflow-hidden shadow hover:shadow-lg">
            <Image
              src={fThumbnail || ""}
              alt={fTitle}
              width={600}
              height={350}
              className="w-full h-auto aspect-video object-cover rounded-lg"
            />
          </div>
        </Link>
        <div>
          {/* <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 border border-blue-300 rounded-full mb-2">
              {featuredBlog.category?.name}
            </span> */}
          <h2 className="text-2xl font-bold mb-3">{fTitle}</h2>
          <p className="text-sm text-gray-600 line-clamp-3">
            {formatDate(fDate, "long", "vi")} &nbsp;•&nbsp; Khoảng{" "}
            {fReadTime || 5} phút đọc
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherBlogs.map((post: any) => {
          const title =
            post.properties.Name.title[0]?.plain_text || "Không tiêu đề";
          const slug = post.properties.Slug.rich_text[0]?.plain_text || "";
          const thumbnail =
            post.properties.Thumbnail.files[0]?.file?.url || "/placeholder.png";
          const summary =
            post.properties.Summary.rich_text[0]?.plain_text ||
            "Không có mô tả";

          return (
            <Link href={`/bai-viet/${slug}`} key={slug}>
              <div className="rounded-lg overflow-hidden bg-white shadow hover:shadow-lg transition">
                <Image
                  src={thumbnail || ""}
                  alt={title}
                  width={400}
                  height={250}
                  className="w-full h-auto aspect-video object-cover rounded-lg"
                />
                <div className="p-4">
                  {/* <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 border border-blue-300 rounded-full mb-2">
                      {blog.category?.name}
                    </span> */}
                  <h3 className="text-lg font-semibold mb-1 line-clamp-2">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {summary}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
