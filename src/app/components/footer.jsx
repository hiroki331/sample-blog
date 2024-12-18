import Link from "next/link";
import styles from "@/../styles/layout/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p classNmae={styles.footer_txt}>
        &copy; {new Date().getFullYear()} test Company
      </p>
    </footer>
  );
};

export default Footer;
