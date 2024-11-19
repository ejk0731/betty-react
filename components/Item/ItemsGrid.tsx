import React from 'react';
import Item from './Item';
import styles from './ItemsGrid.module.scss';

export default function ItemsGrid({ items }: { items: any }) {
  return (
    <ul className={styles.wrap}>
      {items.map((item: any) => {
        return (
          <li key={item.id} className={styles.item}>
            <Item {...item} />
          </li>
        );
      })}
    </ul>
  );
}
