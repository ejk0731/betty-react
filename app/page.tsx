import Layout from '@/components/Layout/Layout';
import MainBanner from '@/components/Home/MainBanner';
import Collection from '@/components/Home/Collection';
import ItemsGrid from '@/components/Home/ItemsGrid';

export default function Home() {
  return (
    <Layout>
      <MainBanner />
      <Collection />
      <ItemsGrid />
    </Layout>
  );
}
