import React from 'react';
import { mount } from 'enzyme';
import ToDoList from './ToDoList';
import ToDoActions from './ToDoActions';

describe('ToDoList component', () => {
  let wrapper = '';
  let inputProps = {};
  const toggleFixedFunction = jest.fn();
  const removeToDoFunction = jest.fn();
  beforeAll(() => {
    inputProps = {
      todoItems: [],
      filterBy: 'New',
      toggleFixed: toggleFixedFunction,
      removeToDo: removeToDoFunction
    };
    wrapper = mount(<ToDoList {...inputProps} />);
  });

  it('ToDoList component rendered without an error', () => {
    expect(wrapper).toBeTruthy();
  });

  it('Check length of the children', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('Check length of the list', () => {
    expect(wrapper.find('ul').length).toBe(1);
  });

  it('Default list items should be zero', () => {
    expect(wrapper.find('ul').find('li').length).toBe(0);
  });

  it('should render 2 items in the list', () => {
    let newinputProps = {
      ...inputProps,
      todoItems: [
        { id: 1, title: 'Test todo title 1', status: 'New' },
        { id: 2, title: 'Test todo title 2', status: 'New' }
      ]
    };
    wrapper = mount(<ToDoList {...newinputProps} />);
    expect(wrapper.find('ul').find('li').length).toBe(2);
  });

  it('should render ToDoActions children in each list item', () => {
    let newinputProps = {
      ...inputProps,
      todoItems: [
        { id: 1, title: 'Test todo title 1', status: 'New' },
        { id: 2, title: 'Test todo title 2', status: 'New' }
      ]
    };
    wrapper = mount(<ToDoList {...newinputProps} />);
    expect(
      wrapper
        .find('ul')
        .find('li')
        .first()
        .find(ToDoActions).length
    ).toBe(1);
  });

  it('Snapshot testing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
