import { StaticImageData } from 'next/image';
import React from 'react';
import styles from './games.module.scss';
import Game from '../../molecules/game/game';

interface GameData {
  name: string;
  image: StaticImageData;
}

interface GamesProps {
  gamesData: GameData[];
}

const Games: React.FC<GamesProps> = ({ gamesData }) => {
  return (
    <div className={styles.games}>
      <div className={styles.games__row}>
        {gamesData.map((game, index) => (
          <Game key={index} image={game.image} name={game.name} />
        ))}
      </div>
    </div>
  );
}

export default Games;
