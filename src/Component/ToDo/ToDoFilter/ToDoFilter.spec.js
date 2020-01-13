import React from "react";
import { mount } from "enzyme";
import ToDoFilter from "./ToDoFilter";
import Button from "../../Shared/Button";
describe(`The ToDoFilter component testing`, () => { 
    let wrapper = "";
    let mockFnOnClick = jest.fn();
    beforeAll(() => {
        const props = {
            handleOnClick: mockFnOnClick,
            filterActive: 0
        };
        wrapper = mount(<ToDoFilter {...props} />); 
    });
    it(`ToDoFilter component should be render without error`, () => {
        expect(wrapper).toBeTruthy();        
    });
    it(`ToDoFilter length should be equal to 3`,() => {
        expect(wrapper.find(`button`)).toHaveLength(3);
    });    
    it(`ToDoFilter component get all records filter button testing`,() => {        
        expect(
            wrapper
            .find(Button)
            .at(0)
            .props()
            .buttonName
        )
        .toEqual(`All`);                
    });
    it(`ToDoFilter component get active records filter button testing`, () => {
        wrapper
        .find(`button`)
        .at(1)
        .simulate(`click`);
        expect(mockFnOnClick)
        .toHaveBeenCalled();
        expect(
            wrapper
            .find(Button)
            .at(1)
            .props()
            .buttonName
        )
        .toEqual(`Active`);        
    });
    it(`ToDoFilter component get completed records filter button testing`, () => {
        wrapper
        .find(`button`)
        .at(2)
        .simulate(`click`);
        expect(mockFnOnClick)
        .toHaveBeenCalled();
        expect(
            wrapper
            .find(Button)
            .at(2)
            .props()
            .buttonName
        )
        .toEqual(`Completed`);        
    });    
    it(`SnapShot Testing`, () => {
        expect(wrapper).toMatchSnapshot();
    });
});