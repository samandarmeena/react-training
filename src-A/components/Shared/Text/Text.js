import React from 'react';
import styles from './Text.module.scss';
import PropTypes from 'prop-types';

/**
 * Text component
 * It renders text
 * @param {string} text
 * @param {boolean} isStrong
 * @return Element
 */
const Text = (props) => {
  const { text, isStrong } = props;
  const classStrong = isStrong ? styles.textStrong : '';
  return <span className={classStrong}>{text}</span>;
};

// proptype validations for props
Text.propTypes = {
  text: PropTypes.string.isRequired,
  isStrong: PropTypes.bool
};

// default values for props
Text.defaultProps = {
  isStrong: false
};

export default Text;
