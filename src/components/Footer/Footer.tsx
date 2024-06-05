import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/images/p1.png" alt="lama blog" width={50} height={50} />
          <h1 className={styles.logoText}>Freeman Blog</h1>
        </div>
        <p className={styles.desc}>Share your life</p>
        <div className={styles.icons}>
          <Facebook width={28} height={28} />
          <Instagram width={28} height={28} />
          <Twitter width={28} height={28} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Food</Link>
          <Link href="/">Travel</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
