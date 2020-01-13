import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";
/**
 * this is button field component using in shared
 * @param {string} buttonType 
 * @param {string} buttonName
 * @param {string} buttonClass 
 * @param {func} handleChange
 * @param {bool} index
 * @param {bool} status
 * @param {bool} disabled
 * @returns element
 */ 
const Button = props => {
    const {
        buttonType,
        buttonName,
        buttonClass,    
        handleOnClick,
        index,
        status,
        disabled        
    } = props;
    return (        
        <button
            type={buttonType}
            name={buttonName}            
            className={styles[buttonClass]}    
            onClick={e => handleOnClick(e,index,status)}  
            disabled={disabled}               
        >     
            {buttonName}     
        </button>        
    );
}
// set default props
Button.defaultProps = {
    buttonType: "",
    buttonName: "",
    buttonClass: "",    
    handleOnClick:  () => {},
    index: "",
    status: true,
    disabled: false
}
// proptypes validation
Button.propTypes = {
    buttonType: PropTypes.string.isRequired,
    buttonName: PropTypes.string,
    buttonClass: PropTypes.string,    
    handleOnClick: PropTypes.func,
    status: PropTypes.bool,
    disabled: PropTypes.bool.isRequired
  };
export default Button;