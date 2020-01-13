import React from "react";
import styles from "./Footer.module.scss";
import FooterLink from "../Footer/FooterLink";
import FooterSocial from "./FooterSocial";
import { FooterData } from "../../FooterData";
import { footerSocialIcons } from "../../FooterData";
import FooterCopyright from "./FooterCopyright";
/**
 * Footer: this is a container component
 * Child Component: Heading,Link,Social,Copyright
 * FooterData: Testing data file
 */
const Footer = () => {    
    return (
        <>
            <div className={styles.footerContainer}>
                {FooterData.map((data,headingKey) => {
                    return  <FooterLink footerData={data} key={headingKey} />;    
                })}          
            </div>
            <div className={styles.footerBottom}>                
                <FooterSocial socialData={footerSocialIcons}/>                              
            </div> 
            <FooterCopyright
                copyRightContent="Copyright 2001-2019 Coporate Express Canada. Inc.. a Staples company. All rights reserverd."
                termAndConContent="Terms & Conditions    |   Privacy Policy    |   Staples Bussiness Advantage"
            />
        </>        
    );
};
export default Footer;