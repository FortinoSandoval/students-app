import React, { useState } from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    marginBottom: '25px'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  marginBottom: {
    marginBottom: '15px'
  },
  address: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

const NewStudentComponent = (props: NewStudentComponentProps) => {
  const classes = useStyles();
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    address: '',
    state: '',
    city: '',
    zipCode: '',
    phoneNumber: '',
    GPA: ''
  });

  const handleStudentUpdate = (event: any) => {
    setStudent({
      ...student,
      [event.target.name]: event.target.value
    })
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!student.firstName || !student.firstName || !student.firstName || !student.firstName || !student.firstName || !student.firstName || !student.firstName || !student.firstName) return;
    props.handleSubmit(student);
    setStudent({
      firstName: '',
      lastName: '',
      address: '',
      state: '',
      city: '',
      zipCode: '',
      phoneNumber: '',
      GPA: ''
    })
  };

  return (<Dialog fullScreen open={props.isOpen} onClose={props.handleClose}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={props.handleClose}
                      aria-label="close">
            <CloseIcon/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {props.isEditing ? 'Edit student' : 'Add student'}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth={'md'}>
        <form noValidate onSubmit={handleSubmit}>
          <TextField required onChange={handleStudentUpdate} name="firstName"
                     value={student.firstName}
                     className={classes.marginBottom}
                     label="First Name" fullWidth variant={'outlined'}/>
          <TextField required onChange={handleStudentUpdate} name="lastName"
                     value={student.lastName}
                     className={classes.marginBottom}
                     label="Last Name"
                     fullWidth variant={'outlined'}/>
          <TextField required onChange={handleStudentUpdate} name="address"
                     value={student.address}
                     className={classes.marginBottom}
                     label="Address"
                     fullWidth variant={'outlined'}/>
          <div className={classes.address}>
            <TextField required onChange={handleStudentUpdate} name="city"
                       value={student.city}
                       className={classes.marginBottom}
                       label="City"
                       style={{ width: '32%' }}
                       variant={'outlined'}/>
            <TextField required onChange={handleStudentUpdate} name="state"
                       value={student.state}
                       className={classes.marginBottom}
                       label="State"
                       style={{ width: '32%' }}
                       variant={'outlined'}/>
            <TextField required onChange={handleStudentUpdate} name="zipCode"
                       value={student.zipCode}
                       className={classes.marginBottom}
                       label="ZIP Code" style={{ width: '32%' }}
                       variant={'outlined'}/>
          </div>
          <TextField required onChange={handleStudentUpdate} name="phoneNumber"
                     value={student.phoneNumber}
                     className={classes.marginBottom}
                     label="Phone Number" fullWidth
                     variant={'outlined'}/>
          <TextField required onChange={handleStudentUpdate} name="GPA"
                     value={student.GPA}
                     className={classes.marginBottom}
                     label="GPA"
                     fullWidth variant={'outlined'}/>
          <Button autoFocus type="submit" color="primary" variant="contained">
            Save
          </Button>

        </form>
      </Container>
    </Dialog>
  );
};

interface NewStudentComponentProps {
  isOpen: boolean,
  handleClose: () => void,
  handleSubmit: (student: any) => void,
  isEditing?: boolean
}

export default NewStudentComponent;
