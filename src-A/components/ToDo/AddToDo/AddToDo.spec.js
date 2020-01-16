import React from 'react';
import { mount } from 'enzyme';
import AddToDo from './AddToDo';
import Input from '../../Shared/Input';
import Button from '../../Shared/Button';

describe('AddToDo component', () => {
  let wrapper = '';
  let inputProps = {};
  let mockOnChange = jest.fn();
  let mockOnSave = jest.fn();
  beforeAll(() => {
    inputProps = {
      todoTitle: 'Test todo title 1',
      handleChange: mockOnChange,
      onSave: mockOnSave
    };
    wrapper = mount(<AddToDo {...inputProps} />);
  });

  it('AddToDo component rendered without an error', () => {
    expect(wrapper).toBeTruthy();
  });

  it('Check length of the children', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('Check children component rendered successfully', () => {
    expect(wrapper.find(Input).length).toBe(1);
    expect(wrapper.find(Button).length).toBe(1);
  });

  it('Should call save function one time', () => {
    wrapper
      .find(Input)
      .props()
      .changeEvent();
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it('Should call save function one time', () => {
    wrapper
      .find(Button)
      .props()
      .clickEvent();
    expect(mockOnSave).toHaveBeenCalledTimes(1);
  });

  it('Snapshot testing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
