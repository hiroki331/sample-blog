import Link from "next/link";
import styles from "../../../styles/common.module.css";
import { getNews } from "@/../libs/client";
import NewsList from "@/app/components/newsList";
import Pagination from "@/app/components/pagination";

export default async function StaticPage() {
  const { totalCount, contents } = await getNews();
  return (
    <>
      <div className={styles.page}>
        <main className={styles.main}>
          <h1 className={styles.ttl}>
            お知らせ<span className={styles.ttl__sub}>News</span>
          </h1>
          <section className={styles.inner}>
            <div className={styles.newsListOuter}>
              <NewsList contents={contents} />
              <Pagination totalCount={totalCount} />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
