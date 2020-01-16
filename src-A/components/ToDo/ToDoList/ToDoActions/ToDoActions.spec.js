import React from 'react';
import { mount } from 'enzyme';
import ToDoActions from './ToDoActions';
import Button from '../../../Shared/Button';

describe('ToDoActions component', () => {
  let wrapper = '';
  let inputProps = {};
  const mockToggleFixed = jest.fn();
  const mockRemoveToDo = jest.fn();
  beforeAll(() => {
    inputProps = {
      itemId: 123,
      itemStatus: 'New',
      handleToggleFixed: mockToggleFixed,
      handleRemoveToDo: mockRemoveToDo
    };
    wrapper = mount(<ToDoActions {...inputProps} />);
  });

  it('ToDoActions component rendered without an error', () => {
    expect(wrapper).toBeTruthy();
  });

  it('Check length of the children', () => {
    expect(wrapper.find(Button)).toHaveLength(2);
  });

  it('Check attributes of the children components', () => {
    expect(
      wrapper
        .find(Button)
        .find('button')
        .first()
        .hasClass('changeStatus')
    ).toBe(true);
    expect(
      wrapper
        .find(Button)
        .find('button')
        .at(1)
        .hasClass('removeToDo')
    ).toBe(true);
  });

  it('Check dynamic props of the components', () => {
    let newinputProps = {
      ...inputProps,
      itemStatus: 'new1'
    };
    wrapper = mount(<ToDoActions {...newinputProps} />);
    expect(
      wrapper
        .find(Button)
        .first()
        .prop('buttonToolTip')
    ).toBe('Mark as New');
    expect(
      wrapper
        .find(Button)
        .first()
        .prop('buttonStyle')
    ).toBe('buttonInfo');
  });

  it('mock function (toggleFix) should trigger on click', () => {
    wrapper
      .find(Button)
      .first()
      .props()
      .clickEvent();
    expect(mockToggleFixed).toHaveBeenCalled();
  });

  it('mock function (removeToDo) should trigger on click', () => {
    wrapper
      .find(Button)
      .at(1)
      .props()
      .clickEvent();
    expect(mockRemoveToDo).toHaveBeenCalled();
  });

  it('Snapshot testing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
