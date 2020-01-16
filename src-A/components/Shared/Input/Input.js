import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

/**
 * Input component
 * It renders input
 * @param {string} inputType
 * @param {string} inputName
 * @param {string} inputId
 * @param {string} inputValue
 * @param {string} inputPlaceholder
 * @return Element
 */
const Input = (props) => {
  const {
    inputType,
    inputName,
    inputId,
    inputValue,
    inputPlaceholder,
    changeEvent
  } = props;
  return (
    <input
      type={inputType}
      className={styles.inputBox}
      id={inputId}
      name={inputName}
      placeholder={inputPlaceholder}
      value={inputValue}
      onChange={changeEvent}
    />
  );
};

// proptype validations for props
Input.propTypes = {
  inputType: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  changeEvent: PropTypes.func.isRequired
};

// default values for props
Input.defaultProps = {
  inputType: 'text'
};

export default Input;
