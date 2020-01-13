import React from "react";
import { mount } from "enzyme";
import ToDoList from "./ToDoList";
import ToDoFilter from "../ToDoFilter";
import ToDoStatus from "../ToDoStatus";
import ToDoElements from "../ToDoElements";
import CompleteToDoStatus from "../CompleteToDoStatus";
import ToDoAction from "../ToDoAction";
describe(`ToDoList component testing`, () => {
    let wrapper = "";
    beforeAll(() => {
        const props  = {
            toDos: [{todo:"test",status:true,isCompleted:false}]
        }
        wrapper = mount(<ToDoList {...props} />);
    });    
    it(`ToDoList component should be render without error`, () => {        
        expect(wrapper).toBeTruthy();
    });
    it(`Testing ToDoFilter active button click on that button class should be there`, () => {        
        wrapper
        .find(ToDoFilter)
        .find(`button`)
        .at(1)
        .simulate(`click`);        
        expect(            
            wrapper
            .find(ToDoFilter)
            .find(`button`)
            .at(1)
            .hasClass(`isCompletedButton`)            
        ).toEqual(true);
        expect(
            wrapper
            .find(ToDoFilter)
            .find(`button`)
            .at(2)
            .hasClass(`statusButton`)
        ).toEqual(true);   
        expect(
            wrapper
            .find(ToDoFilter)
            .find(`button`)
            .at(0)
            .hasClass(`statusButton`)
        ).toEqual(true);
    });
    it(`Testing ToDoFilter completed button click on that button class should be there`, () => {        
        wrapper
        .find(ToDoFilter)
        .find(`button`)
        .at(2)
        .simulate(`click`);        
        expect(            
            wrapper
            .find(ToDoFilter)
            .find(`button`)
            .at(2)
            .hasClass(`isCompletedButton`)            
        ).toEqual(true);
        expect(
            wrapper
            .find(ToDoFilter)
            .find(`button`)
            .at(1)
            .hasClass(`statusButton`)
        ).toEqual(true);   
        expect(
            wrapper
            .find(ToDoFilter)
            .find(`button`)
            .at(0)
            .hasClass(`statusButton`)
        ).toEqual(true);
    });
    it(`Testing ToDoFilter All button click on that button class should be there`, () => {        
        wrapper
        .find(ToDoFilter)
        .find(`button`)
        .at(0)
        .simulate(`click`);        
        expect(            
            wrapper
            .find(ToDoFilter)
            .find(`button`)
            .at(0)
            .hasClass(`isCompletedButton`)            
        ).toEqual(true);
        expect(
            wrapper
            .find(ToDoFilter)
            .find(`button`)
            .at(1)
            .hasClass(`statusButton`)
        ).toEqual(true);   
        expect(
            wrapper
            .find(ToDoFilter)
            .find(`button`)
            .at(2)
            .hasClass(`statusButton`)
        ).toEqual(true);
    });
    it(`Testing table th mock data`, () => {
        expect(
            wrapper
            .find(`table`)
            .find(`thead`)
            .find(`tr`)
            .find(`th`)
            .at(0)
            .text()
        ).toEqual(`Todo`);
        expect(
            wrapper
            .find(`table`)
            .find(`thead`)
            .find(`tr`)
            .find(`th`)
            .at(1)
            .text()
        ).toEqual(`Status`);
        expect(
            wrapper
            .find(`table`)
            .find(`thead`)
            .find(`tr`)
            .find(`th`)
            .at(2)
            .text()
        ).toEqual(`Is Completed`);
        expect(
            wrapper
            .find(`table`)
            .find(`thead`)
            .find(`tr`)
            .find(`th`)
            .at(3)
            .text()
        ).toEqual(`Action`);
    }); 
    it(`testing on click to do active status button class should be change`, () => {         
        wrapper
        .find(ToDoStatus)
        .find(`button`)        
        .simulate(`click`);
        expect(
            wrapper
            .find(ToDoStatus)
            .find(`button`)            
            .hasClass(`declineButton`)
        ).toEqual(true);        
    });   
    it(`testing on click to do complete status button class should be change`, () => {         
        wrapper
        .find(CompleteToDoStatus)
        .find(`button`)        
        .simulate(`click`);
        expect(
            wrapper
            .find(CompleteToDoStatus)
            .find(`button`)            
            .hasClass(`isCompletedButton`)
        ).toEqual(true);        
    });    
    // it(`testing on click to do action delete button, length should be change`, () => {
    //     wrapper
    //     .find(ToDoAction)
    //     .find(`button`)
    //     .at(1)
    //     .simulate(`click`);

    //     expect(
    //         wrapper
    //         .find(ToDoElements)
    //         .find(`tr`)                
    //     ).toHaveLength(0);        
    // });
    it(`SnapShot Testing`, () => {
        expect(wrapper).toMatchSnapshot();
    });
});