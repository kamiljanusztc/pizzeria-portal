import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <div>
      <h2>Tables view</h2>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/1`} activeClassName='active'>Change Booking</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'>New Booking</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName='active'>New Event</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/1`} activeClassName='active'>Change Event</Link>
    </div>
  </div>
);

export default Tables;
