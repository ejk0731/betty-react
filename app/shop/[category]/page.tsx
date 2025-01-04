import styles from './page.module.scss';
import { getCategoryItems, getItems } from '@/lib/apis/items';
import ItemsGrid from '@/components/Item/ItemsGrid';
import SubNav from '@/components/Header/SubNav';
import { Suspense } from 'react';
import BestItemGrid from '@/components/Item/BestItemGrid';
import Layout from '@/components/Layout/Layout';
import { Metadata } from 'next';
import { CategoryItems } from '@/components/Item/CategoryItems';

export const metadata: Metadata = {
  title: 'Shop Items',
  description: 'Browse the items in our shop',
};

export default function ShopCategory({ params }: { params: any }) {
  return (
    <Layout>
      <div className={styles.wrap}>
        <SubNav />
        <BestItemGrid />
        <Suspense fallback={<div>loading...</div>}>
          <CategoryItems category={params.category} />
        </Suspense>
      </div>
    </Layout>
  );
}
