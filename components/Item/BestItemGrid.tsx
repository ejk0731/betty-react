import React from 'react';
import BestItem from './BestItem';
import styles from './BestItemGrid.module.scss';

export default function BestItemGrid() {
  // pc - max 4, mobile - max 3
  const item = [1, 2, 3, 4];
  return (
    <div className={styles.wrap}>
      <ul className={styles.list}>
        {item.map(index => {
          return (
            <li key={index} className={styles.item}>
              <BestItem />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
