import Link from 'next/link';
import React from 'react';
import styles from '../styles/Navbar.module.css';
const Navbar = () => {
  return (
    <div className={styles.container}>
     <Link className={styles.logo} href="/">KR</Link>
      <nav className={styles.nav}>
        <ul className={styles.menuLinks}>
          <li><Link href="/WebDev">WEB DEVELOPMENT</Link></li>
          <li><Link href="/WebDev">MOBILE DEVELOPMENT</Link></li>
          <li><Link href="/Contact">CONTACT</Link></li>
        </ul>
        <span className="material-symbols-outlined hamburger">menu</span>
      </nav>
    </div>
  );
};

export default Navbar;
