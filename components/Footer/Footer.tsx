import React from 'react';
import styles from './Footer.module.scss';
import { poppins400, poppins700 } from '@/app/styles/fonts';

export default function Footer() {
  return (
    <footer
      className={`${poppins400.variable} ${poppins700.variable} ${styles.footer}`}
    >
      <div className={`${styles.footer_box} ${styles.footer_left}`}>
        <b>Betty</b>
        <ul className={styles.link}>
          <li>
            <button type="button">About</button>
          </li>
          <li>
            <button type="button">Agreement</button>
          </li>
          <li>
            <button type="button">Privacy</button>
          </li>
          <li>
            <button type="button">Guide</button>
          </li>
        </ul>
      </div>
      <div className={`${styles.footer_box} ${styles.footer_right}`}>
        <div className={styles.company_info}>
          <ul>
            <li>
              <b>C/S Center</b>
              <ul className={styles.txt}>
                <li>T.1588-1234</li>
                <li>Mon-Fri 10:00 ~ 17:00</li>
                <li>Off-time PM 12:00 ~ PM 02:00</li>
                <li>DAY OFF(Weekend, Holiday)</li>
              </ul>
            </li>
            <li>
              <b>Bank Account</b>
              <ul className={styles.txt}>
                <li>기업 123456-12-1234</li>
                <li>Holder : (주)베티</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={styles.company_info}>
          <ul>
            <li>
              <span className={styles.txt}>상호</span>
              <span>(주)Betty</span>
            </li>
            <li>
              <span className={styles.txt}>대표</span>
              <span>김대표</span>
            </li>
            <li>
              <span className={styles.txt}>사업자 등록번호</span>
              <span>123-12-123456</span>
            </li>
            <li>
              <span className={styles.txt}>통신판매업 신고</span>
              <span>제 2021-00000-1234호 [사업자정보확인]</span>
            </li>
            <li>
              <span className={styles.txt}>주소</span>
              <span>04524 서울특별시 중구 태평로1가 31 서울특별시청</span>
            </li>
            <li>
              <span className={styles.txt}>팩스</span>
              <span>070-1234-1234</span>
            </li>
            <li>
              <span className={styles.txt}>개인정보관리책임자</span>
              <span>김개인(mail@mail.com)</span>
            </li>
            <li>
              <span className={styles.copyright}>
                2025 © MONGLAB All rights reserved / Design by MONGLAB.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
