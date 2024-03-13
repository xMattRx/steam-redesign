import Topics from "./components/atomic/organisms/Topics/topics";
import Hero from "./components/atomic/organisms/hero/hero";
import Navbar from "./components/atomic/organisms/navbar/navbar";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <Hero/>
      <Topics/>
    </main>
  );
}
