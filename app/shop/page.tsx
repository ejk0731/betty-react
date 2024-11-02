import Link from 'next/link';
import styles from './shop.module.scss';
import Header from '@/components/common/Header';
// const cx =
export default function Shop() {
  return (
    <>
      <Header />
      <h1>Shop</h1>
      <div className={styles.wrap}></div>
      <p>
        <Link href="/shop/top">Top</Link>
      </p>
      <p>
        <Link href="/shop/outwear">Outwear</Link>
      </p>
    </>
  );
}
