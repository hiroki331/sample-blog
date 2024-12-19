import Link from "next/link";
import styles from "../../../styles/components/topNews.module.css";

export default async function NewsList({ contents }) {
  return (
    <>
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
    </>
  );
}
