import React from 'react';
import PropTypes from 'prop-types';
import styles from './WaiterOrder.module.scss';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const demoContent = [
  { id: '1', status: 'free', products: 'Zia Giulias Breakfast', options: 'medium', cost: '200', order: null },
];

const WaiterOrder = props => {
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
                  {row.products}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.options}
                </TableCell>
                <TableCell component="th" scope="row">
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
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

WaiterOrder.propTypes = {
  match: PropTypes.any,
};

export default WaiterOrder;
