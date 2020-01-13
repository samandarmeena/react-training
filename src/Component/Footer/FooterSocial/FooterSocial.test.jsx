import React from "react";
import { mount } from "enzyme";
import Social from "./FooterSocial";
import Icon from "../../Shared/Icons";
import {footerSocialIcons} from "../../../FooterData"
describe(`my component testing`,()=> {     
    const wrapper = mount(<Social socialData={footerSocialIcons}/>);
    it(`my component should be run`,()=>{         
        expect(wrapper).toBeTruthy();
    });
    it(`passes child component lenght should be equal to 5`,()=> { 
        expect(wrapper.find(Icon)).toHaveLength(5); 
    }); 
    it(`getting file name should be equal`, () => {   
            
        expect(wrapper.find(".footerSocialIcon").childAt(0).find('img').prop('alt')).toEqual('Linkdin');
        expect(wrapper.find(".footerSocialIcon").childAt(1).find('img').prop('alt')).toEqual('Twitter');
        expect(wrapper.find(".footerSocialIcon").childAt(2).find('img').prop('alt')).toEqual('Facebook');
        expect(wrapper.find(".footerSocialIcon").childAt(3).find('img').prop('alt')).toEqual('Youtube');
        expect(wrapper.find(".footerSocialIcon").childAt(4).find('img').prop('alt')).toEqual('Instagram');
    }); 
    it(`renders correctly`, () => {   
        expect(wrapper).toMatchSnapshot();
    });  
});