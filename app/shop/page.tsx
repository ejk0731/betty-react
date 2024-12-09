import styles from './page.module.scss';
import { getItems } from '@/lib/items';
import ItemsGrid from '@/components/Item/ItemsGrid';
import SubNav from '@/components/Header/SubNav';
import { Suspense } from 'react';
import BestItemGrid from '@/components/Item/BestItemGrid';
import Layout from '@/components/Layout/Layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop Items',
  description: 'Browse the items in our shop',
};

async function Items() {
  const items = await getItems();
  return <ItemsGrid items={items} />;
}

export default function Shop() {
  return (
    <Layout>
      <div className={styles.wrap}>
        <SubNav />
        <BestItemGrid />
        <Suspense fallback={<div>loading...</div>}>
          <Items />
        </Suspense>
      </div>
    </Layout>
  );
}
