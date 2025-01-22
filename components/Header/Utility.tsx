import React from 'react';
import styles from './Utility.module.scss';
import Cart from './Cart';
import Icon from '../Icon';

export default function Utility({ isMobile = true }: { isMobile?: boolean }) {
  return (
    <ul className={styles.utility}>
      <li className={styles.utility_item}>
        {isMobile ? (
          <button type="button">
            <Icon name="user" color="black" size={18}></Icon>
          </button>
        ) : (
          <button type="button">LOGIN</button>
        )}
      </li>
      <li className={styles.utility_item}>
        {isMobile ? (
          <button type="button">
            <Icon name="search" color="black" size={18}></Icon>
          </button>
        ) : (
          <button type="button">SEARCH</button>
        )}
      </li>
      <li className={styles.utility_item}>
        {isMobile ? (
          <button type="button">
            <Icon name="basket" color="black" size={18}></Icon>
            <Cart />
          </button>
        ) : (
          <button type="button">
            Cart
            <Cart />
          </button>
        )}
      </li>
    </ul>
  );
}
