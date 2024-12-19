import Link from "next/link";
import styles from "../../../styles/components/topNews.module.css";
import { getTopNews } from "@/../libs/client";
import NewsList from "./newsList";

export default async function TopNews() {
  const { contents } = await getTopNews();
  return (
    <div className={styles.newsListOuter}>
      <NewsList contents={contents} />
      <Link href="/news" className={styles.news__btn}>
        More
      </Link>
    </div>
  );
}
