'use client';
import React, { useState } from 'react';
import styles from './BtnHamburger.module.scss';

export default function BtnHamburger() {
  const [showCloseBtn, setShowCloseBtn] = useState<boolean>(false);
  return (
    <button
      type="button"
      className={`${styles.btn_hamburger} ${showCloseBtn && styles.btn_close}`}
      onClick={() => setShowCloseBtn(!showCloseBtn)}
    >
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </button>
  );
}
