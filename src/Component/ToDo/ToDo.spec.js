import React from "react";
import { mount } from "enzyme";
import ToDo from "./ToDo";
describe(`Testing ToDo component it should be rendered correctly`,() => {
    let wrapper = "";
    beforeAll(() => {  
        const props = {}
        wrapper = mount(<ToDo {...props} />);
    });
    it(`Testing ToDo component it should be renders correctly`, () => {
        expect(wrapper).toBeTruthy();
        expect(wrapper).toMatchSnapshot();
    });
    it(`testing input field props should be there`,() => {        
        expect(
            wrapper        
            .find(`input`)
            .props()
            .type
        ).toEqual(`text`); 
        expect(
            wrapper        
            .find(`input`)
            .props()
            .name
        ).toEqual(`todo`); 
        expect(
            wrapper        
            .find(`input`)
            .props()
            .maxLength
        ).toEqual(`30`);      
    });
    it(`testing button field props should be there`, () => {      
        console.log(wrapper.debug());        
    });
})