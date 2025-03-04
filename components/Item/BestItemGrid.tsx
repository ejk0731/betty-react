import React from 'react';
import ItemWithHover from './ItemWithHover';
import styles from './BestItemGrid.module.scss';

export default function BestItemGrid({ items }: { items: any }) {
  // pc - max 4, mobile - max 3
  // console.log(items);
  return (
    <div className={styles.wrap}>
      <ul className={styles.list}>
        {items.slice(0, 4).map((item: any, index: number) => {
          return (
            <li key={index} className={styles.item}>
              <ItemWithHover
                {...item}
                showTopTitle
                topTitleNumber={index + 1}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
