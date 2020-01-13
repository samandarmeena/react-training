import React from "react";
import PropTypes from "prop-types";
import styles from "./Heading.module.scss";
/**
 * 
 * @param {string} headingType 
 * @param {string} headingText
 * @return Element
 */
const Heading = props => {
    const {headingType,headingText} = props;
    switch(headingType){
        case "h1":
            return <h1 className={styles.headingItem}>{headingText}</h1>;
        case "h2":
            return <h2 className={styles.headingItem}>{headingText}</h2>;
        case "h3":
            return <h3 className={styles.headingItem}>{headingText}</h3>;
        case "h4":
            return <h4 className={styles.headingItem}>{headingText}</h4>;
        default:
            return null;        
    }   
}
Heading.propTypes = {
    headingText: PropTypes.string.isRequired,
    headingType: PropTypes.string.isRequired
}
Heading.defaultProps = {
    headingType: "h4"
}
export default Heading;