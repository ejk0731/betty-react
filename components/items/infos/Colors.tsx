import React from 'react';
import styles from './Colors.module.scss';

export default function Colors() {
  return (
    <div className={styles.color_wrap}>
      <span className={`${styles.color} ${styles.orange}`}></span>
      <span className={`${styles.color} ${styles.brown}`}></span>
      <span className={`${styles.color} ${styles.green}`}></span>
      <span className={`${styles.color} ${styles.blue}`}></span>
      <span className={`${styles.color} ${styles.white}`}></span>
    </div>
  );
}
