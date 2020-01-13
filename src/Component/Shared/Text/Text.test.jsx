import React from "react";
import { mount } from "enzyme";
import renderer from 'react-test-renderer';
import Text from "./Text";

describe(`my component should be run`,() => {
    const props ={
        title: ""
    }
    it(`component should be run currectlly`,() => {
        const wrapper = mount(<Text {...props}/>);
        expect(wrapper).ToBeTruthy;
    });
    it(`renders correctly`, () => {    
        const tree = renderer
          .create(<Text {...props}/>)
          .toJSON();
        expect(tree).toMatchSnapshot();
    });
});