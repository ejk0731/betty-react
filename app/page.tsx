import styles from './page.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import imageMainBanner from '@/public/images/main_banner.jpg';
import Layout from '@/components/Layout/Layout';

export default function Home() {
  return (
    <Layout>
      <div className={styles.main_banner_wrap}>
        <Link href={'/'}>
          <div className={styles.main_banner}>
            <Image
              src={imageMainBanner}
              height={770}
              alt=""
              priority
              quality={70}
            />
          </div>
        </Link>
      </div>
    </Layout>
  );
}
