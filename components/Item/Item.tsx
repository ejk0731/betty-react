import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Item.module.scss';
import Colors from './infos/Colors';

export default function Items({
  itemNumber,
  itemCategory,
  itemSlug,
  itemTitle,
  originalPrice,
  salePrice,
  itemColors,
  itemColorValues,
  imagePath,
}: {
  itemNumber: string;
  itemCategory: string;
  itemSlug: string;
  itemTitle: string;
  originalPrice: number;
  salePrice: number;
  itemColors: string;
  itemColorValues: string;
  imagePath: string;
}) {
  const setImagePath = `/images/${itemCategory}/${imagePath}`;
  return (
    <Link href={`/shop/${itemSlug}`} className={styles.item_wrap}>
      <Image src={setImagePath} alt={itemTitle} width={200} height={400} />
      <Colors align="left" />
      <b className={styles.title}>{itemTitle}</b>
      <s className={`${styles.price} ${styles.original_price}`}>
        KRW {originalPrice}
      </s>
      <span className={styles.price}>KRW {salePrice}</span>
    </Link>
  );
}
