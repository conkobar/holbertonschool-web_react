import { normalize, schema } from 'normalizr';

// define courses schema
const courses = new schema.Entity('courses');

// normalizes the data with created schema
export const coursesNormalizer = (data) => {
  return normalize(data, [courses]);
};
