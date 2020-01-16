import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

/**
 * Button component
 * It renders button
 * @param {string} buttonType
 * @param {string} buttonName
 * @param {string} buttonId
 * @param {string} buttonTitle
 * @param {string} buttonStyle
 * @param {string} buttonSize
 * @param {string} addOnClass
 * @param {string} buttonToolTip
 * @param {fn} clickEvent
 * @return Element
 */
const Button = props => {
  const {
    buttonType,
    buttonName,
    buttonId,
    buttonTitle,
    buttonStyle,
    buttonSize,
    addOnClass,
    buttonToolTip,
    clickEvent
  } = props;
  return (
    <button
      type={buttonType}
      name={buttonName}
      id={buttonId}
      className={`${styles.button} ${styles[buttonStyle]} ${styles[buttonSize]} ${addOnClass}`}
      onClick={() => clickEvent()}
      title={buttonToolTip}
    >
      {buttonTitle}
    </button>
  );
};

// proptype validations for props
Button.propTypes = {
  buttonType: PropTypes.string,
  buttonName: PropTypes.string.isRequired,
  buttonId: PropTypes.string.isRequired,
  buttonTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  buttonStyle: PropTypes.string,
  buttonSize: PropTypes.string,
  addOnClass: PropTypes.string,
  buttonToolTip: PropTypes.string.isRequired,
  clickEvent: PropTypes.func
};

// default values for props
Button.defaultProps = {
  buttonType: 'button',
  buttonStyle: 'buttonPrimary',
  buttonSize: 'buttonMedium',
  addOnClass: ''
};

export default Button;
