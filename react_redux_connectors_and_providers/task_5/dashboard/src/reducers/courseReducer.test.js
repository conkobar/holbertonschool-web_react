import courseReducer from '../reducers/courseReducer';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';
import { Map } from 'immutable';

describe('courseReducer', () => {
  const defaultState = Map({
    1: {
      id: 1,
      name: 'ES6',
      isSelected: false,
      credit: 60,
    },
    2: {
      id: 2,
      name: 'Webpack',
      isSelected: false,
      credit: 20,
    },
    3: {
      id: 3,
      name: 'React',
      isSelected: false,
      credit: 40,
    },
  });

  it('should return the initial state', () => {
    expect(courseReducer(undefined, {})).toEqual(defaultState);
  });

  it('should handle FETCH_COURSE_SUCCESS', () => {
    const courses = [
      { id: 4, name: 'Course 4', credit: 80 },
      { id: 5, name: 'Course 5', credit: 100 },
    ];
    const normalizedData = coursesNormalizer(courses);
    const expectedState = defaultState.merge(normalizedData.entities.courses);
    expect(
      courseReducer(defaultState, {
        type: FETCH_COURSE_SUCCESS,
        data: courses,
      })
    ).toEqual(expectedState);
  });

  it('should handle SELECT_COURSE', () => {
    const expectedState = defaultState.setIn(['1', 'isSelected'], true);
    expect(
      courseReducer(defaultState, { type: SELECT_COURSE, index: '1' })
    ).toEqual(expectedState);
  });

  it('should handle UNSELECT_COURSE', () => {
    const courses = [
      { id: 1, name: 'ES6', isSelected: true, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: true, credit: 40 },
    ];
    const normalizedData = coursesNormalizer(courses);
    const state = defaultState.merge(normalizedData.entities.courses);
    const expectedState = state.setIn(['1', 'isSelected'], false);
    expect(courseReducer(state, { type: UNSELECT_COURSE, index: '1' })).toEqual(
      expectedState
    );
  });
});
