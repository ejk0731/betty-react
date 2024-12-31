'use client';
import React, { useEffect, useState } from 'react';
import styles from './Options.module.scss';

export default function Options() {
  const [colorVal, setColorVal] = useState<string>('');
  const [sizeVal, setSizeVal] = useState<string>('');

  const handleColorVal = (val: string) => {
    setColorVal(val);
  };
  const handleSizeVal = (val: string) => {
    setSizeVal(val);
  };

  useEffect(() => {
    console.log(colorVal, sizeVal);
  }, [colorVal, sizeVal]);

  return (
    <div className={styles.option_wrap}>
      <div className={styles.color_wrap}>
        <span className={styles.txt}>Color</span>
        <div className={styles.color}>
          <input
            type="radio"
            name="colorOption"
            id="orange"
            onChange={e => handleColorVal(e.target.id)}
          />
          <label htmlFor="orange" className={styles.orange}>
            Orange
          </label>
        </div>
        <div className={styles.color}>
          <input
            type="radio"
            name="colorOption"
            id="green"
            onChange={e => handleColorVal(e.target.id)}
          />
          <label htmlFor="green" className={styles.green}>
            Green
          </label>
        </div>
        <div className={styles.color}>
          <input
            type="radio"
            name="colorOption"
            id="blue"
            onChange={e => handleColorVal(e.target.id)}
          />
          <label htmlFor="blue" className={styles.blue}>
            Blue
          </label>
        </div>
        <div className={styles.color}>
          <input
            type="radio"
            name="colorOption"
            id="white"
            onChange={e => handleColorVal(e.target.id)}
          />
          <label htmlFor="white" className={styles.white}>
            White
          </label>
        </div>
      </div>

      <div className={styles.size_wrap}>
        <span className={styles.txt}>Size</span>
        <div className={styles.size}>
          <input
            type="radio"
            name="sizeOption"
            id="size-s"
            onChange={e => handleSizeVal(e.target.id)}
          />
          <label htmlFor="size-s">S</label>
        </div>
        <div className={styles.size}>
          <input
            type="radio"
            name="sizeOption"
            id="size-m"
            onChange={e => handleSizeVal(e.target.id)}
          />
          <label htmlFor="size-m">M</label>
        </div>
        <div className={styles.size}>
          <input
            type="radio"
            name="sizeOption"
            id="size-l"
            onChange={e => handleSizeVal(e.target.id)}
          />
          <label htmlFor="size-l">L</label>
        </div>
      </div>
    </div>
  );
}
