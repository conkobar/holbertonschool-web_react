import React from 'react';
import { mount } from 'enzyme';
import CourseList from './CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('CourseList Component', () => {
  let wrapper;

  // listCourses array
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  // Test that CourseList renders correctly if listCourses is not passed
  it('renders correctly if listCourses is not passed', () => {
    wrapper = mount(<CourseList />);
    expect(wrapper.exists()).toBe(true);
    const listItems = wrapper.find('tr');
    expect(listItems.length).toBe(3); // only header rows and "No course available yet" row are rendered
  });

  // Test that CourseList renders correctly if listCourses is an empty array
  it('renders correctly if listCourses is an empty array', () => {
    wrapper = mount(<CourseList listCourses={[]} />);
    expect(wrapper.exists()).toBe(true);
    const listItems = wrapper.find('tr');
    expect(listItems.length).toBe(3); // only header rows and "No course available yet" row are rendered
  });

  // Re-creates wrapper before each test to prevent side-effects or
  // interference between tests
  beforeEach(() => {
    wrapper = mount(<CourseList listCourses={listCourses} />);
  });

  // Test that CourseList renders without crashing
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // Test that CourseList renders the correct number of rows
  it('renders the correct number of rows', () => {
    wrapper.update();
    const listItems = wrapper.find('tr');
    expect(listItems.length).toBe(listCourses.length + 2); // +2 for the header rows
  });
});
