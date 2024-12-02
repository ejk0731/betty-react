import styles from './page.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import imageMainBanner from '@/public/images/main_banner.jpg';
import imageCollection from '@/public/images/main_section2_banner.jpg';
import imageCollection2 from '@/public/images/main_section2_banner2.jpg';
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
            <h3>Sale up to 50% off</h3>
          </div>
        </Link>
      </div>
      <div>
        <Image
          src={imageCollection}
          height={500}
          alt=""
          priority
          quality={70}
        />
        <div>
          <div>
            <h4>
              2024 <br />
              Spring <br />
              Collection
            </h4>
            <Image
              src={imageCollection2}
              height={300}
              alt=""
              priority
              quality={70}
            />
          </div>
          <p>
            Whether your style if minimal and timeless, or you love to following
            the latest trends, in our collection you will the earrings,
            necklaces, bracelets, rings and even hair accessories to accompany
            all your outfits. In earrings, special details such as shells and
            materials with a multitude of possibilities like resin or glass in a
            variety of shapes and colours. Combined necklaces in different
            lengths are on trend, in gold tones and with hanging details such as
            coins or pieces of resin. Rings accompany the collection, in classic
            style in metallic tones, stamped, in resin or with a simple style so
            that you can combine them with each other.
          </p>
        </div>
      </div>
      <div>
        <div>New Arrivals</div>
        <div>New Arrivals</div>
      </div>
    </Layout>
  );
}
