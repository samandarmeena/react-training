import React from 'react';
import PropTypes from 'prop-types';
import styles from './FooterCopyright.module.scss';
import Text from '../../Shared/Text';

/**
 * FooterCopyright component
 * renders Footer copyright container
 * @param {String} copyrightText
 * @param {Array} copyRightLinks
 * @return Element
 */
const FooterCopyright = (props) => {
  const { copyrightText, copyRightLinks } = props;
  return (
    <>
      <div className={styles.copyright}>
        <Text text={copyrightText} />
      </div>
      <div className={styles.TandC}>
        {copyRightLinks.map((link, key) => {
          return <Text key={key} text={link} />;
        })}
      </div>
    </>
  );
};

// proptype validations for props
FooterCopyright.propTypes = {
  copyrightText: PropTypes.string.isRequired,
  copyRightLinks: PropTypes.array.isRequired
};

export default FooterCopyright;
