import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Icon from "./Icon";
describe('icon component testing', () => {
    const props ={
        fileName: "facebook.png",
        altTitle: "facebook"
    }
    const wrapper = mount(<Icon {...props} />);
    it(`Icon component should be run`,()=> {        
        expect(wrapper).toBeTruthy();
    });        
    it(`renders correctly`, () => {    
        const tree = renderer.create(<Icon {...props}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});