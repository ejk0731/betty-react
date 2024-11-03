import Link from 'next/link';
import styles from './shop.module.scss';
import Header from '@/components/header/Header';
import { getItems } from '@/lib/items';
import ItemsGrid from '@/components/items/ItemsGrid';

export default async function Shop() {
  const items = await getItems();
  console.log(items);
  return (
    <>
      <Header />
      <main style={{ height: '200px', background: 'pink' }}>
        <ItemsGrid items={items} />
      </main>
    </>
  );
}
