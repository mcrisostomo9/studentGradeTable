import ActionTypes from '../actions/types';


export function studentData(state={}, action){
  switch (action.type){
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
    case ActionTypes.SEARCH_STUDENT:
      return{
        ...state,
        search: action.payload
      }
    default:
      return state
  }
}
