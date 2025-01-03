'use client';
import React, { useEffect, useState } from 'react';
import styles from './Options.module.scss';
import { useSetRecoilState } from 'recoil';
import { optionState } from '@/lib/states/cartState';

export default function Options() {
  const setOptionState = useSetRecoilState(optionState);
  const [colorVal, setColorVal] = useState<string>('');
  const [sizeVal, setSizeVal] = useState<string>('');

  const handleColorVal = (e: React.ChangeEvent) => {
    const val = e.target.id;
    setColorVal(val);
  };
  const handleSizeVal = (e: React.ChangeEvent) => {
    const val = e.target.id;
    setSizeVal(val);
  };

  useEffect(() => {
    console.log(colorVal, sizeVal);
    if (colorVal && sizeVal) {
      setOptionState(true);
    } else {
      setOptionState(false);
    }
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
            onChange={handleColorVal}
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
            onChange={handleColorVal}
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
            onChange={handleColorVal}
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
            onChange={handleColorVal}
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
            onChange={handleSizeVal}
          />
          <label htmlFor="size-s">S</label>
        </div>
        <div className={styles.size}>
          <input
            type="radio"
            name="sizeOption"
            id="size-m"
            onChange={handleSizeVal}
          />
          <label htmlFor="size-m">M</label>
        </div>
        <div className={styles.size}>
          <input
            type="radio"
            name="sizeOption"
            id="size-l"
            onChange={handleSizeVal}
          />
          <label htmlFor="size-l">L</label>
        </div>
      </div>
    </div>
  );
}
