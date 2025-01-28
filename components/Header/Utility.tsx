import React, { useState } from 'react';
import styles from './Utility.module.scss';
import Cart from './Cart';
import Icon from '../Icon';
import PopupSearch from './PopupSearch';

export default function Utility() {
  const [searchPopup, setSearchPopup] = useState<boolean>(true);
  return (
    <ul className={styles.utility}>
      <li className={styles.utility_item}>
        <button type="button">
          <Icon name="search" color="black" size={18}></Icon>
          {searchPopup && <PopupSearch />}
        </button>
      </li>
      <li className={styles.utility_item}>
        <button type="button">
          <Icon name="user" color="black" size={18}></Icon>
        </button>
      </li>
      <li className={styles.utility_item}>
        <button type="button">
          <Icon name="basket" color="black" size={18}></Icon>
          <Cart />
        </button>
      </li>
    </ul>
  );
}
