import React from "react";
import PropTypes from "prop-types";
import styles from "./Icon.module.scss";
/**
 * 
 * @param {string} fileName 
 * @param {string} altTitle
 * @return Element
 */
const Icon = props => {
    const {fileName,altTitle} = props;
    return (        
        <img className={styles.iconImage} 
            src={`assets/Icons/${fileName}`}
            alt={altTitle}>
        </img>       
    );
}
Icon.propTypes = {
    fileName: PropTypes.string.isRequired,
    altTitle: PropTypes.string.isRequired
}
export default Icon;
