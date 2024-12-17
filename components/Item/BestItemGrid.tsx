import React from 'react';
import ItemWithHover from './ItemWithHover';
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
              <ItemWithHover showTopTitle topTitleNumber={index} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
