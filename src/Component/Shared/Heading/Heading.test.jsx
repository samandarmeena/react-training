import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import Heading from "./Heading";

describe(`my component testing`,() => {
    const props = {
        headingText: "",
        headingType:"h4"
    }
    const wrapper = mount(<Heading {...props}/>);    
    it(`my component should be run`,() => {        
        expect(wrapper).toBeTruthy();
    }); 
    it(`testing heading type should be h4`, () => {        
        expect(
            wrapper
            .find(Heading)
            .props()
            .headingType
        ).toEqual(`h4`);

        expect(
            wrapper
            .find(Heading)
            .find(`h4`)
            .hasClass(`headingItem`)
        ).toEqual(true);
    });
    it(`testing change props headingType should be render`, () => {
        wrapper
        .setProps(
            { 
                headingType:"h1"
            }
        );        
        expect(
            wrapper
            .find(Heading)
            .props()
            .headingType
        ).toEqual(`h1`);
        wrapper
        .setProps(
            { 
                headingType:"h2"
            }
        );
        expect(
            wrapper
            .find(Heading)
            .props()
            .headingType
        ).toEqual(`h2`);
        wrapper
        .setProps(
            { 
                headingType:"h3"
            }
        );        
        expect(
            wrapper
            .find(Heading)
            .props()
            .headingType
        ).toEqual(`h3`);
    })
    it(`testing change props headingType should be render`, () => {        
        wrapper
        .setProps(
            { 
                headingType:""
            }
        );
        expect(
            wrapper
            .find(Heading)
            .props()
            .headingType
        ).toEqual(``);
    });
    it(`renders correctly`, () => {        
        const tree = renderer
          .create(<Heading {...props}/>)
          .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
