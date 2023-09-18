import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite';

const CourseList = ({ listCourses = [] }) => {
  return (
    <BodySectionWithMarginBottom title='Course list'>
      <table id='CourseList' className={css(styles.table)}>
        <thead>
          <CourseListRow textFirstCell='Available courses' isHeader={true} />
          <CourseListRow
            textFirstCell='Course name'
            textSecondCell='Credit'
            isHeader={true}
          />
        </thead>
        <tbody>
          {listCourses.length === 0 ? (
            <CourseListRow
              textFirstCell='No course available yet'
              isHeader={false}
            />
          ) : (
            listCourses.map((course) => (
              <CourseListRow
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={String(course.credit)}
                isHeader={false}
              />
            ))
          )}
        </tbody>
      </table>
    </BodySectionWithMarginBottom>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

const styles = StyleSheet.create({
  table: {
    borderBottom: '2px solid',
    borderCollapse: 'collapse',
    borderColor: 'lightgray',
    width: '90%',
    border: '1px solid',
    margin: '30px auto',
  },
  th: {
    borderBottom: '2px solid',
    borderCollapse: 'collapse',
    borderColor: 'lightgray',
  },
  columnHeaders: {
    textAlign: 'left',
  },
});

export default CourseList;
