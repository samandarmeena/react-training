import React from 'react';
import { mount } from 'enzyme';
import Input from './Input';

describe('Input component', () => {
  let wrapper = '';
  const onChangeFunction = jest.fn();
  beforeAll(() => {
    const inputProps = {
      inputName: 'TestInput',
      inputId: 'TestInput',
      inputValue: 'Here is input value',
      inputPlaceholder: 'Test Input',
      changeEvent: onChangeFunction
    };
    wrapper = mount(<Input {...inputProps} />);
  });

  it('Input component rendered without an error', () => {
    expect(wrapper).toBeTruthy();
  });

  it('Check length of the children', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('Change event should be triggered on keypress in input box', () => {
    wrapper.find('input').simulate('change');
    expect(onChangeFunction).toHaveBeenCalled();
  });

  /*it('Snapshot testing', () => {
    expect(wrapper).toMatchSnapshot();
  });*/
});
