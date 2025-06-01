import { notFound } from "next/navigation";
import { NotionAPI } from "notion-client";
import { getPostBySlug } from "@/lib/notion";

import { Content } from "./_components/Content";
import { BreadCrumb } from "@/components";

const notionApi = new NotionAPI();

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

  return (
    <section className="pt-[124px] box max-w-6xl mx-auto px-4 pb-12">
      <div className="pt-2 pb-2">
        <BreadCrumb items={breadcrumbItems} />
      </div>
      <Content recordMap={recordMap} />
    </section>
  );
}
