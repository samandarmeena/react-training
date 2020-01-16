import React from "react";
import { mount } from "enzyme";
import Link from "./Link";
describe(`my component should be run`,() => {
    let wrapper = "";
    beforeAll(() => {
        const props  = {
            anchorText: ""
        }
        wrapper = mount(<Link {...props} />);
    });
    it(`component should be run currectlly`,() => {        
        expect(wrapper).toBeTruthy();
        expect(wrapper).toMatchSnapshot();
    });

});