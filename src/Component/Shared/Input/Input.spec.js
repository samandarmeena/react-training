import React from "react";
import { mount } from "enzyme";
import Input from "./Input";
describe(`Testing Input component`, () => {
    let wrapper = "";
    beforeAll(() => {
        const props = {
            inputLabel: "Todo",
            inputType: "text",
            inputName: "todo",
            isRequired: true,
            handleChange: () => {},
            inputValue: "test",
            inputMaxLenght: "30"
        }
        wrapper = mount(<Input {...props}/>);
    });
    it(`Input component render should be without crashing`, () => {
        expect(wrapper).toBeTruthy();
    });    
    it(`testing Input component getting props should be`, () => {        
        expect(
            wrapper
            .find(Input)
            .find(`label`)
            .hasClass(`labelClass`)
        ).toEqual(true);
        expect(
            wrapper
            .find(`input`)
            .props()
            .maxLength
        ).toEqual(`30`);
        
        expect(
             wrapper.find(`input`)
            .props()
            .required
        ).toEqual(true);
    });
    it(`testing Input component getting props onchange should be`, () => {        
        wrapper
        .find(`input`)
        .simulate(`change`,{ target : { value: `test`}});
        expect(
            wrapper
            .find(`input`)
            .props()    
            .value        
        ).toEqual(`test`);
    });
    it(`SnapShot testing`, () => {
        expect(wrapper).toMatchSnapshot();
    });
});