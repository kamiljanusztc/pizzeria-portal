import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';

const WaiterOrderEdit = props => (
  <div className={styles.component}>
    <h2>{props.match.params.id}</h2>
  </div>
);

WaiterOrderEdit.propTypes = {
  match: PropTypes.any,
};

export default WaiterOrderEdit;
