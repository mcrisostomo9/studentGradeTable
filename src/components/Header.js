import React, {Component} from 'react';
import database from '../actions/database';

export default class Header extends Component {
  constructor(){
    super();
    this.state = {
      gradeAverage: null
    }
  }

  componentDidMount() {
    const rootRef = database.ref();
    const studentsRef = rootRef.child('students');
    studentsRef.on('value', snap => {
        const students = snap.val();
        const gradeArray = []
        Object.keys(students).map(key => {
          const grade = parseInt(students[key].grade);
          gradeArray.push(grade)
        });
        const average = gradeArray.reduce((total, amount, index, array) => {
          total += amount;
          if( index === array.length-1){
            return total/array.length;
          }else {
            return total;
          }
        })
        this.setState({
          gradeAverage: Math.round(average)
        })
      })
  }

  render(){
    return(
      <div className="page-header">
        <h1 className="hidden-xs hidden-sm">Student Grade Table
          <small className="pull-right">Grade Average: {this.state.gradeAverage}%<span className="label label-default"></span></small>
        </h1>
        <h3 className="hidden-md hidden-lg">Student Grade Table
          <small className="pull-right">Grade Average: {this.state.gradeAverage}%
          <span className="label label-default"></span></small>
        </h3>
      </div>
    )
  }
}
