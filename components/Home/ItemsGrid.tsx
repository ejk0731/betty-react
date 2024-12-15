import React from 'react';
import Item from '../Item/Item';
import styles from './ItemsGrid.module.scss';
import BestItem from '../Item/BestItem';

export default function ItemsGrid({
  items,
  title,
}: {
  items: any;
  title: string;
}) {
  return (
    <div className={styles.wrap}>
      <span className={styles.title}>{title}</span>
      <ul className={styles.item_wrap}>
        {items.slice(0, 9).map((item: any) => {
          return (
            <li key={item.id} className={styles.item}>
              <BestItem {...item} />
            </li>
          );
        })}
      </ul>
      <span className={`${styles.title} ${styles.right}`}>{title}</span>
    </div>
  );
}
