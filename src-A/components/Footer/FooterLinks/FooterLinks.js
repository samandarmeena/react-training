import React from 'react';
import PropTypes from 'prop-types';
import styles from './FooterLinks.module.scss';
import Text from '../../Shared/Text';

/**
 * FooterLinks component
 * renders Footer links container
 * @param {Array} footerLinkStack
 * @return Element
 */
const FooterLinks = (props) => {
  const { footerLinkStack } = props;
  return (
    <>
      {footerLinkStack.map((footerLinks, index) => {
        return (
          <div key={index} className={styles.footerLinksColumn}>
            {footerLinks.map((link, key) => {
              return (
                <div key={key} className={styles.FooterLink}>
                  <Text
                    text={link.headerTitle ? link.headerTitle : link.linkTitle}
                    isStrong={link.headerTitle ? true : false}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

// proptype validations for props
FooterLinks.propTypes = {
  footerLinkStack: PropTypes.array.isRequired
};

export default FooterLinks;
