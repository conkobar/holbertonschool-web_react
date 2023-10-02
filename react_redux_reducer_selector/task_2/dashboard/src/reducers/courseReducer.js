const defaultState = [
  {
    id: 1,
    name: 'ES6',
    isSelected: false,
    credit: 60,
  },
  {
    id: 2,
    name: 'Webpack',
    isSelected: false,
    credit: 20,
  },
  {
    id: 3,
    name: 'React',
    isSelected: false,
    credit: 40,
  },
];

const courseReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_COURSE_SUCCESS':
      return state.map((course) => ({
        ...course,
        isSelected: false,
        ...action.data,
      }));
    case 'SELECT_COURSE':
      return state.map((course) => ({
        ...course,
        isSelected: course.id === action.index,
      }));
    case 'UNSELECT_COURSE':
      return state.map((course) => ({
        ...course,
        isSelected: course.id === action.index ? false : course.isSelected,
      }));
    default:
      return state;
  }
};

export default courseReducer;
