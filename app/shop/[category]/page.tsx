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

async function Items({ category }: { category: string }) {
  const items = await getCategoryItems(category);
  return (
    <>
      <BestCategoryItems category={category} />
      <CategoryItems category={category} />
    </>
  );
}

export default function ShopCategory({
  params,
}: {
  params: { category: string };
}) {
  const cate = params.category;
  return (
    <Layout>
      <div className={styles.wrap}>
        {params.category}
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
          <Items category={cate} />
        </Suspense>
      </div>
    </Layout>
  );
}
