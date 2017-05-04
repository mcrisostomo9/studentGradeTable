import ActionTypes from '../actions/types';

export default function studentReducer(state={}, action){
  switch (action.type) {
    case ActionTypes.ADD_STUDENT:
      return(
        state
      );

    default:
      return state
  }
}
