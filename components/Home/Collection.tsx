import React from 'react';
import Image from 'next/image';
import styles from './Collection.module.scss';
import imageCollection from '@/public/images/main_section2_banner.jpg';
import imageCollection2 from '@/public/images/main_section2_banner2.jpg';

export default function Collection() {
  return (
    <div className={styles.wrap}>
      <Image src={imageCollection} height={500} alt="" priority quality={70} />
      <div className={styles.sub_wrap}>
        <div className={styles.title_wrap}>
          <h4 className={styles.title}>
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
          the latest trends, in our collection you will the earrings, necklaces,
          bracelets, rings and even hair accessories to accompany all your
          outfits. In earrings, special details such as shells and materials
          with a multitude of possibilities like resin or glass in a variety of
          shapes and colours. Combined necklaces in different lengths are on
          trend, in gold tones and with hanging details such as coins or pieces
          of resin. Rings accompany the collection, in classic style in metallic
          tones, stamped, in resin or with a simple style so that you can
          combine them with each other.
        </p>
      </div>
    </div>
  );
}
