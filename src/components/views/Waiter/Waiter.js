import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import { Link } from 'react-router-dom';

const Waiter = () => (
  <div className={styles.component}>
    <div>
      <h2>Waiter view</h2>
      <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`} activeClassName='active'>New order</Link>
      <Link to={`${process.env.PUBLIC_URL}/waiter/order/1`} activeClassName='active'>Change order</Link>
    </div>
  </div>
);

// Login.PropTypes = {

// };

export default Waiter;
