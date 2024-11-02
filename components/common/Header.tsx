import Link from 'next/link';
import styles from './Header.module.scss';
import NavLink from './NavLink';

export default function Header() {
  return (
    <header className={styles.header}>
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
            <button type="button">COLLECTION</button>
          </li>
          <li className={styles.main_nav_item}>
            <NavLink href={'/about'}>ABOUT</NavLink>
          </li>
          <li className={styles.main_nav_item}>
            <button type="button">COMMUNITY</button>
          </li>
          <li className={styles.main_nav_item}>
            <button type="button">MY ACCOUNT</button>
          </li>
        </ul>
      </nav>
      <ul className={styles.sub_nav}>
        <li className={styles.sub_nav_item}>
          <button type="button">LOGIN</button>
        </li>
        <li className={styles.sub_nav_item}>
          <button type="button">SEARCH</button>
        </li>
        <li className={styles.sub_nav_item}>
          <button type="button">
            CART(<span>0</span>)
          </button>
        </li>
      </ul>
    </header>
  );
}
