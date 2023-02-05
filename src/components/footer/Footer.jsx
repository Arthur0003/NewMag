import React from 'react';

import styles from './Footer.module.scss';
import logo from '../../assets/img/footer-logo.png';
import arca from '../../assets/icons/arca.png';
import idram from '../../assets/icons/idram.png';
import master from '../../assets/icons/master.png';
import visa from '../../assets/icons/visa.png';
import telcell from '../../assets/icons/telcell.png';
import facebook from '../../assets/icons/facebook.png';
import instagram from '../../assets/icons/instagram.png';
import linkedin from '../../assets/icons/linkedin.png';
import youtube from '../../assets/icons/youtube.png';
import twiiter from '../../assets/icons/twitter.png';

export const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        <div className={styles.contentWrapper}>
          <div className={styles.logo}>
            <img src={logo} alt='empty' />
          </div>
          <div className={styles.options}>
            <div className={styles.section}>
              <h3>Բաժիններ</h3>
              <ul className={styles.sectionNav}>
                <div className={styles.leftSide}>
                  <li>Մեր մասին</li>
                  <li>Գրքեր</li>
                  <li>Հեղինակներ</li>
                  <li>Թարգմանիչներ</li>
                </div>
                <div className={styles.rightSide}>
                  <li>Հոդվածներ</li>
                  <li>Կարծիքներ</li>
                  <li>Մեդիա</li>
                </div>
              </ul>
            </div>

            <div className={styles.order}>
              <h3>Պատվիրել</h3>
              <h4>Գիրք պատվիրելու պայմանները</h4>
              <h4 className={styles.heaeding}>Գովազդ և Ծառայություններ</h4>
              <div className={styles.icons}>
                <div>
                  <img src={arca} alt='empty' />
                </div>
                <div>
                  <img src={master} alt='empty' />
                </div>
                <div>
                  <img src={visa} alt='empty' />
                </div>
                <div>
                  <img src={telcell} alt='empty' />
                </div>
                <div>
                  <img src={idram} alt='empty' />
                </div>
              </div>
            </div>

            <div className={styles.contact}>
              <h3>Կապ մեզ հետ</h3>
              <p>Արշակունյաց 4, Երևան 0023, ՀՀ</p>
              <div className={styles.contactIcons}>
                <div>
                  <img src={facebook} alt='emty' />
                </div>
                <div>
                  <img src={twiiter} alt='emty' />
                </div>
                <div>
                  <img src={instagram} alt='emty' />
                </div>
                <div>
                  <img src={linkedin} alt='emty' />
                </div>
                <div>
                  <img src={youtube} alt='emty' />
                </div>
              </div>
              <div className={styles.subscribe}>
                <label htmlFor='sub'>
                  <input id='sub' type='text' placeholder='Բաժանորդագրվել' />
                  <button>Ուղարկել</button>
                </label>
              </div>
            </div>
          </div>
          <div className={styles.copyrightBlock}>
            <div className={styles.copyright}>Newmag &nbsp; © 2011-2022:</div>
            <div className={styles.author}>Կայքը` Future Systems․</div>
          </div>
        </div>
      </div>
    </div>
  );
};
