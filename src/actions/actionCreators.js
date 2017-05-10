import ActionTypes from './types';
import database from './database';

export function getStudent(){
  return dispatch => {
    // retrieves data from firebase
    return database.ref('/students').on('value', snap => {
      const students = snap.val();
      dispatch(getStudentFulfilled(students));
      dispatch(getGradeAverage(students))
    })
  }
}

function getStudentFulfilled(students){
  return{
    type: ActionTypes.GET_STUDENT,
    payload: students
  }
}

// function for calculating grade average, takes data from firebase
function getGradeAverage(students){
  const gradeArray = [];
  const grades = students;
  if(grades){
    Object.keys(grades).map(key => {
      const grade = parseInt(grades[key].grade, 10);
      gradeArray.push(grade);
      return gradeArray
    })
    const average = gradeArray.reduce((total, amount, index, array) => {
      total += amount;
      if( index === array.length-1){
        return total/array.length;
      }else {
        return total;
      }
    })
    const gradeAverage = Math.round(average);
    return{
      type: ActionTypes.GET_GRADE_AVERAGE,
      payload: gradeAverage
    }
  }
  // to set state to zero when there are no grades to take avg
  return{
    type: ActionTypes.GET_GRADE_AVERAGE,
    payload: ''
  }
}

export function deleteStudentFirebase(key){
  return dispatch => {
    return database.ref('students').child(key).remove()
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
  }
}

export function saveStudent(name, course, grade, id){
  return dispatch => {
    database.ref('students').child(id).update({
      name,
      course,
      grade
    })
  }

}
