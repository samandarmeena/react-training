import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import Heading from "../Shared/Heading";
import Link from "../Shared/Link";
import Footer from './Footer';
describe(`Testing my container component`,()=>{
    const wrapper = mount(<Footer />);
    it(`component should be run`,() => {
        expect(wrapper).toBeTruthy();
    });
    it(`Heading text should be equal`,() => {  
        expect(wrapper.find(Heading).at(0).text("h4")).toEqual('Customer Service');
        expect(wrapper.find(Heading).at(1).text("h4")).toEqual('Corporate Info');
        expect(wrapper.find(Heading).at(2).text("h4")).toEqual('Staples Corporate Solution');
        expect(wrapper.find(Heading).at(3).text("h4")).toEqual('New Customer');
        expect(wrapper.find(Heading).at(4).text("h4")).toEqual('Join the Staples Team');
    });
    it(`Footer link lenght should be equal`, () => {               
        expect(wrapper.find(Link)).toHaveLength(18)
    });
    it(`FooterBottom class should be exists`, () => {        
        expect(wrapper.exists('.footerBottom')).toEqual(true);
        expect(wrapper.exists('.footerSocial')).toEqual(true);
        expect(wrapper.exists('.footerCopyright')).toEqual(true);
    });
    it(`renders correctly`, () => {
        const tree = renderer
        .create(<Footer />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
});