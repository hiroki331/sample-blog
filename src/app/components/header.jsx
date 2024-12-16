import Link from "next/link";
import styles from "../../../styles/layout/header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <h1 className={styles.header__logo}>
          <Link href="/">Logo</Link>
        </h1>
        <nav className={styles.header__menu}>
          <ul className={styles.header__menuList}>
            <li className={styles.header__menuItem}>
              <Link href="/news">お知らせ</Link>
            </li>
            <li className={styles.header__menuItem}>
              <Link href="/business">事業詳細</Link>
            </li>
            <li className={styles.header__menuItem}>
              <Link href="/works">開発実績</Link>
            </li>
            <li className={styles.header__menuItem}>
              <Link href="/company">会社概要</Link>
            </li>
            <li className={styles.header__menuItem}>
              <Link href="/recruit">採用情報</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
