import Link from 'next/link';
import React from 'react';
import styles from './BestItem.module.scss';
import imgBestItem from '@/public/images/best/4.jpg';
import Image from 'next/image';
import Colors from './infos/Colors';

interface IItemWithHoverProps {
  showTopTitle?: boolean;
  topTitleNumber?: number;
}

export default function ItemWithHover({
  showTopTitle = false,
  topTitleNumber,
}: IItemWithHoverProps) {
  const topTitle = `Best 0${topTitleNumber}.`;
  return (
    <Link href={'/shop'} scroll={false} className={styles.item}>
      {showTopTitle && <b className={styles.num}>{topTitle}</b>}
      <Image src={imgBestItem} alt="" width={100} />
      <div className={styles.info_wrap}>
        <Colors align="center" />
        <span className={styles.title}>title</span>
        <s className={styles.price}>50000</s>
        <span className={styles.price}>35000</span>
      </div>
    </Link>
  );
}
