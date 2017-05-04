import { combineReducers } from 'redux';
import { addStudent } from './addStudent';

const rootReducer = combineReducers({
  addStudent: addStudent
});

export default rootReducer;
