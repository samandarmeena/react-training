import React from 'react';
import { mount } from 'enzyme';
import Image from './Image';
import { accessibilityImg } from '../../../dataStore/data';

describe('Image component', () => {
  let wrapper = '';

  beforeAll(() => {
    wrapper = mount(
      <Image src={accessibilityImg.src} alt={accessibilityImg.alt} />
    );
  });

  it('Image component rendered without an error', () => {
    expect(wrapper).toBeTruthy();
  });

  it('Check length of the children', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('Snapshot testing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
