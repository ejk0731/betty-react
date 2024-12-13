import React from 'react';
import Item from '../Item/Item';
import styles from './ItemsGrid.module.scss';
import BestItem from '../Item/BestItem';

export default function ItemsGrid({ items }: { items: any }) {
  return (
    <div className={styles.wrap}>
      <span>New Arrivals</span>
      <ul className={styles.item_wrap}>
        {items.map((item: any) => {
          return (
            <li key={item.id} className={styles.item}>
              <BestItem {...item} />
            </li>
          );
        })}
      </ul>
      <span>New Arrivals</span>
    </div>
  );
}
