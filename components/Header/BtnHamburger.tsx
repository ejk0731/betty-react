import React from 'react';
import styles from './BtnHamburger.module.scss';

export default function BtnHamburger() {
  return (
    <button type="button" className={styles.btn_hamburger}>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </button>
  );
}
