import styles from './page.module.scss';
import SubNav from '@/components/Header/SubNav';
import { Suspense } from 'react';
import Layout from '@/components/Layout/Layout';
import { Metadata } from 'next';
import { CategoryItems } from '@/components/Item/CategoryItems';
import { BestCategoryItems } from '@/components/Item/BestCategoryItems';
import Loading from '../loading';

export const metadata: Metadata = {
  title: 'Shop Items',
  description: 'Browse the items in our shop',
};

export default async function ShopCategory(params: { slug: string }) {
  return (
    <Layout>
      <div className={styles.wrap}>
        {params.slug}
        {/* <SubNav />
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
          <BestCategoryItems category={'top'} />
          <CategoryItems category={'top'} />
        </Suspense> */}
      </div>
    </Layout>
  );
}
