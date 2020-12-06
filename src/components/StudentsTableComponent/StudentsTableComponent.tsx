import React from 'react';

// Material
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';
import Tooltip from '@material-ui/core/Tooltip';

import { Student } from 'shared/interfaces/student.interface';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  noData: {
    width: '100%',
    padding: '20px',
    textAlign: 'center'
  }
});

const StudentsTableComponent = (props: StudentsTableComponentProps): JSX.Element => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">GPA</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.students && props.students.length > 0 ? props.students.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell align="right" component="th" scope="row">
                {row.lastName}
              </TableCell>
              <TableCell align="right" component="th" scope="row">
                {row.phoneNumber}
              </TableCell>
              <TableCell align="right">{row.GPA}</TableCell>
              <TableCell align="right">
                <Tooltip title="Details">
                  <InfoIcon onClick={() => props.handleDetails(index)}/>
                </Tooltip>
                <Tooltip title="Delete">
                  <DeleteIcon onClick={() => props.handleDelete(index)}/>
                </Tooltip>
              </TableCell>
            </TableRow>
          )) : <TableRow className={classes.noData}>
            <TableCell/>
            <TableCell/>
            <TableCell>No students were found.</TableCell>
            <TableCell/>
            <TableCell/>
          </TableRow>}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

type StudentsTableComponentProps = {
  students: Student[],
  handleDelete: (index: number) => void,
  handleDetails: (index: number) => void
}

export default StudentsTableComponent;
