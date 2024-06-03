import Image from "next/image";
import Link from "next/link";
import styles from "./sidebarPosts.module.css";

type withImageType = {
  withImage: boolean;
};

const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/posts/popular");
    if (!res.ok) {
      throw new Error("failed");
    }
    return res.json();
  } catch (error) {
    return error;
  }
};

const SidebarPosts = async ({ withImage }: withImageType) => {
  const data = await getData();
  return (
    <div className={styles.items}>
      {data?.map((item: any) => (
        <Link href={`/posts/${item?.title}`} className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image
                src="/images/p1.png"
                alt=""
                fill
                className={styles.image}
              />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              {item?.catSlug}
            </span>
            <h3 className={styles.postTitle}>{item?.title}</h3>
            <div className={styles.detail}>
              <span className={styles.username}>{item?.user?.name}</span>
              <span className={styles.date}>
                - {item?.createdAt.substring(0, 10)}
              </span>
            </div>
            <span className={styles.views}>Views: {item?.view}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SidebarPosts;
