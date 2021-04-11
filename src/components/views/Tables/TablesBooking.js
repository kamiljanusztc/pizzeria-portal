import React from 'react';
import PropTypes from 'prop-types';
import styles from './TablesBooking.module.scss';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const demoContent = [
  { id: '1', status: 'free', order: null },
];

const TablesBooking = props => {
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
              <TableCell>Id</TableCell>
              <TableCell>Table</TableCell>
              <TableCell>Date start</TableCell>
              <TableCell>Date stop</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContent.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {props.match.params.id}
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
                  <form className={styles.dateContainer} noValidate>
                    <TextField
                      id="datetime-local"
                      type="datetime-local"
                      defaultValue="2021-05-24T14:00"
                      className={styles.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </form>
                </TableCell>
                <TableCell component="th" scope="row">
                  <form className={styles.dateContainer} noValidate>
                    <TextField
                      id="datetime-local"
                      type="datetime-local"
                      defaultValue="2021-05-24T14:30"
                      className={styles.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </form>
                </TableCell>
                <TableCell component="th" scope="row">
                  <TextField id="standard-basic" defaultValue="Kate" />
                </TableCell>
                <TableCell component="th" scope="row">
                  <TextField id="standard-basic" defaultValue="000-000-000" />
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

TablesBooking.propTypes = {
  match: PropTypes.any,
};

export default TablesBooking;
