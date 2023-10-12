import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr>
          <th colSpan='2' className={css(styles.headerRow)}>
            {textFirstCell}
          </th>
        </tr>
      );
    }
    return (
      <tr className='column-headers'>
        <th className={css(styles.headerRow)}>{textFirstCell}</th>
        <th className={css(styles.headerRow)}>{textSecondCell}</th>
      </tr>
    );
  }
  return (
    <tr className={css(isChecked ? styles.rowChecked : styles.row)}>
      <td>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {textFirstCell}
      </td>
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

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#f5f5f5ab',
  },
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

export default CourseListRow;
