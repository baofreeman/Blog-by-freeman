"use client";

import { LogOut, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./auth.module.css";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

type OpenType = boolean;

const AuthLink = () => {
  const [open, setOpen] = useState<OpenType>(false);
  const { status } = useSession();
  const handleOpenBuger = () => {
    setOpen(!open);
  };
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      setOpen(false);
    }
  }, [pathname]);
  return (
    <>
      {status === "unauthenticated" ? (
        <>
          <Link href={"/login"} className={styles.link}>
            Login
          </Link>
        </>
      ) : (
        <div className={styles.links}>
          <Link href={"/write"} className={styles.link}>
            Write
          </Link>
          <button onClick={() => signOut()} className={styles.button}>
            Sign out
          </button>
        </div>
      )}
      <div className={styles.buger} onClick={handleOpenBuger}>
        {open ? <X width={30} height={30} /> : <Menu width={30} height={30} />}
      </div>
      {open && (
        <div className={styles.reponsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
          {status === "unauthenticated" ? (
            <Link href={"/login"}>Login</Link>
          ) : (
            <>
              <Link href={"/write"}>Write</Link>
              <button onClick={() => signOut()} className={styles.buttonMobile}>
                Sign out
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLink;
