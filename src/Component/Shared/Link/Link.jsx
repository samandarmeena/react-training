import React from "react";
import PropTypes from "prop-types";
/**
 * 
 * @param {string} anchorText
 * @return Element 
 */
const Link = props => {
    const {anchorText} = props;
    return <a href="/">{anchorText}</a>;     
};
Link.prototypes = {
    anchorText: PropTypes.string.isRequired
}
export default Link;