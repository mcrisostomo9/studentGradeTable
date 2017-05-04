import ActionTypes from '../actions/types';

export default function studentData(state={}, action){
  switch (action.type) {
    // case ActionTypes.GET_STUDENT_REQUEST:
    //   return Object.assign({} state, {
    //     inProgress: true
    //   })
    case ActionTypes.GET_STUDENT_FULFILLED:
      // const {students} = action.students
      console.log('reducer', action.student);
      return{
        ...state,
        students: action.student
      }
    case ActionTypes.ADD_STUDENT:
      return{
        ...state,
        name: action.name,
        course: action.course,
        grade: action.grade,

      }
    default:
      return state
  }
}
