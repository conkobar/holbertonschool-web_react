import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

class BodySectionWithMarginBottom extends React.Component {
  render() {
    return (
      <div className={css(styles.bodySectionWithMarginBottom)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

const styles = StyleSheet.create({
  bodySectionWithMarginBottom: { marginBottom: 40 },
});

export default BodySectionWithMarginBottom;
