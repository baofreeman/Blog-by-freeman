import CardList from "../components/CardList/CardList";
import CategoryList from "../components/CategoryList/CategoryList";
import Featured from "../components/Featured/Featured";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./page.module.css";

const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/posts/popular", {
      cache: "no-cache",
    });
    if (!res.ok) {
      throw new Error("failed");
    }
    return res.json();
  } catch (error) {
    return error;
  }
};

export default async function Home({ searchParams }: { searchParams: any }) {
  const page = parseInt(searchParams.page) || 1;
  const data = await getData();

  return (
    <main className={styles.container}>
      <Featured data={data} />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} />
        <Sidebar data={data} />
      </div>
    </main>
  );
}
