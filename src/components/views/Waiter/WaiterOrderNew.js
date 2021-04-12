import React from 'react';
import PropTypes from 'prop-types';
import styles from './WaiterOrderNew.module.scss';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const demoContent = [
  { id: '1', status: 'free', products: 'Zia Giulias Breakfast', options: 'x2 medium', cost: '200', order: null },
  { id: '1', status: 'free', products: 'Zia Giulias Breakfast', options: 'x2 medium', cost: '200', order: null },
  { id: '1', status: 'free', products: 'Zia Giulias Breakfast', options: 'x2 medium', cost: '200', order: null },
];

const WaiterOrderNew = props => {
  const [table, setTable] = React.useState('');
  const handleChange = (event) => {
    setTable(event.target.value);
  };

  return (
    <div className={styles.component}>
      <Paper className={styles.paper}>
        <Button>Details</Button>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order number</TableCell>
              <TableCell>Table</TableCell>
              <TableCell>Products</TableCell>
              <TableCell>Options</TableCell>
              <TableCell>Order</TableCell>
              <TableCell>Cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContent.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  <Select
                    value={table}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="">
                      Table 1
                    </MenuItem>
                    <MenuItem value={2}>Table 2</MenuItem>
                    <MenuItem value={3}>Table 3</MenuItem>
                    <MenuItem value={4}>Table 4</MenuItem>
                  </Select>
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.products}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.options}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.products}, {row.options} = ${row.cost}
                </TableCell>
                <TableCell component="th" scope="row">
                  $ {row.cost}
                </TableCell>
                <TableCell>
                  <Button className={styles.buttonSave}
                    variant="contained"
                    color="primary"
                    size="small"
                  >
                    Save
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

WaiterOrderNew.propTypes = {
  match: PropTypes.any,
};

export default WaiterOrderNew;
