import ActionTypes from './types';
import database from './database';

export function getStudent(){
  return dispatch => {
    // dispatch(getStudentRequest());
    return database.ref('/students').once('value', snap => {
      const student = snap.val();
      console.log('action students', student);
      dispatch(getStudentFulfilled(student))
    })
    .catch((error) => {
      console.log('there was an error', error);
    })
  }
}

// function getStudentRequest(){
//   return {
//     type: ActionTypes.GET_STUDENT_REQUEST
//   }
// }

function getStudentFulfilled(student){
  return{
    type: ActionTypes.GET_STUDENT_FULFILLED,
    student: student
  }
}

export function addStudent(name, course, grade){
  return dispatch => {
    const studentRef = database.ref(`/students`);
    studentRef.push({
      name,
      course,
      grade
    })
    .then(() => {
      dispatch(addStudentFulfilled({name, course, grade}))
    })
    .catch((error) => {
      console.log('error in adding student', error);
    })
  }
}

function addStudentFulfilled(name, course, grade){
  return {
    type: ActionTypes.ADD_STUDENT,
    name: name,
    course: course,
    grade: grade
  }
}
