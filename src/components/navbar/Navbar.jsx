import React from 'react';

import styles from './Navbar.module.scss';
import arrow from '../../assets/icons/desktop-arrow.png';

export const Navbar = () => {
  return (
    <ul className={styles.nav}>
      <li className={styles.listItemDropdown}>
        <span>Մեր մասին</span>
        <span className={styles.arrow}>
          <img src={arrow} alt='empty' />
        </span>
        <div className={styles.dropdown}>
          <ul className={styles.dropdownMenu}>
            <li>Ընկերության մասին</li>
            <li>Անձնակազմ</li>
            <li>Ծառայություններ</li>
            <li>Կապ</li>
          </ul>
        </div>
      </li>
      <li>Գրքեր</li>
      <li>Հեղինակներ</li>
      <li>Թարգմանիչներ</li>
      <li className={styles.listItemDropdown}>
        <span>Հոդվածներ</span>
        <span className={styles.arrow}>
          <img src={arrow} alt='empty' />
        </span>
        <div className={styles.dropdown}>
          <ul className={styles.dropdownMenu}>
            <li>Ընկերության մասին</li>
            <li>Անձնակազմ</li>
            <li>Ծառայություններ</li>
            <li>Կապ</li>
          </ul>
        </div>
      </li>
      <li>Կարծիքներ</li>
      <li>Մեդիա</li>
    </ul>
  );
};
