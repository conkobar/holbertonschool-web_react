import React from 'react';
import Footer from './Footer';
import { mount } from 'enzyme';

describe('Footer', () => {
  it('renders without crashing', () => {
    const comp = mount(<Footer />);
    expect(comp.exists()).toBe(true);
  });

  it('renders the text "Copyright"', () => {
    const comp = mount(<Footer />);
    comp.update();
    expect(comp.text()).toContain('Copyright');
  });
});
