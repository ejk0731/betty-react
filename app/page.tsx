import Header from '@/components/header/Header';
import styles from './Home.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import imageMainBanner from '@/images/main_banner.jpg';

export default function Home() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
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
      </main>
    </div>
  );
}
