import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
const Card = ({ key, item }: { key: any; item: any }) => {
  return (
    <div className={styles.container} key={key}>
      {item.image && (
        <div className={styles.imageContainer}>
          <Image className={styles.image} src={"/images/p1.png"} alt="" fill />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} - {""}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1 className={styles.cardTitle}>{item.title}</h1>
        </Link>
        <p className={styles?.desc}>{item?.desc}</p>
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
