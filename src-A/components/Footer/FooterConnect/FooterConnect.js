import React from 'react';
import PropTypes from 'prop-types';
import styles from './FooterConnect.module.scss';
import Text from '../../Shared/Text';
import Image from '../../Shared/Image';

/**
 * FooterConnect component
 * renders Footer connnect container
 * @param {Object} accessibilityImg
 * @param {Array} socialImgs
 * @return Element
 */
const FooterConnect = (props) => {
  const { accessibilityImg, socialImgs } = props;
  return (
    <>
      <div className={styles.footerConnectTitle}>
        <Text text="Join us on" />
      </div>
      <div className={styles.footerConnectLinks}>
        <div className={styles.footerConnectLeft}>
          {socialImgs.map((img, index) => {
            return (
              <span key={index}>
                <Image src={img.src} alt={img.alt} />
              </span>
            );
          })}
        </div>
        <div className={styles.footerConnectRight}>
          <Image src={accessibilityImg.src} alt={accessibilityImg.alt} />
        </div>
      </div>
    </>
  );
};

// proptype validations for props
FooterConnect.propTypes = {
  accessibilityImg: PropTypes.object.isRequired,
  socialImgs: PropTypes.array.isRequired
};

export default FooterConnect;
