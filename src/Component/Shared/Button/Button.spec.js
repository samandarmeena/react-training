import React from "react";
import { mount } from "enzyme";
import Button from "./Button";
describe(`Testing Button component`, () => {
    let wrapper = "";
    beforeAll(() => {
        const props = {
            buttonType: "button",
            buttonName: "",
            buttonClass: "",    
            handleOnClick:  () => {},
            index: "",
            status: true,
            disabled: false
        }
        wrapper = mount(<Button {...props}/>);
    });
    it(`Testing Button component run should be with out crashing`, () => {        
        expect(wrapper).toBeTruthy();
    });
    it(`testing button component getting props`, () => {        
        expect(
            wrapper
            .find(Button)
            .props()
            .buttonType
        ).toEqual(`button`);
    });    
    it(`SnapShot Testing`, () => {
        expect(wrapper).toMatchSnapshot();
    });
});