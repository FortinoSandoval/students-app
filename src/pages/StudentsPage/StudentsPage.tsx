import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {
  NavbarComponent,
  FooterComponent,
  StudentsTableComponent,
  NewStudentComponent
} from 'components';
import { useHistory } from 'react-router-dom';

import StudentsService from 'services/StudentsService';
import { Student } from 'shared/interfaces';

const StudentsPage = () => {
  const history = useHistory();

  const [students, setStudents] = useState<Student[]>([]);
  const [newStudentDialogOpen, setNewStudentDialogOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    getStudents();
  }, []);

  const handleNewStudentDialogOpen = (editing: boolean): void => {
    setNewStudentDialogOpen(true);
    setIsEditing(editing);
  };

  const handleNewStudentDialogClose = (): void => {
    setNewStudentDialogOpen(false);
  };

  const handleSubmit = (student: any) => {
    if (isEditing) {
      //  TODO: Implement update method
    } else {
      const studentDTO = {
        firstName: student.firstName,
        lastName: student.lastName,
        address: {
          streetAddress: student.address,
          city: student.city,
          state: student.state,
          zipCode: student.zipCode
        },
        phoneNumber: student.phoneNumber,
        GPA: student.GPA
      };
      return StudentsService.createStudent(studentDTO).then(() => {
        handleNewStudentDialogClose();
        getStudents();
      });
    }
  };

  const handleDelete = (index: number) => {
    StudentsService.removeStudent(index).then(() => {
      getStudents()
    });
  };

  const handleDetails = (index: number) => {
    history.push(`/student-details/${index}`);
  };

  const getStudents = () => {
    StudentsService.getStudents().then((savedStudents: Student[]) => {
      return setStudents(savedStudents);
    })
  };

  return (
    <div id="studentsPage">
      <NavbarComponent/>
      <Container style={{ minHeight: '85vh' }}>
        <Button variant="contained" color="primary"
                style={{ marginBottom: '15px' }}
                onClick={() => handleNewStudentDialogOpen(false)}>Add student
          +</Button>
        <StudentsTableComponent students={students} handleDelete={handleDelete}
                                handleDetails={handleDetails}/>
      </Container>
      <FooterComponent/>

      <NewStudentComponent isOpen={newStudentDialogOpen}
                           handleClose={handleNewStudentDialogClose}
                           handleSubmit={handleSubmit}
                           isEditing={isEditing}/>
    </div>
  );
};

export default StudentsPage;
