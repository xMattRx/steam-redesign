import { IconSearch } from '@tabler/icons-react'
import styles from './search.module.scss'

function Search() {
  return (
    <div className={styles.Search}>
        <div className={styles.Search__content}>
            <input className={styles.Search__input} type="text" placeholder='BUSCAR' />
            <div className={styles.Search__icon}>
                <IconSearch  />
            </div>
        </div>
    </div>
  )
}

export default Search