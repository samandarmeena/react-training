import React from 'react';
import { mount } from 'enzyme';
import Footer from './Footer';

describe('Footer component', () => {
  let wrapper = '';
  beforeAll(() => {
    wrapper = mount(<Footer />);
  });

  it('component rendered without an error', () => {
    expect(wrapper).toBeTruthy();
  });

  it('Children components length should be equal to 3', () => {
    expect(wrapper.find('.footer').children().length).toBe(3);
  });

  it('Children components in a proper sequence', () => {
    expect(
      wrapper
        .find('.footer')
        .children()
        .at(0)
        .hasClass('footerLinks')
    ).toBe(true);
    expect(
      wrapper
        .find('.footer')
        .children()
        .at(2)
        .hasClass('footerTnc')
    ).toBe(true);
  });

  it('Snapshot testing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
