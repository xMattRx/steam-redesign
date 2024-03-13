import { IconBell, IconMenu2, IconMessageCircle } from "@tabler/icons-react";
import Link from "next/link";
import styles from './navbar.module.scss'


export default function Navbar() {
   const items = [
      { label: "LOJA", href: "#" },
      { label: "BIBLIOTECA", href: "#" },
      { label: "COMUNIDADE", href: "#" },
      { label: "AJUDA", href: "#" },
   ];

   return (
      <div className={styles.Navbar}>
         <div className={styles.Navbar__content}>
            <img
               className={styles.Navbar__logo}
               src="./img/bi_steam.svg"
               alt="Steam Logo"
            />
            <ul className={styles.Navbar__itens}>
               {items.map((item, index) => (
                  <li key={index} className={styles.Navbar__item}>
                     <Link href={item.href}>{item.label}</Link>
                  </li>
               ))}
            </ul>
            <div className={styles.Navbar__iconsWrapperDesktop}>
               <div className={styles.Navbar__iconBell}>
                  <IconBell size={24} color={'#fff'} />
               </div>
               <IconMessageCircle color={'#fff'} />
            </div>
            <div className={styles.Navbar__iconProfile} />
            <div className={styles.Navbar__iconsWrapperMobile}>
               <IconMessageCircle color={'#fff'} />
               <IconMenu2 color={'#fff'} />
            </div>
         </div>
      </div>
   );
}
