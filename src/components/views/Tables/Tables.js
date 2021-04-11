import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const demoContent = [
  {id: '1', status: 'event', time: '14:00', order: null},
  {id: '1', status: 'booking', time: '14:30', order: 123},
  {id: '1', status: 'null', time: '15:00', order: null},
  {id: '1', status: 'event', time: '15:30', order: 123},
];

const renderActions = status => {
  switch (status) {
    case 'null':
      return (
        <Button>
          <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'>New Booking</Link>
        </Button>
      );
    case 'booking':
      return (
        <Button>
          <Link to={`${process.env.PUBLIC_URL}/tables/booking/1`} activeClassName='active'>Change Booking</Link>
        </Button>
      );
    case 'event':
      return (
        <Button>
          <Link to={`${process.env.PUBLIC_URL}/tables/events/1`} activeClassName='active'>Change Event</Link>
        </Button>
      );
    default:
      return null;
  }
};

const Tables = () => (
  <div className={styles.component}>
    <Paper className={styles.paper}>
      <form className={styles.dateContainer} noValidate>
        <TextField
          id="datetime-local"
          label="Select date and time"
          type="datetime-local"
          defaultValue="2021-05-24T10:30"
          className={styles.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>TABLE 1</TableCell>
            <TableCell>TABLE 2</TableCell>
            <TableCell>TABLE 3</TableCell>
            <TableCell>TABLE 4</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.time}
              </TableCell>
              <TableCell component="th" scope="row">
                {renderActions(row.status)}
              </TableCell>
              <TableCell component="th" scope="row">
                {renderActions(row.status)}
              </TableCell>
              <TableCell component="th" scope="row">
                {renderActions(row.status)}
              </TableCell>
              <TableCell component="th" scope="row">
                {renderActions(row.status)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Tables;
