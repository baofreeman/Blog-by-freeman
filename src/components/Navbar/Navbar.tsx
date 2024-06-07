"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import AuthLink from "../AuthLinks/AuthLink";
import Image from "next/image";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image src={"/images/logo.jpg"} alt="" width={48} height={48} />
      </Link>
      <div className={styles.links}>
        <Link href="/" className={styles.link}>
          <span
            className={`${styles.linkTitle} ${
              pathname === "/" ? styles.active : ""
            }`}
          >
            Home
          </span>
        </Link>
        <Link href="/blog" className={styles.link}>
          <span
            className={`${styles.linkTitle} ${
              pathname === "/blog" ? styles.active : ""
            }`}
          >
            Blog
          </span>
        </Link>
        <Link href="/about" className={`${styles.link}`}>
          <span
            className={`${styles.linkTitle} ${
              pathname === "/about" ? styles.active : ""
            }`}
          >
            About
          </span>
        </Link>
      </div>
      <div className={styles.buger}>
        <ThemeToggle />
        <AuthLink />
      </div>
    </div>
  );
};

export default Navbar;
