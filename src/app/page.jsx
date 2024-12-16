"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";
import Footer from "./components/footer";
import TopSlider from "./components/topSlider";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <TopSlider />
        <section className="">
          <h2>
            お知らせ<span>News</span>
          </h2>
          <div>
            <ul>
              <li>
                <span>20XX年〇月〇日</span>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </li>
              <li>
                <span>20XX年〇月〇日</span>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </li>
            </ul>
          </div>
        </section>
        <section>
          <div>
            <h2>
              Business<span>事業詳細</span>
            </h2>
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
          <div>
            <ul>
              <li>
                <Image src="/dummy02.jpg" width={1000} height={800} alt="" />
              </li>
              <li>
                <Image src="/dummy02.jpg" width={1000} height={800} alt="" />
              </li>
              <li>
                <Image src="/dummy02.jpg" width={1000} height={800} alt="" />
              </li>
              <li>
                <Image src="/dummy02.jpg" width={1000} height={800} alt="" />
              </li>
              <li>
                <Image src="/dummy02.jpg" width={1000} height={800} alt="" />
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2>
            Business<span>事業詳細</span>
          </h2>
        </section>
      </main>
      <Footer />
    </div>
  );
}
