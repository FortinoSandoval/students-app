import { Student } from 'shared/interfaces';

const StudentsService = {
  getStudents: (): Promise<Student[]> => {
    const students = localStorage.getItem('students');
    return new Promise((resolve => resolve(students ? JSON.parse(students) : [])));
  },
  getStudentDetails: (studentId: number): Promise<Student | undefined> => {
    return StudentsService.getStudents().then((students: Student[]) => {
      console.log(students, studentId, students[studentId]);
      return students[studentId];
    });
  },
  removeStudent: (id: number): Promise<any> => {
    return StudentsService.getStudents().then(students => {
      students.splice(id, 1);
      localStorage.setItem('students', JSON.stringify(students));
    });
  },
  updateStudent: (student: Student): Student => {
    // TODO: Implement update method
    return student;
  },
  createStudent: (student: Student): Promise<any> => {
    return StudentsService.getStudents().then(students => {
      students.push(student);
      localStorage.setItem('students', JSON.stringify(students));
    });
  }
};

export default StudentsService;
