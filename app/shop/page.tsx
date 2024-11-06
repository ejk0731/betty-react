import Link from 'next/link';
import styles from './page.module.scss';
import Header from '@/components/header/Header';
import { getItems } from '@/lib/items';
import ItemsGrid from '@/components/items/ItemsGrid';
import SubNav from '@/components/header/SubNav';

export default async function Shop() {
  const items = await getItems();
  console.log(items);
  return (
    <>
      <Header />
      <main className={styles.wrap}>
        <SubNav />
        <ItemsGrid items={items} />
      </main>
    </>
  );
}
