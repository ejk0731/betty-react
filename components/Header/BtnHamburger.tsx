import React from 'react';
import styles from './BtnHamburger.module.scss';

export default function BtnHamburger({
  mobileNavStatus,
  setMobileNavStatus,
}: {
  mobileNavStatus: boolean;
  setMobileNavStatus: (value: boolean) => void;
}) {
  return (
    <button
      type="button"
      className={`${styles.btn_hamburger} ${mobileNavStatus && styles.btn_close}`}
      onClick={() => setMobileNavStatus(!mobileNavStatus)}
    >
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </button>
  );
}
