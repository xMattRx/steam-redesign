import styles from "./topics.module.scss"

export default function Topics() {

  return (
    <>
      <div className={styles.Topics}>
        <div className={styles.Topics__content}>
          <ul className={styles.Topics__list}>
            <li className={styles.Topics__item} >Novidades e Tendências</li>
            <li className={styles.Topics__item} >Categorias</li>
            <li className={styles.Topics__item} >Loja de pontos</li>
            <li className={styles.Topics__item} >Notícias</li>
            <li className={styles.Topics__item} >Laboratório</li>
          </ul>
        </div>
      </div>
    </>
  )
}
