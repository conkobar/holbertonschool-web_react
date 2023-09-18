import React from 'react';
import PropTypes from 'prop-types';

const rowStyle = { backgroundColor: '#f5f5f5ab' };
const headerRowStyle = { backgroundColor: '#deb5b545' };

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const style = isHeader ? headerRowStyle : rowStyle;
  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr>
          <th colSpan='2' style={style}>
            {textFirstCell}
          </th>
        </tr>
      );
    }
    return (
      <tr className='column-headers'>
        <th style={style}>{textFirstCell}</th>
        <th style={style}>{textSecondCell}</th>
      </tr>
    );
  }
  return (
    <tr>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
