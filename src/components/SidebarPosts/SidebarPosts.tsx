import Image from "next/image";
import Link from "next/link";
import styles from "./sidebarPosts.module.css";

type withImageType = {
  withImage: boolean;
  data: any;
};

const SidebarPosts = async ({ withImage, data }: withImageType) => {
  return (
    <div className={styles.items}>
      {data?.map((item: any) => (
        <Link
          href={`/posts/${item?.title}`}
          className={styles.item}
          key={item?.title}
        >
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src={item?.img} alt="" fill className={styles.image} />
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
