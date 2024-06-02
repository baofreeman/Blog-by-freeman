import CardList from "../components/CardList/CardList";
import CategoryList from "../components/CategoryList/CategoryList";
import Featured from "../components/Featured/Featured";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./page.module.css";

export default function Home({ searchParams }: { searchParams: any }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <main className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} />
        <Sidebar />
      </div>
    </main>
  );
}
