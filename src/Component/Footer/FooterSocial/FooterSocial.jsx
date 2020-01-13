import React from "react";
import PropTypes from "prop-types";
import Icon from "../../Shared/Icons";
import Text from "../../Shared/Text";
import styles from "./FooterSocial.module.scss";
/**
 * 
 * @param {string} socialData
 * @returns Element 
 */
const FooterSocial = props => {
    const {socialData} = props;
    return (        
        <div className={`${styles.footerSocial} ${styles.footerSection}`}>
            <Text title="Join us on" />
            <div className={styles.footerSocialIcon}>
            {socialData.map((value,iconKey) => {
                return (
                    <Icon 
                    fileName = {value.file}
                    altTitle = {value.title}                    
                    key={iconKey}
                    />
                )
            })}
            </div>
        </div>        
    );
}
FooterSocial.propTypes = {
    socialData: PropTypes.array.isRequired
} 
export default FooterSocial;