import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import StudentsService from 'services/StudentsService';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import { Student } from 'shared/interfaces';

import { FooterComponent, NavbarComponent } from 'components';
import { Paper } from '@material-ui/core';

const StudentDetails = ({ student }: { student: Student }) => (
  <Paper elevation={3} style={{ padding: '10px 20px' }}>
    <div>First name: {student.firstName}</div>
    <div>Last name: {student.lastName}</div>
    <div>Address: {`${student.address.streetAddress}, ${student.address.city} ${student.address.state} ${student.address.zipCode}`}</div>
    <div>Phone Number: {student.phoneNumber}</div>
    <div>GPA: {student.GPA}</div>
  </Paper>
);

const StudentDetailsPage = (props: StudentDetailsPageProps) => {
  const history = useHistory();

  const [student, setStudent] = useState<Student>();

  useEffect(() => {
    if (props.match.params.id) {
      getStudentInfo(props.match.params.id);
    } else {
      history.push('/');
    }
  }, []);

  const getStudentInfo = (index: number) => {
    StudentsService.getStudentDetails(index).then(std => {
      setStudent(std)
    });
  };

  return (
    <div id="studentDetailsPage">
      <NavbarComponent/>
      <Container style={{ minHeight: '85vh' }} maxWidth="xs">
        <Button variant="contained" color="primary"
                style={{ marginBottom: '15px' }}
                onClick={() => history.push('/')}>Back</Button>
        {student ? <StudentDetails student={student}/> : <div/>}
      </Container>
      <FooterComponent/>
    </div>
  );
};

type StudentDetailsPageProps = {
  match: {
    params: {
      id: number
    }
  }
}

export default StudentDetailsPage;
