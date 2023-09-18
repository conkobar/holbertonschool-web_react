import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('BodySectionWithMarginBottom Component', () => {
  it('renders a BodySection component and that the props are passed correctly to the child component', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title='test title'>
        <p>test child node</p>
      </BodySectionWithMarginBottom>
    );

    const bodySection = wrapper.find(BodySection);

    expect(bodySection.exists()).toBe(true);
    expect(bodySection.prop('title')).toEqual('test title');
    expect(bodySection.contains(<p>test child node</p>)).toBe(true);
  });
});
