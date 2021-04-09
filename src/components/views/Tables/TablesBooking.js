import React from 'react';
import PropTypes from 'prop-types';
import styles from './TablesBooking.module.scss';

const TablesBooking = props => (
  <div className={styles.component}>
    <h2>{props.match.params.id}</h2>
  </div>
);

TablesBooking.propTypes = {
  match: PropTypes.any,
};

export default TablesBooking;
