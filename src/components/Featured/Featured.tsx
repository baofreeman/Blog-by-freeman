import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

const Featured = ({ data }: { data: any }) => {
  const filterViews = (list: any) => {
    const maxView = Math.max(...list.map((item: any) => item.view));
    return list.filter((item: any) => item?.view === maxView);
  };
  const result = filterViews(data);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, freeman dev here!</b> Discover my stories and creative ideas.
      </h1>
      {result?.length && (
        <div className={styles.post}>
          <div className={styles.imgContainer}>
            {result[0]?.img && (
              <Image
                src={result[0]?.img}
                alt=""
                fill
                className={styles.image}
              />
            )}
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.postTitle}>{result[0]?.title}</h1>
            <p className={styles.postDesc}>{result[0]?.desc}</p>
            <Link className={styles.link} href={`/posts/${result[0]?.slug}`}>
              Read More
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Featured;
