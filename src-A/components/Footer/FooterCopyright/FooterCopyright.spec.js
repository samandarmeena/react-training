import React from 'react';
import { mount } from 'enzyme';
import FooterCopyright from './FooterCopyright';
import { copyrightText, copyRightLinks } from '../../../dataStore/data';

describe('Checking a child', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = mount(
      <FooterCopyright
        copyrightText={copyrightText}
        copyRightLinks={copyRightLinks}
      />
    );
  });

  it('component rendered without an error', () => {
    expect(wrapper).toBeTruthy();
  });

  it('Check the copyright container is loading', () => {
    const copyrightContainer = wrapper.find('.copyright');
    expect(copyrightContainer.length).toBe(1);
  });

  it('Check the text of copyright container', () => {
    const text = wrapper.find('.copyright').text();
    expect(text).toBe(copyrightText);
  });

  it('Text component should be rendered 5 times', () => {
    const textContainer = wrapper.find('.TandC').find('Text');
    expect(textContainer.length).toBe(5);
    expect(textContainer.first().prop('text')).toEqual('Terms & Conditions');
    expect(textContainer.at(4).prop('text')).toEqual(
      'Staples Bussiness Advantage'
    );
  });

  it('Snapshot testing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
