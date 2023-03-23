import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';
const Navbar = () => {
  const [openMenu,setOpenMenu] = useState(false);
  return (
    <div className={styles.container}>
     <Link className={styles.logo} href="/">KR</Link>
      <nav className={styles.nav}>
        <ul className={styles.menuLinks}>
          <li><Link href="/WebDev">WEB DEVELOPMENT</Link></li>
          <li><Link href="/WebDev">MOBILE DEVELOPMENT</Link></li>
          <li><Link href="/Contact">CONTACT</Link></li>
        </ul>
        <span className="material-symbols-outlined hamburger" onClick={()=>setOpenMenu(!openMenu)}>menu</span>    
      </nav>
      <ul onClick={()=>setOpenMenu(false)} className={styles.mobileMenu} style={{display: openMenu?"flex" : "none"}}>
          <li><Link href="/WebDev">WEB DEVELOPMENT</Link></li>
          <li><Link href="/WebDev">MOBILE DEVELOPMENT</Link></li>
          <li><Link href="/Contact">CONTACT</Link></li>
        </ul>
    </div>
  );
};

export default Navbar;
