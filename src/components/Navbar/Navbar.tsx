import Link from "next/link";
import styles from "./navbar.module.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import AuthLink from "../AuthLinks/AuthLink";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={"/images/logo.jpg"} alt="" width={48} height={48} />
      </div>
      <div className={styles.links}>
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link href="/" className={styles.link}>
          Contact
        </Link>
        <Link href="/" className={styles.link}>
          About
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
