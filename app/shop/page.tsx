import Link from 'next/link';
import styles from './page.module.scss';
import Header from '@/components/header/Header';
import { getItems } from '@/lib/items';
import ItemsGrid from '@/components/items/ItemsGrid';
import SubNav from '@/components/header/SubNav';
import { Suspense } from 'react';

async function Items() {
  const items = await getItems();
  return <ItemsGrid items={items} />;
}

export default function Shop() {
  return (
    <>
      <Header />
      <main className={styles.wrap}>
        <SubNav />
        <Suspense fallback={<div>loading...</div>}>
          <Items />
        </Suspense>
      </main>
    </>
  );
}
