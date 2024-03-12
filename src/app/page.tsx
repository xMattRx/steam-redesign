import Navbar from "./components/navbar/navbar";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
    </main>
  );
}
