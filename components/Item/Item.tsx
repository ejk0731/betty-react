import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Item.module.scss';
import Colors from './infos/Colors';
import { IItemInfos } from '@/lib/types/item';

export default function Items({
  itemCategory,
  itemTitle,
  originalPrice,
  salePrice,
  imagePath,
}: IItemInfos) {
  const setImagePath = `/images/${itemCategory}/${imagePath}`;
  return (
    <Link href={`/product`} className={styles.item_wrap}>
      <Image src={setImagePath} alt={itemTitle} width={200} height={400} />
      <div className={styles.info_wrap}>
        <Colors align="left" />
        <b className={styles.title}>{itemTitle}</b>
        <s className={`${styles.price} ${styles.original_price}`}>
          KRW {originalPrice}
        </s>
        <span className={styles.price}>KRW {salePrice}</span>
      </div>
    </Link>
  );
}
