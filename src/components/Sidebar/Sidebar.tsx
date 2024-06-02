import React from "react";
import styles from "./sidebar.module.css";
import SidebarPosts from "../SidebarPosts/SidebarPosts";
import SidebarCategory from "../SidebarCategory/SidebarCategory";
const Sidebar = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <SidebarPosts withImage={true} />
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <SidebarCategory />
    </div>
  );
};

export default Sidebar;
