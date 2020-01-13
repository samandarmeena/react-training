import React from "react";
import { mount } from "enzyme";
import ToDoAction from "./ToDoAction";
describe(`ToDoAction component testing`, () =>{
    let wrapper = "";
    let mockFnUpdateToDoStatus = jest.fn();
    let mockFnRemoveToDoStatus = jest.fn();
    beforeAll(() => {
        const props = {
            handleOnClickUpdateToDoStatus: mockFnUpdateToDoStatus,
            handleOnClickRemoveToDoStatus: mockFnRemoveToDoStatus,
            index: 0
        }
        wrapper = mount(<ToDoAction {...props} />);
    });
    it(`ToDoAction component should be renders without errors`, () => {
        expect(wrapper).toBeTruthy();
    });
    it(`ToDoAction edit button should be clickable`, () => {        
        wrapper
        .find(ToDoAction)
        .find(`button`)
        .at(0)
        .simulate(`click`);
        expect(mockFnUpdateToDoStatus).toHaveBeenCalled();
    });
    it(`ToDoAction delete button should be clickable`, () => {        
        wrapper
        .find(ToDoAction)
        .find(`button`)
        .at(1)
        .simulate(`click`);
        expect(mockFnUpdateToDoStatus).toHaveBeenCalled();
    });
});