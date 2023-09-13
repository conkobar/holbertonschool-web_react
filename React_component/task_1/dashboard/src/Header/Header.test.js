import React from 'react';
import Header from './Header';
import { mount } from 'enzyme';

describe('Header', () => {
  it('renders without crashing', () => {
    const comp = mount(<Header />);
    expect(comp.exists()).toBe(true);
  });

  it('renders img and h1 tags', () => {
    const comp = mount(<Header />);
    comp.update();

    // check imgs
    const imgs = comp.find('img');
    expect(imgs.exists()).toBe(true);

    // check h1s
    const aychOnes = comp.find('h1');
    expect(aychOnes.exists()).toBe(true);
  });
});
