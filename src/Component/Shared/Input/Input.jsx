import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.scss";
/**
 * this is input field component using in shared
 * @param {string} inputLabel 
 * @param {string} inputType
 * @param {string} inputName
 * @param {bool} isRequired
 * @param {string} inputValue
 * @param {func} handleChange
 * @param {number} inputMaxLenght
 * @returns element
 */ 
const Input = props => {
    const {
        inputLabel,
        inputType,
        inputName,
        isRequired,
        inputValue,        
        handleChange,
        inputMaxLenght
    } = props;
    return (
        <div>
            <label className={styles.labelClass}>{inputLabel}</label>
            <input 
                className={styles.inputClass}
                type={inputType}
                name={inputName}
                value={inputValue}
                required={isRequired}
                onChange={e => handleChange(e)}
                maxLength={inputMaxLenght}
                placeholder={`Please Enter ${inputLabel}`}            
            />
        </div>
    );
}
// default props
Input.defaultProps = {
inputLabel: "Todo",
inputType: "text",
inputName: "todo",
isRequired: true,
handleChange: () => {},
inputValue: "test",
inputMaxLenght: "30"
};
// proptypes validation
Input.propTypes = {
inputLabel: PropTypes.string.isRequired,
inputType: PropTypes.string.isRequired,
inputName: PropTypes.string.isRequired,
isRequired: PropTypes.bool,
handleChange: PropTypes.func,
inputValue: PropTypes.string,
inputMaxlength: PropTypes.string
};
export default Input;