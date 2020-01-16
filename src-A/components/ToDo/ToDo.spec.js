import React from 'react';
import { mount } from 'enzyme';
import ToDo from './ToDo';
import AddToDo from '../ToDo/AddToDo';
import ToDoList from '../ToDo/ToDoList';
import Button from '../Shared/Button';

describe('ToDo component', () => {
  let wrapper = '';
  let mockState = {};
  beforeAll(() => {
    wrapper = mount(<ToDo />);
    mockState = {
      todoTitle: '',
      todos: [
        { id: 1, title: 'Test todo title 1', status: 'New' },
        { id: 2, title: 'Test todo title 2', status: 'New' }
      ],
      filterBy: 'New'
    };
  });

  it('ToDo component rendered without an error', () => {
    expect(wrapper).toBeTruthy();
  });

  it('Check length of the children', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('Check children component rendered successfully', () => {
    expect(wrapper.find(AddToDo).length).toBe(1);
    expect(wrapper.find(ToDoList).length).toBe(0);
  });

  it('Check children component rendered successfully', () => {
    wrapper.setState(mockState);
    expect(wrapper.find(AddToDo).length).toBe(1);
    expect(wrapper.find('button.buttonFilterBy').length).toBe(1);
    expect(wrapper.find(ToDoList).length).toBe(1);
  });

  it('should render 2 items in the list', () => {
    wrapper.setState(mockState);
    const toDoList = wrapper.find(ToDoList);
    expect(toDoList.find('ul').find('li').length).toBe(2);
  });

  it('should change the filterby flag', () => {
    wrapper.setState(mockState);
    wrapper.find('button.buttonFilterBy').simulate('click');
    expect(wrapper.find('button.buttonFilterBy').text()).toBe('Completed');
  });

  it('should not add new todo in the list', () => {
    wrapper.find('button.buttonFilterBy').simulate('click');
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: '' } });
    wrapper
      .find(AddToDo)
      .find('.addToDo')
      .find('button.saveToDoBtn')
      .simulate('click');
    const toDoList = wrapper.find(ToDoList);
    expect(toDoList.find('ul').find('li').length).toBe(2);
  });

  it('should add new todo in the list', () => {
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Test todo title 3' } });
    wrapper
      .find(AddToDo)
      .find('.addToDo')
      .find('button.saveToDoBtn')
      .simulate('click');
    const toDoList = wrapper.find(ToDoList);
    expect(toDoList.find('ul').find('li').length).toBe(3);
  });

  it('should change status of the todo', () => {
    wrapper
      .find(ToDoList)
      .find('ul')
      .find('li')
      .first()
      .find('button.changeStatus')
      .simulate('click');
    expect(
      wrapper
        .find(ToDoList)
        .find('ul')
        .find('li').length
    ).toBe(2);
  });

  it('one todo should have status completed', () => {
    wrapper.setState({ filterBy: 'Completed' });
    expect(
      wrapper
        .find(ToDoList)
        .find('ul')
        .find('li').length
    ).toBe(1);
  });

  it('toggle filter', () => {
    wrapper
      .find('.toDoListContainer')
      .find('.filterButton')
      .find(Button)
      .props()
      .clickEvent();
    expect(wrapper.state('filterBy')).toBe('New');
  });

  it('mark as new again', () => {
    wrapper
      .find('.toDoListContainer')
      .find('.filterButton')
      .find(Button)
      .props()
      .clickEvent();
    wrapper
      .find(ToDoList)
      .find('ul')
      .find('li')
      .first()
      .find('button.changeStatus')
      .simulate('click');
    expect(
      wrapper
        .find(ToDoList)
        .find('ul')
        .find('li').length
    ).toBe(0);
  });

  it('should remove a todo from the list', () => {
    wrapper.setState({ filterBy: 'New' });
    wrapper
      .find(ToDoList)
      .find('ul')
      .find('li')
      .at(1)
      .find('button.removeToDo')
      .simulate('click');
    expect(
      wrapper
        .find(ToDoList)
        .find('ul')
        .find('li').length
    ).toBe(2);
  });

  it('Snapshot testing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
