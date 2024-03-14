import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from './game.module.scss';

interface GameProps {
  image: StaticImageData;
  name: string;
}

const Game: React.FC<GameProps> = ({ image, name }) => {
  return (
    <div className={styles.Game}>
      <Image className={styles.Game__image} src={image} alt={name} />
    </div>
  );
}

export default Game;
