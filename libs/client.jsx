import { createClient } from "microcms-js-sdk";

if (!process.env.SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});

// TOPページのニュース一覧の件数を取得
export const getTopNews = async () => {
  const news = await client.getList({
    endpoint: "news",
    queries: { limit: 3 },
  });
  return news;
};

// ニュース一覧を取得
export const getNews = async () => {
  const news = await client.getList({
    endpoint: "news",
  });
  return news;
};

// ニュースの詳細を取得
export const getNewsDetail = async (contentId) => {
  const news = await client.getListDetail({
    endpoint: "news",
    contentId,
  });
  return news;
};

// 開発実績一覧を取得
export const getWorks = async () => {
  const works = await client.getList({
    endpoint: "works",
    queries: { limit: 6 },
  });
  return works;
};
