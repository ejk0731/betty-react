import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className="header">
      <Link href={'/'}>
        <div className={styles.logo}>
          <a href="./index.html">Betty</a>
        </div>
        <nav>
          <ul>
            <li>
              SHOP
              <ul className="gnb_inner">
                <li>
                  <a href="product.html?cate=new">New Arrivals</a>
                </li>
                <li>
                  <a href="product.html?cate=outer">Outerwear</a>
                </li>
                <li>
                  <a href="product.html?cate=top">Top</a>
                </li>
                <li>
                  <a href="product.html?cate=bottom">Bottom</a>
                </li>
                <li>
                  <a href="product.html?cate=dress">Dress</a>
                </li>
                <li>
                  <a href="product.html?cate=acc">Accessories</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="product.html?cate=outer">COLLECTION</a>
            </li>
            <li>
              <a href="product.html?cate=top">ABOUT</a>
            </li>
            <li>
              <a href="product.html?cate=bottom">COMMUNITY</a>
            </li>
            <li>
              <a href="product.html?cate=dress">MY ACCOUNT</a>
            </li>
            <li className="submenu">
              <ul>
                <li>
                  <a href="#">LOGIN</a>
                </li>
                <li>
                  <a href="#">SEARCH</a>
                </li>
                <li>
                  <a href="#">
                    CART(<span>0</span>)
                  </a>
                </li>
              </ul>
            </li>
            {/* 햄버거 버튼 max-width: 1120px */}
            <li className="ham_box">
              <a href="#">
                <img src="./img/icon_shoppingbag.png" alt="icon_shoppingbag" />
              </a>
              <img className="ham_btn" src="./img/ham.png" alt="ham" />
            </li>
          </ul>
        </nav>
      </Link>
    </header>
  );
}
