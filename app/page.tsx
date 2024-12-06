import Image from 'next/image';

import imageCollection from '@/public/images/main_section2_banner.jpg';
import imageCollection2 from '@/public/images/main_section2_banner2.jpg';
import Layout from '@/components/Layout/Layout';
import MainBanner from '@/components/Home/MainBanner';
import Collection from '@/components/Home/Collection';

export default function Home() {
  return (
    <Layout>
      <MainBanner />
      <Collection />
      <div>
        <div>New Arrivals</div>
        <div>New Arrivals</div>
      </div>
    </Layout>
  );
}
