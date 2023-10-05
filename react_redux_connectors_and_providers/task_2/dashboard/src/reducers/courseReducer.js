import { coursesNormalizer } from '../schema/courses';
import { Map } from 'immutable';

// define the default state of the course reducer
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

// define the course reducer itself
const courseReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_COURSE_SUCCESS':
      const normalizedData = coursesNormalizer(action.data);
      return state.merge(normalizedData.entities.courses);
    case 'SELECT_COURSE':
      return state.setIn([action.index, 'isSelected'], true);
    case 'UNSELECT_COURSE':
      return state.setIn([action.index, 'isSelected'], false);
    default:
      return state;
  }
};

export default courseReducer;
