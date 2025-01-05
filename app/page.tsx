import Layout from '@/components/Layout/Layout';
import MainBanner from '@/components/Home/MainBanner';
import Collection from '@/components/Home/Collection';
import ItemsGrid from '@/components/Home/ItemsGrid';
import { getItems } from '@/lib/apis/items';
import { Suspense } from 'react';
import LookBook from '@/components/Home/LookBooks/LookBooks';

async function Items() {
  const items = await getItems();
  return <ItemsGrid items={items} title={'New Arrivals'} />;
}

export default function Home() {
  return (
    <Layout>
      <MainBanner />
      <Collection />
      <Suspense fallback={<div>Loading..</div>}>
        <Items />
      </Suspense>
      <LookBook />
    </Layout>
  );
}
