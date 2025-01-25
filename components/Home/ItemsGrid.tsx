import React from 'react';
import styles from './ItemsGrid.module.scss';
import ItemWithHover from '../Item/ItemWithHover';

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
        {items.slice(0, 9).map((item: any, index: number) => {
          return (
            <li key={item.id} className={styles.item}>
              <ItemWithHover
                {...item}
                category="new"
                imageUrl={index + 1}
                isHome
              />
            </li>
          );
        })}
      </ul>
      <span className={`${styles.title} ${styles.right}`}>{title}</span>
    </div>
  );
}
