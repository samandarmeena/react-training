import React from 'react';
import { mount } from 'enzyme';
import FooterLinks from './FooterLinks';
import { footerLinkStack } from '../../../dataStore/data';

describe('FooterLink component', () => {
  let wrapper = '';
  beforeAll(() => {
    wrapper = mount(<FooterLinks footerLinkStack={footerLinkStack} />);
  });

  it('component rendered without an error', () => {
    expect(wrapper).toBeTruthy();
  });

  it('Text is rendering properly', () => {
    expect(
      wrapper
        .find('span')
        .first()
        .text()
    ).toBe('Customer Service');
    expect(
      wrapper
        .find('span')
        .at(16)
        .text()
    ).toBe('Promotional Products');
  });

  it('Check object keys', () => {
    expect(
      wrapper
        .find('Text')
        .first()
        .prop('isStrong')
    ).toBe(true);

    expect(
      wrapper
        .find('Text')
        .at(1)
        .prop('isStrong')
    ).toBe(false);
  });

  it('Check dynamically added class', () => {
    expect(
      wrapper
        .find('span')
        .at(2)
        .hasClass('textStrong')
    ).toBe(false);
    expect(
      wrapper
        .find('span')
        .at(6)
        .hasClass('textStrong')
    ).toBe(true);
  });

  it('Snapshot testing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
