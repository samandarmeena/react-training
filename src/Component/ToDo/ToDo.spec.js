import React from "react";
import { mount } from "enzyme";
import ToDo from "./ToDo";
import ToDoElements from "./ToDoElements";
describe(`Testing ToDo component it should be rendered correctly`,() => {
    let wrapper = ""; 
    let mockOnChange = jest.fn();
    let mockOnSave = jest.fn();   
    beforeAll(() => {  
        const props = {
            todo: "test", 
            handleChange: mockOnChange,
            addTodo: mockOnSave,   
            todos: {todo:"test",status:true,isCompleted:false}
        }
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
        expect(
            wrapper
            .find(`form`)
            .find(`button`)
            .props()
            .type
        ).toEqual(`submit`);  
        expect(
            wrapper
            .find(`form`)
            .find(`button`)
            .props()
            .name
        ).toEqual(`Add Todo`);     
    });     
    it(`Add todo function call should be properly`,() => {        
        wrapper
        .find(`form`)
        .find(`button`)
        .simulate('submit');        
        expect(
            wrapper
            .find(ToDoElements)
            .find(`tr`)
            .length
        ).toBe(2);
    });   
});