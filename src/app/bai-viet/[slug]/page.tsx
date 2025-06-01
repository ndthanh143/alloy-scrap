import { notFound } from "next/navigation";
import { NotionAPI } from "notion-client";
import { Card } from "@/components/ui/card";
import { getPostBySlug } from "@/lib/notion";

import { Content } from "./_components/Content";
import { BreadCrumb } from "@/components";

const notionApi = new NotionAPI();

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const page = await getPostBySlug(params.slug);

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
      href: `/bai-viet/${params.slug}`,
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
