import CardList from "../../components/CardList/CardList";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./blogPage.module.css";

const Blog = ({ searchParams }: { searchParams: any }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat}</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Sidebar />
      </div>
    </div>
  );
};

export default Blog;
