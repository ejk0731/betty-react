import React from 'react';
import styles from './MainBanner.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import imageMainBanner from '@/public/images/main_banner.jpg';

export default function MainBanner() {
  return (
    <div className={styles.main_banner_wrap}>
      <div className={styles.main_banner}>
        <Image
          src={imageMainBanner}
          height={770}
          alt=""
          priority
          quality={70}
        />
        <h3 className={styles.main_banner_txt}>Sale up to 50% off</h3>
      </div>
    </div>
  );
}
