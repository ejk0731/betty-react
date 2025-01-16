import Link from 'next/link';
import styles from './Header.module.scss';
import NavLink from './NavLink';
import Cart from './Cart';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_wrap}>
        <div className={styles.header_left}>
          <Link href={'/'} className={styles.logo}>
            <h1>Betty</h1>
          </Link>
          <nav>
            <ul className={styles.main_nav}>
              <li className={styles.main_nav_item}>
                <NavLink href={'/shop'}>SHOP</NavLink>

                <ul className={styles.sub_nav} style={{ display: 'none' }}>
                  <li className={styles.sub_nav_item}>
                    <button type="button">New Arrivals</button>
                  </li>
                  <li className={styles.sub_nav_item}>
                    <button type="button">Outerwear</button>
                  </li>
                  <li className={styles.sub_nav_item}>
                    <button type="button">Top</button>
                  </li>
                  <li className={styles.sub_nav_item}>
                    <button type="button">Bottom</button>
                  </li>
                  <li className={styles.sub_nav_item}>
                    <button type="button">Dress</button>
                  </li>
                  <li className={styles.sub_nav_item}>
                    <button type="button">Accessories</button>
                  </li>
                </ul>
              </li>
              <li className={styles.main_nav_item}>
                <NavLink href={'/category'}>COLLECTION</NavLink>
                {/* <button type="button">COLLECTION</button> */}
              </li>
              <li className={styles.main_nav_item}>
                <NavLink href={'/product'}>ABOUT</NavLink>
                {/* <button type="button">ABOUT</button> */}
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

        <ul className={styles.sub_nav}>
          <li className={styles.sub_nav_item}>
            <button type="button">LOGIN</button>
          </li>
          <li className={styles.sub_nav_item}>
            <button type="button">SEARCH</button>
          </li>
          <li className={styles.sub_nav_item}>
            <button type="button">
              <Cart />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
