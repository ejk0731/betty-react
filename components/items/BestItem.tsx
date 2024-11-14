import Link from 'next/link';
import React from 'react';
import styles from './BestItem.module.scss';
import imgBestItem from '@/images/best/4.jpg';
import Image from 'next/image';

export default function BestItem() {
  return (
    <Link href={'/shop'} scroll={false} className={styles.item}>
      <b className={styles.num}>Best 01.</b>
      <Image src={imgBestItem} alt="" width={100} />
      <div className={styles.info_wrap}>
        <div className={styles.color_wrap}>
          <span className={styles.color}></span>
          <span className={styles.color}></span>
          <span className={styles.color}></span>
          <span className={styles.color}></span>
        </div>
        <span className={styles.title}></span>
        <span className={styles.o_price}></span>
      </div>
    </Link>
  );
}
