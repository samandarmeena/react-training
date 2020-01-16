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
})