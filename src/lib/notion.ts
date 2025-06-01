import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_SECRET });

const databaseId = process.env.NOTION_DATABASE_ID!;

export async function getPublishedPosts() {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });

  return response.results;
}

export async function getPostBySlug(slug: string) {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Slug",
      rich_text: {
        equals: slug,
      },
    },
  });

  return response.results[0];
}
