import { notFound } from "next/navigation";
import { NotionAPI } from "notion-client";
import { getPostBySlug } from "@/lib/notion";

import { Content } from "./_components/Content";
import { BreadCrumb } from "@/components";
import Image from "next/image";
import { Metadata } from "next";

const notionApi = new NotionAPI();

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const page = await getPostBySlug(params.slug);

  if (!page) return {};

  const title =
    (page as any).properties.Name.title[0]?.plain_text || "Không tiêu đề";

  const description =
    (page as any).properties.Summary?.rich_text[0]?.plain_text ||
    "Cập nhật tin tức mới nhất về thu mua phế liệu hợp kim.";

  const thumbnail =
    (page as any).properties.Thumbnail.files[0]?.file?.url ||
    "/placeholder.png";

  const fullUrl = `${process.env.NEXT_PUBLIC_CLIENT_URL}/bai-viet/${params.slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: fullUrl,
      images: [
        {
          url: thumbnail,
          width: 800,
          height: 400,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [thumbnail],
    },
  };
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function BlogPost({ params }: { params: any }) {
  const { slug } = params;
  const page = await getPostBySlug(slug);

  if (!page) return notFound();

  const recordMap = await notionApi.getPage(page.id);

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    {
      label: "Bài viết",
      href: "/bai-viet",
    },
    {
      label:
        (page as any).properties.Name.title[0]?.plain_text || "Không tiêu đề",
      href: `/bai-viet/${slug}`,
    },
  ];

  const thumbnail =
    (page as any).properties.Thumbnail.files[0]?.file?.url ||
    "/placeholder.png";

  const title =
    (page as any).properties.Name.title[0]?.plain_text || "Không tiêu đề";

  return (
    <section className="pt-[124px] box max-w-6xl mx-auto px-4 pb-12">
      <div className="pt-2 pb-2">
        <BreadCrumb items={breadcrumbItems} />
      </div>
      <div className="mt-4">
        <Image
          src={thumbnail}
          alt={title}
          width={800}
          height={400}
          className="w-full h-auto max-h-[350px] object-cover rounded-lg max-w-[600px]"
          sizes="100vw"
        />
        <Content recordMap={recordMap} />
      </div>
    </section>
  );
}
