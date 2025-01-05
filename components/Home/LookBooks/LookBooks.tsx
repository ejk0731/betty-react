import React from 'react';
import LookBookSlider from './LookBookSlider';
import styles from './LookBooks.module.scss';

export default function LookBook() {
  return (
    <div className={styles.wrap}>
      <div className={styles.title_wrap}>
        <b># 2025 New Season Daily Lookbook</b>
        <p>
          Introducing the value of daily mood. Our design is different. Meet
          high-quality skin daily mood.
          <br />
          Our special design makes your product stand out. It is easy to use
          skin with neat composition.
        </p>
      </div>
      <div className={styles.slider_wrap}>
        <LookBookSlider />
      </div>
    </div>
  );
}
