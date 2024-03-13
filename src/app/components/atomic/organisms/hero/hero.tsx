import styles from "./hero.module.scss"

export default function Hero() {

  return (
    <>
      <div className={styles.Hero}>
        <div className={styles.Hero__content}>
          <img
            className={styles.Hero__logo}
            src={"./img/RedDead-logo.png"}
          />
          <p className={styles.Hero__description}>
            Estados Unidos, 1899. O fim da era do velho oeste começou, e as
            autoridades estão caçando as últimas gangues de fora da lei que
            restam. Os que não se rendem, nem sucumbem, são mortos.
          </p>
          <button className={styles.Hero__button}>COMPRE AGORA</button>
        </div>
      </div>
    </>
  )
}
