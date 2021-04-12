import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const demoContent = [
  { id: '1', status: 'done', table: 'Table 1', Products: 'Zia Giulias Breakfast, Nonna Albas Pizza', order: 123 },
  { id: '2', status: 'ordered', table: 'Table 1', Products: 'Zia Giulias Breakfast, Nonna Albas Pizza', order: 123 },
  { id: '3', status: 'done', table: 'Table 1', Products: 'Zia Giulias Breakfast, Nonna Albas Pizza', order: 123 },
];

const Kitchen = () => {
  const [state, setState] = React.useState({
    checkedB: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const renderActions = status => {
    switch (status) {
      case 'done':
        return (
          <>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedB}
                  onChange={handleChange}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Done"
            />
          </>
        );
      case 'ordered':
        return (
          <>
            <FormControlLabel
              control={
                <Checkbox

                  onChange={handleChange}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Done"
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order number</TableCell>
            <TableCell>Table</TableCell>
            <TableCell>Products</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.order}
              </TableCell>
              <TableCell>
                {row.table}
              </TableCell>
              <TableCell>
                {row.Products}
              </TableCell>
              <TableCell>
                {renderActions(row.status)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>

  );
};

export default Kitchen;
