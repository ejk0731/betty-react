'use client';
import Link from 'next/link';
import styles from './Header.module.scss';
import NavLink from './NavLink';
import Cart from './Cart';
import { useEffect, useState } from 'react';
import { poppins400 } from '@/app/styles/fonts';
import BtnHamburger from './BtnHamburger';

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll); //clean up
    };
    // console.log('header background');
  }, [scrollPosition]);

  return (
    <header
      className={`${styles.header} ${scrollPosition > 80 && styles.is_active}`}
    >
      <div className={styles.header_wrap}>
        <BtnHamburger />
        <div className={styles.header_box}>
          <Link href={'/'} className={styles.logo}>
            <h1>Betty</h1>
          </Link>
          <nav>
            <ul className={styles.main_nav}>
              <li className={styles.main_nav_item}>
                <NavLink href={'/shop'}>SHOP</NavLink>

                <ul className={`${poppins400.className} ${styles.sub_nav}`}>
                  <li className={styles.sub_nav_item}>
                    <NavLink href={'/shop'}>New Arrivals</NavLink>
                  </li>
                  <li className={styles.sub_nav_item}>
                    <NavLink href={'/category'}>Outerwear</NavLink>
                  </li>
                  <li className={styles.sub_nav_item}>
                    <NavLink href={'/category'}>Top</NavLink>
                  </li>
                  {/* <li className={styles.sub_nav_item}>
                    <button type="button">Bottom</button>
                  </li>
                  <li className={styles.sub_nav_item}>
                    <button type="button">Dress</button>
                  </li>
                  <li className={styles.sub_nav_item}>
                    <button type="button">Accessories</button>
                  </li> */}
                </ul>
              </li>
              <li className={styles.main_nav_item}>
                <button type="button">COLLECTION</button>
              </li>
              <li className={styles.main_nav_item}>
                <button type="button">ABOUT</button>
              </li>
              <li className={styles.main_nav_item}>
                <button type="button">COMMUNITY</button>
              </li>
              {/* <li className={styles.main_nav_item}>
              <button type="button">MY ACCOUNT</button>
            </li> */}
            </ul>
          </nav>
        </div>

        <ul className={styles.utility}>
          <li className={styles.utility_item}>
            <button type="button">LOGIN</button>
          </li>
          <li className={styles.utility_item}>
            <button type="button">SEARCH</button>
          </li>
          <li className={styles.utility_item}>
            <button type="button">
              <Cart />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
