import Link from 'next/link';
import React from 'react';
import styles from './BestItem.module.scss';
import imgBestItem from '@/images/best/4.jpg';
import Image from 'next/image';
import Colors from './infos/Colors';

export default function BestItem() {
  return (
    <Link href={'/shop'} scroll={false} className={styles.item}>
      <b className={styles.num}>Best 01.</b>
      <Image src={imgBestItem} alt="" width={100} />
      <div className={styles.info_wrap}>
        <Colors align="center" />
        <span className={styles.title}>title</span>
        <s className={styles.o_price}>50000</s>
        <span className={styles.s_price}>35000</span>
      </div>
    </Link>
  );
}
