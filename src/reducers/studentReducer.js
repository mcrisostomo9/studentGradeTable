import ActionTypes from '../actions/types';

export default function studentData(state={}, action){
  switch (action.type) {
    case ActionTypes.GET_STUDENT:

      return{
        ...state,
        students: action.payload,
      }
    case ActionTypes.GET_GRADE_AVERAGE:
      return{
        ...state,
        gradeAverage: action.payload
      }
    default:
      return state
  }
}
