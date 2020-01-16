import React from 'react';
import { mount } from 'enzyme';
import FooterConnect from './FooterConnect';
import { accessibilityImg, socialImgs } from '../../../dataStore/data';

describe('FooterLink component', () => {
  let wrapper = '';
  beforeAll(() => {
    wrapper = mount(
      <FooterConnect
        accessibilityImg={accessibilityImg}
        socialImgs={socialImgs}
      />
    );
  });

  it('component rendered without an error', () => {
    expect(wrapper).toBeTruthy();
  });

  it('Text is rendering properly', () => {
    expect(
      wrapper
        .find('Text')
        .find('span')
        .text()
    ).toBe('Join us on');
  });

  it('Check connectivity links renders properly', () => {
    expect(wrapper.find('.footerConnectLinks').length).toBe(1);
  });

  it('Accessibility image is rendering properly', () => {
    expect(
      wrapper
        .find('.footerConnectLinks')
        .find('.footerConnectRight')
        .find('Image').length
    ).toBe(1);
  });

  it('Social links are rendering properly', () => {
    expect(
      wrapper
        .find('.footerConnectLinks')
        .find('.footerConnectLeft')
        .find('Image').length
    ).toBe(5);
    expect(
      wrapper
        .find('.footerConnectLinks')
        .find('.footerConnectLeft')
        .find('Image')
        .at(4)
        .prop('alt')
    ).toBe('Instagram');
  });

  it('Snapshot testing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
