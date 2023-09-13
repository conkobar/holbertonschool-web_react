import React from 'react';
import { mount } from 'enzyme';
import Login from './Login';

describe('Login Component', () => {
  it('renders without crashing', () => {
    const comp = mount(<Login />);
    expect(comp.exists()).toBe(true);
  });

  it('renders 2 inputs and 2 labels', () => {
    const comp = mount(<Login />);
    comp.update();

    // check inputs
    const inputs = comp.find('input');
    expect(inputs.length).toBe(2);

    // check labels
    const labels = comp.find('label');
    expect(labels.length).toBe(2);
  });
});
