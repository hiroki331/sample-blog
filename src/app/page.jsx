import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";
import Footer from "./components/footer";
import TopSlider from "./components/topSlider";
import TopNews from "./components/topNews";
import WorksSlider from "./components/worksSlider/worksImg";

export default function Home() {
  const bussinessImgs = [
    "/dummy02.jpg",
    "/dummy02.jpg",
    "/dummy02.jpg",
    "/dummy02.jpg",
    "/dummy02.jpg",
  ];
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <TopSlider />
        <section className={`${styles.news} ${styles.inner}`}>
          <h2 className={styles.ttl}>
            お知らせ<span className={styles.ttl__sub}>News</span>
          </h2>
          <TopNews />
        </section>
        <section className={`${styles.bussiness} ${styles.inner}`}>
          <h2 className={styles.ttl}>
            事業詳細<span className={styles.ttl__sub}>Business</span>
          </h2>
          <div className={styles.bussinessListOuter}>
            <ul className={styles.bussinessList}>
              {bussinessImgs.map((img, index) => (
                <li key={index} className={styles.bussinessList__item}>
                  <Image src={img} width={1000} height={800} alt="" />
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className={`${styles.works} ${styles.inner}`}>
          <h2 className={styles.ttl}>
            開発実績<span className={styles.ttl__sub}>Works</span>
          </h2>
          <WorksSlider />
        </section>
      </main>
      <Footer />
    </div>
  );
}
