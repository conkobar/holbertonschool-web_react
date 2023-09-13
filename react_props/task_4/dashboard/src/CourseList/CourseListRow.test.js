import React from 'react';
import { render } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component with prop isHeader=true', () => {

  // Test that CourseListRow renders one cell with colspan = 2 when
  // textSecondCell does not exist
  it('renders one cell with colspan=2 when textSecondCell does not exist', () => {
    const wrapper = render(<CourseListRow isHeader={true} textFirstCell='First Cell Test'/>);

    const th = wrapper.find('th');
    expect(th).toHaveLength(1);
    // expect(th.prop('colSpan')).toEqual('2');
    expect(th.eq(0).attr('colspan')).toEqual('2');
  });

  // Test that CourseListRow renders two cells when textSecondCell is present
  it('renders two cells when textSecondCell is present', () => {
    const wrapper = render(<CourseListRow isHeader={true} textFirstCell='First Cell Test' textSecondCell='Second Cell Test'/>);

    const th = wrapper.find('th');
    expect(th).toHaveLength(2);
  });
});

describe('CourseListRow Component with prop isHeader=false', () => {

  // Test that CourseListRow renders one cell with colspan = 2 when
  // textSecondCell does not exist
  it('renders two td elements within a tr', () => {
    const wrapper = render(<CourseListRow isHeader={false} textFirstCell='First Cell Test' textSecondCell='Second Cell Test'/>);

    const td = wrapper.find('td');
    expect(td).toHaveLength(2);

    expect(td.eq(0).parent().is('tr')).toBeTruthy();
    expect(td.eq(1).parent().is('tr')).toBeTruthy();
  });
});
