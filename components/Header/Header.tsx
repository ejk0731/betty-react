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
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [screenWidth, SetScreenWidth] = useState<number>(initialScreen);
  const [mobileNavStatus, setMobileNavStatus] = useState<boolean>(false);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  const updateScreenWidth = () => {
    SetScreenWidth(window.innerWidth);
  };

  const handleClickNav = () => {
    setMobileNavStatus(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    console.log('top');
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    // console.log('header background');
    return () => {
      window.removeEventListener('scroll', updateScroll); //clean up
    };
  }, [scrollPosition]);

  useEffect(() => {
    window.addEventListener('resize', updateScreenWidth);
    // console.log('header resize');
    return () => {
      window.removeEventListener('resize', updateScreenWidth); //clean up
    };
  }, [screenWidth]);

  return (
    <header
      className={`${styles.header} ${scrollPosition > 80 ? styles.is_active : null}`}
    >
      <div className={styles.header_wrap}>
        <div className={styles.header_box}>
          {screenWidth < 1024 && (
            <BtnHamburger
              mobileNavStatus={mobileNavStatus}
              setMobileNavStatus={setMobileNavStatus}
            />
          )}

          <Link href={'/'} className={styles.logo}>
            <h1>Betty</h1>
          </Link>

          <nav
            className={`${styles.nav} ${mobileNavStatus && styles.is_active}`}
          >
            <ul className={styles.main_nav}>
              <li className={styles.main_nav_item}>
                <NavLink href={'/shop'} onClick={handleClickNav}>
                  SHOP
                </NavLink>

                <ul className={`${poppins400.className} ${styles.sub_nav}`}>
                  <li className={styles.sub_nav_item}>
                    <NavLink href={'/shop'} onClick={handleClickNav}>
                      New Arrivals
                    </NavLink>
                  </li>
                  <li className={styles.sub_nav_item}>
                    <NavLink href={'/category'} onClick={handleClickNav}>
                      Outerwear
                    </NavLink>
                  </li>
                  <li className={styles.sub_nav_item}>
                    <NavLink href={'/category'} onClick={handleClickNav}>
                      Top
                    </NavLink>
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

        <Utility />
      </div>
    </header>
  );
}
