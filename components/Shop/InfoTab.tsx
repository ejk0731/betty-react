'use client';
import React, { useState } from 'react';
import styles from './InfoTab.module.scss';

export default function InfoTab() {
  const [tabCont, setTabCont] = useState<number>(0);
  return (
    <div className={styles.tab_wrap}>
      <div className={styles.tab_header}>
        <button type="button" onClick={() => setTabCont(0)}>
          Description
        </button>
        <button type="button" onClick={() => setTabCont(1)}>
          Size Guide
        </button>
        <button type="button" onClick={() => setTabCont(2)}>
          Shipping
        </button>
      </div>

      <div className={styles.tab_content}>
        {tabCont === 0 ? (
          <div>
            <p>
              A knit mini dress featuring a mock neck, allover sequin
              embellishments, long sleeves, and bodycon silhouette.
            </p>
            <span>Content + Care</span>
            <ul>
              <li>Shell: 75% polyester, 25% metallic yarn</li>
              <li>Lining 1: 95% polyester, 5% spandex</li>
              <li>Lining 2: 100% polyester</li>
              <li>Hand wash cold</li>
            </ul>
          </div>
        ) : tabCont === 1 ? (
          <div>
            <p>
              <span> How to measure your waist</span>
              Measure around the narrowest part of your natural waist, generally
              around the belly button. To ensure a comfortable fit, keep one
              finger between the measuring tape and your body.
            </p>
          </div>
        ) : (
          <div>
            <span>Shipping</span>
            <p>Delivery in 3-5 working days.</p>
            <span>Returns</span>
            <p>
              You have 30 days from the shipping date to return your purchase
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
