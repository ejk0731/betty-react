import React from 'react';
import styles from './Colors.module.scss';

interface ColorsProps {
  align?: 'center' | 'left' | 'right';
}

export default function Colors({ align = 'center' }: ColorsProps) {
  // const setAlign = align;
  return (
    <div
      className={`${styles.color_wrap} ${
        align
          ? 'center'
          : styles.center
          ? 'left'
          : styles.left
          ? 'right'
          : styles.right
      }`}
    >
      <span className={`${styles.color} ${styles.orange}`}></span>
      <span className={`${styles.color} ${styles.brown}`}></span>
      <span className={`${styles.color} ${styles.green}`}></span>
      <span className={`${styles.color} ${styles.blue}`}></span>
      <span className={`${styles.color} ${styles.white}`}></span>
    </div>
  );
}
