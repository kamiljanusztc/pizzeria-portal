import React from 'react';
import styles from './Homepage.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const orders = [
  { id: '1', type: 'local', status: 'ordered', time: '11:00 - 12:00', order: 123 },
  { id: '2', type: 'remote', status: 'done', time: '13:00 - 14:00', order: 133 },
  { id: '1', type: 'local', status: 'ordered', time: '11:00 - 12:00', order: 123 },
  { id: '2', type: 'remote', status: 'done', time: '13:00 - 14:00', order: 133 },
];

const reservations = [
  { id: '2', type: 'event', status: 'ordered', table: '1', time: '13:00 - 14:00', order: 133 },
  { id: '2', type: 'reservation', status: 'ordered', table: '1', time: '13:00 - 14:00', order: 133 },
  { id: '2', type: 'event', status: 'ordered', table: '1', time: '13:00 - 14:00', order: 133 },
  { id: '2', type: 'reservation', status: 'ordered', table: '1', time: '13:00 - 14:00', order: 133 },
];

const renderActions = status => {
  switch (status) {
    case 'ordered':
      return (
        <Button>confirmed</Button>
      );
    case 'done':
      return (
        <Button>confirmed</Button>
      );
    default:
      return null;
  }
};

const Homepage = () => (

  <div className={styles.component}>
    <Paper className={styles.paper}>
      <Button>Orders</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Order</TableCell>
            <TableCell>Confirmation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.type}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.status}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.time}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.order}
              </TableCell>
              <TableCell>
                {renderActions(row.status)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <Paper className={styles.paper}>
      <Button>Reservations and events</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Table</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Order</TableCell>
            <TableCell>Confirmation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reservations.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.type}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.table}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.time}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.order}
              </TableCell>
              <TableCell>
                {renderActions(row.status)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);



export default Homepage;
