import React from "react";
import PropTypes from "prop-types";
import styles from "./FooterCopyright.module.scss";
import Text from "../../Shared/Text";
/**
 * 
 * @param {string} termCon 
 * @return Element
 */
const FooterTerm = (termAndConContent) => {
    return (
        <div>
            <Text title={termAndConContent}/>
        </div> 
    );
}
/**
 * 
 * @param {string} copyrightcontent
 * @param {string} tnccontent
 * @return Element
 */
const FooterCopyright = props => {
    const {copyRightContent,termAndConContent} =props;
    return (        
        <div className={styles.footerCopyright}>
            <Text title={copyRightContent}/>
            {FooterTerm(termAndConContent)}
        </div>        
    );
}
FooterCopyright.propTypes = {
    copyRightContent: PropTypes.string.isRequired,
    termAndConContent: PropTypes.string.isRequired
}
export default FooterCopyright;