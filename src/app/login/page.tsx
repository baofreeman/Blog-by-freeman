"use client";

import { useRouter } from "next/navigation";
import styles from "./loginPage.module.css";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

const LoginPage = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status]);

  if (status === "loading") return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          Sign in with Google
        </div>
        <div className={styles.socialButton} onClick={() => signIn("github")}>
          Sign in with Github
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
