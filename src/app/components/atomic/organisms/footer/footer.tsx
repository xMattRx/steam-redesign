import styles from './footer.module.scss'
import steamLogo from '@/../public/img/bi_steam.svg'
import Image from 'next/image'

function Footer() {
  return (
    <div className={styles.footer}>
        <Image src={steamLogo} alt="steam logo" />
    </div>
  )
}

export default Footer