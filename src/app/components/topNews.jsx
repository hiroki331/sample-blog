import Link from "next/link";
import styles from "../../../styles/components/topNews.module.css";
import { getTopNews } from "@/../libs/client";

export default async function TopNews() {
  const { contents } = await getTopNews();

  if (!contents) {
    return <h1>No Contents</h1>;
  }

  return (
    <div className={styles.newsListOuter}>
      <ul className={styles.newsList}>
        {contents.map((news) => {
          // 年月日に変換
          const date = new Date(news.publishedAt);
          const options = { year: "numeric", month: "long", day: "numeric" };
          const formattedDate = date.toLocaleDateString("ja-JP", options);
          const newsCategory = news.category; // カテゴリー

          return (
            <li className={styles.newsList__item} key={news.id}>
              <Link className={styles.newsList__link} href={`/news/${news.id}`}>
                <span className={styles.newsList__cat}>
                  {newsCategory.map((category) => category.name)}
                </span>
                <span className={styles.newsList__day}>{formattedDate}</span>
                <p className={styles.newsList__txt}>{news.title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
