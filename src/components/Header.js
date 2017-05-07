import React, { Component } from 'react';
import database from '../actions/database';

export default class Header extends Component {

  constructor(){
    super();
    this.state = {
      gradeAverage: null
    }
  }

  // on mount, males call to firebase
  componentDidMount() {
    const studentsRef = database.ref('students');
    studentsRef.on('value', snap => {
        // get value of the firebase data
        const students = snap.val();
        const gradeArray = []
        // To iterate through object data received from firebase, goes through the keys of the object to map through
        if(!students){
          this.setState({
            gradeAverage: null
          })
          return
        }
        Object.keys(students).map(key => {
          const grade = parseInt(students[key].grade, 10);
          gradeArray.push(grade);
          return gradeArray
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
        <h1 className="hidden-xs hidden-sm visible-md-block visible-lg-block">Student Grade Table
          <small className="pull-right">Grade Average: <span className="label label-default">{this.state.gradeAverage}%</span></small>
        </h1>

        <h3 className="hidden-md hidden-lg">Student Grade Table
          <small className="pull-right">Grade Average:
          <span className="label label-default">{this.state.gradeAverage}%</span></small>
        </h3>
      </div>
    )
  }
}
