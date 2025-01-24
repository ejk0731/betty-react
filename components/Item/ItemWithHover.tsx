import Link from 'next/link';
import React from 'react';
import styles from './ItemWithHover.module.scss';
import Image from 'next/image';
import Colors from './infos/Colors';
import { ITEM_IMAGE_PATH } from '@/lib/constants/url';
import { IItemInfos } from '@/lib/types/item';

interface IItemWithHoverProps extends IItemInfos {
  showTopTitle?: boolean;
  topTitleNumber?: number;
  category?: string;
  imageUrl?: number;
}

export default function ItemWithHover({
  showTopTitle = false,
  topTitleNumber,
  itemCategory,
  itemTitle,
  originalPrice,
  salePrice,
  imagePath,
}: IItemWithHoverProps) {
  const topTitle = `Best 0${topTitleNumber}.`;
  const setImagePath = `${ITEM_IMAGE_PATH}${itemCategory}/${imagePath}`;
  return (
    <Link href={`/product`} scroll={false} className={styles.item}>
      {showTopTitle && <b className={styles.num}>{topTitle}</b>}
      <Image src={setImagePath} alt="" fill objectFit="cover" />
      <div className={styles.info_wrap}>
        <Colors align="center" />
        <span className={styles.title}>{itemTitle}</span>
        <s className={styles.price}>{originalPrice}</s>
        <span className={styles.price}>{salePrice}</span>
      </div>
    </Link>
  );
}
