import React from "react";
import PropTypes from "prop-types";
/**
 * 
 * @param {string} title
 * @return Element 
 */
const Text = props => { 
    const {title}  = props;
    return <span>{title}</span>;    
}
Text.propTypes = {    
    title:  PropTypes.string.isRequired
}
export default Text;