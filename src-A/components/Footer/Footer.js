import React from 'react';
import styles from './Footer.module.scss';
import FooterLinks from './FooterLinks';
import FooterConnect from './FooterConnect';
import FooterCopyright from './FooterCopyright';
import {
  footerLinkStack,
  accessibilityImg,
  socialImgs,
  copyRightLinks,
  copyrightText
} from '../../dataStore/data';

/**
 * Footer component
 * renders Footer container
 * @return Element
 */
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLinks}>
        <FooterLinks footerLinkStack={footerLinkStack} />
      </div>
      <div className={styles.footerConnect}>
        <FooterConnect
          accessibilityImg={accessibilityImg}
          socialImgs={socialImgs}
        />
      </div>
      <div className={styles.footerTnc}>
        <FooterCopyright
          copyRightLinks={copyRightLinks}
          copyrightText={copyrightText}
        />
      </div>
    </div>
  );
};

export default Footer;
