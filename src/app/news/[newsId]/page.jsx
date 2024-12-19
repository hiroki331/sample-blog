import Link from "next/link";
import { getNews, getNewsDetail } from "@/../libs/client";

export async function generateStaticParams() {
  const { contents } = await getNews();

  return contents.map((news) => ({
    newsId: news.id,
  }));
}

export default async function StaticDetailPage({ params }) {
  const { newsId } = params; // propsから分割代入で取得
  const news = await getNewsDetail(newsId);

  return (
    <>
      <p>{news.title}</p>
    </>
  );
}
