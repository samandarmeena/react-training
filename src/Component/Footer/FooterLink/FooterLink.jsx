import React from "react";
import PropTypes from "prop-types";
import Heading from "../../Shared/Heading";
import Link from "../../Shared/Link";
import styles from "./FooterLink.module.scss";
/**
 * 
 * @param {string} Items 
 * @param {number} footerHeadingKey
 * @returns Element
 */
const FooterLink = props => {
    const {footerData} = props;
    return (
        <div className={styles.footerSection}> 
            <Heading headingType="h4" headingText={footerData.heading} />
            {footerData.Items.map((item,itemKey) => {                                                            
                return (
                    <div className={styles.footerLink} key={itemKey}>
                        <Link anchorText={ item.title } />
                    </div>
                );                            
             })}  
        </div> 
    ); 
}
FooterLink.propTypes = {
    footerData: PropTypes.object.isRequired,    
}
export default FooterLink;