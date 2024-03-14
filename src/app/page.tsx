import Game from "./components/atomic/molecules/game/game";
import Search from "./components/atomic/molecules/search/search";
import Topics from "./components/atomic/organisms/Topics/topics";
import Footer from "./components/atomic/organisms/footer/footer";
import Games from "./components/atomic/organisms/games/games";
import Hero from "./components/atomic/organisms/hero/hero";
import Navbar from "./components/atomic/organisms/navbar/navbar";
import styles from "./page.module.scss";
import farcry from '@/../public/img/farcry.png';
import forza from '@/../public/img/forza.png';
import fifa from '@/../public/img/fifa.png';
import minecraft from '@/../public/img/minecraft.png';

export default function Home() {
 
  const gamesData = [
    { name: 'Far Cry', image: farcry }, 
    { name: 'Forza', image: forza },
    { name: 'FIFA', image: fifa },
    { name: 'Minecraft', image: minecraft }
  ];
  
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <Topics />
      <Search />
      <Games gamesData={gamesData} />
      <Footer />
    </main>
  );
}
