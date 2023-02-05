import React from 'react';

import styles from './Header.module.scss';
import logo from '../../assets/img/desktop-logo.png';
import search from '../../assets/icons/desktop-search.png';
import inpSearch from '../../assets/icons/input-search.png';
import arrow from '../../assets/icons/desktop-arrow.png';
import rect from '../../assets/icons/rect.png';
import cart from '../../assets/icons/desktop-shopping-cart.png';
import { Navbar } from '../navbar/Navbar';
import MobileMenu from '../mobile-menu/MobileMenu';

export const Header = () => {
  return (
    <>
      <div className={styles.desktopHeaderBlock}>
        <div className='mainContainer'>
          <div className={styles.wrapper}>
            <div className={styles.logo}>
              <img src={logo} alt='does not exist' />
            </div>
            <div className={styles.navBlock}>
              <Navbar />
            </div>
            <div className={styles.options}>
              <div className={styles.lang}>
                <span>En</span>
                <div className={styles.langSelect}>
                  <img src={arrow} alt='does not exist' />
                </div>
              </div>
              <div className={styles.cart}>
                <img src={cart} alt='does not exist' />
              </div>
              <div className={styles.search}>
                <img src={search} alt='does not exist' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.minHeader}>
        <div className='mainContainer'>
          <div className={styles.minHeaderWrapper}>
            <div className={styles.minLogo}>
              <div className={styles.logoImg}>
                <img src={logo} alt='empty' />
              </div>
              <div className={styles.iconsBlock}>
                <div>
                  <img src={cart} alt='emty' />
                </div>
                <button
                  data-drawer-target='drawer-right-example'
                  data-drawer-show='drawer-right-example'
                  data-drawer-placement='right'
                  aria-controls='drawer-right-example'>
                  <img src={rect} alt='empty' />
                </button>
              </div>
            </div>
            <div className={styles.search}>
              <label htmlFor='search'>
                <span>
                  <img src={inpSearch} alt='empty' />
                </span>
                <input id='search' type='text' placeholder='Որոնել․․․' />
              </label>
            </div>
          </div>
        </div>
        <MobileMenu />
      </div>
    </>
  );
};
