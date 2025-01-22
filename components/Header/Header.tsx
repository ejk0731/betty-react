'use client';
import Link from 'next/link';
import styles from './Header.module.scss';
import NavLink from './NavLink';
import { useEffect, useState } from 'react';
import { poppins400 } from '@/app/styles/fonts';
import BtnHamburger from './BtnHamburger';
import Utility from './Utility';

export default function Header() {
  const initialScreen = window.innerWidth;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [screenWidth, SetScreenWidth] = useState(initialScreen);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  const updateScreenWidth = () => {
    SetScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll); //clean up
    };
    // console.log('header background');
  }, [scrollPosition]);

  useEffect(() => {
    window.addEventListener('resize', updateScreenWidth);
    return () => {
      window.removeEventListener('resize', updateScreenWidth); //clean up
    };
    console.log('header size');
  }, [screenWidth]);

  return (
    <header
      className={`${styles.header} ${scrollPosition > 80 && styles.is_active}`}
    >
      <div className={styles.header_wrap}>
        <div className={styles.header_box}>
          {screenWidth < 1024 && <BtnHamburger />}

          <Link href={'/'} className={styles.logo}>
            <h1>Betty</h1>
          </Link>

          <nav className={`${screenWidth < 1024 && styles.is_mobile}`}>
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
            </ul>
          </nav>
        </div>

        <Utility isMobile={screenWidth < 1024} />
      </div>
    </header>
  );
}
