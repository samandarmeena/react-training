import React from 'react';
import { mount } from 'enzyme';
import Text from './Text';

describe('Text component', () => {
  let wrapper = '';

  beforeAll(() => {
    wrapper = mount(<Text text="Terms and Conditions" isStrong={true} />);
  });

  it('Text component rendered without an error', () => {
    expect(wrapper).toBeTruthy();
  });

  /*it('Check passed props', () => {
    expect(wrapper.prop('text')).toBe('Terms and Conditions');
    expect(wrapper.prop('isStrong')).toBe(true);
  });*/

  it('Check length of the children', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('Text is rendering properly', () => {
    expect(wrapper.find('span').text()).toBe('Terms and Conditions');
  });

  it('Check dynamic class', () => {
    expect(wrapper.find('span').hasClass('textStrong')).toBe(true);
  });

  it('Snapshot testing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
