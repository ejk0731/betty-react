import React from 'react';
import styles from './Colors.module.scss';

interface ColorsProps {
  align?: 'center' | 'left' | 'right';
}

export default function Colors({ align = 'center' }: ColorsProps) {
  let setAlign = '';

  if (align === 'center') {
    setAlign = `${styles.center}`;
  } else if (align === 'left') {
    setAlign = `${styles.left}`;
  } else if (align === 'right') {
    setAlign = `${styles.right}`;
  }

  return (
    <div className={`${styles.color_wrap} ${setAlign} `}>
      <span className={`${styles.color} ${styles.orange}`}></span>
      <span className={`${styles.color} ${styles.brown}`}></span>
      <span className={`${styles.color} ${styles.green}`}></span>
      <span className={`${styles.color} ${styles.blue}`}></span>
      <span className={`${styles.color} ${styles.white}`}></span>
    </div>
  );
}
