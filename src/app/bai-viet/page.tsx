import Link from "next/link";
import { getPublishedPosts } from "@/lib/notion";
import { formatDate } from "@/lib/formatDate";
import Image from "next/image";
import { BreadCrumb } from "@/components";

export const revalidate = 3600;

export default async function BlogsPage() {
  const posts = await getPublishedPosts();

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const featuredBlog = posts[0] as any;
  const fTitle =
    featuredBlog.properties.Name.title[0]?.plain_text || "Không tiêu đề";
  const fSlug = featuredBlog.properties.Slug.rich_text[0]?.plain_text || "";
  const fThumbnail =
    featuredBlog.properties.Thumbnail.files[0]?.file?.url || "/placeholder.png";
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
        <h2 className="text-5xl font-semibold">Tin Tức & Kiến Thức</h2>
        <h3 className="text-base mb-2 text-gray-600 mt-2">
          Cập nhật những tin tức mới nhất về thu mua phế liệu hợp kim, các mẹo
          và kiến thức hữu ích.
        </h3>
      </div>
      <div className="grid md:grid-cols-2 gap-6 items-center mb-10">
        <Link href={`/bai-viet/${fSlug}`}>
          <div className="rounded-lg overflow-hidden shadow hover:shadow-lg">
            <Image
              src={fThumbnail || ""}
              alt={fTitle}
              width={600}
              height={350}
              className="w-full h-auto max-h-[350px] object-cover rounded-lg"
            />
          </div>
        </Link>
        <div>
          {/* <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 border border-blue-300 rounded-full mb-2">
              {featuredBlog.category?.name}
            </span> */}
          <h2 className="text-2xl font-bold mb-3">{fTitle}</h2>
          <p className="text-sm text-gray-500">
            {formatDate(fDate, "long", "vi")} &nbsp;•&nbsp; Khoảng{" "}
            {fReadTime || 5} phút đọc
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
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
                  className="w-full h-auto max-h-[250px] object-cover"
                />
                <div className="p-4">
                  {/* <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 border border-blue-300 rounded-full mb-2">
                      {blog.category?.name}
                    </span> */}
                  <h3 className="text-lg font-semibold mb-1">{title}</h3>
                  <p className="text-sm text-gray-600">{summary}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
