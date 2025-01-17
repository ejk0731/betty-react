import styles from './page.module.scss';
import SubNav from '@/components/Shop/SubNav';
import { Suspense } from 'react';
import Layout from '@/components/Layout/Layout';
import { Metadata } from 'next';
import { CategoryItems } from '@/components/Item/CategoryItems';
import { BestCategoryItems } from '@/components/Item/BestCategoryItems';

export const metadata: Metadata = {
  title: 'Shop Items',
  description: 'Browse the items in our shop',
};

export default function ShopCategory() {
  return (
    <Layout>
      <div className={styles.wrap}>
        <SubNav />
        <Suspense
          fallback={
            <div
              style={{
                width: '100%',
                height: '1000px',
                marginTop: '300px',
                textAlign: 'center',
              }}
            >
              loading...
            </div>
          }
        >
          <BestCategoryItems category={'outerwear'} />
          <CategoryItems category={'outerwear'} />
        </Suspense>
      </div>
    </Layout>
  );
}
