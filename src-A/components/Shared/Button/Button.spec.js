import React from 'react';
import { mount } from 'enzyme';
import Button from './Button';
import Image from '../Image';

describe('Button component', () => {
  let wrapper = '';
  const clickFunction = jest.fn();
  let buttonProps = {};
  beforeAll(() => {
    buttonProps = {
      buttonName: 'TestButton',
      buttonId: 'TestButton',
      buttonTitle: 'Test Button',
      buttonToolTip: 'Button for unit testing',
      clickEvent: clickFunction
    };
    wrapper = mount(<Button {...buttonProps} />);
  });

  it('Button component rendered without an error', () => {
    expect(wrapper).toBeTruthy();
  });

  it('Check length of the children', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('Check default classes', () => {
    expect(wrapper.find('button').hasClass('buttonPrimary')).toBe(true);
    expect(wrapper.find('button').hasClass('buttonMedium')).toBe(true);
  });

  it('Check dynamically added classes', () => {
    let newButtonProps = {
      ...buttonProps,
      buttonStyle: 'buttonInfo',
      buttonSize: 'buttonSmall'
    };
    wrapper = mount(<Button {...newButtonProps} />);
    expect(wrapper.find('button').hasClass('buttonInfo')).toBe(true);
    expect(wrapper.find('button').hasClass('buttonSmall')).toBe(true);
  });

  it('Click event should be triggered on click of button', () => {
    wrapper.find('button').simulate('click');
    expect(clickFunction).toHaveBeenCalled();
  });

  /*it('Snapshot testing', () => {
    expect(wrapper).toMatchSnapshot();
  });*/
});
