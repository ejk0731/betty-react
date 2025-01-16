import styles from './page.module.scss';
import SubNav from '@/components/Header/SubNav';
import { Suspense } from 'react';
import Layout from '@/components/Layout/Layout';
import { Metadata } from 'next';
import { CategoryItems } from '@/components/Item/CategoryItems';
import { BestCategoryItems } from '@/components/Item/BestCategoryItems';
import Loading from '../loading';
import { getCategoryItems } from '@/lib/apis/items';

export const metadata: Metadata = {
  title: 'Shop Items',
  description: 'Browse the items in our shop',
};

async function Items() {
  const items = await getCategoryItems('outerwear');
  return (
    <>
      <BestCategoryItems category={'outerwear'} />
      <CategoryItems category={'outerwear'} />
    </>
  );
}

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
          <Items />
        </Suspense>
      </div>
    </Layout>
  );
}
