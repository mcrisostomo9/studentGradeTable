import React, { Component } from 'react';
import database from '../actions/database';
import StudentList from './StudentList';

export default class StudentListContainer extends Component {
  constructor(){
    super();
    this.state = {
      students: {},
      sortedStudents:{
        clicked: false,
        byName: []
      }
    }
  }

  componentDidMount() {
    const studentsRef = database.ref('students');
    studentsRef.on('value', snap => {
      this.setState({
        students: snap.val()
      })
    })
  }

  // TODO: adding key manually may have broken the functions
  sortName(){
    const sortArray = [];
    const nameSortRef = database.ref('students').orderByChild('lowerName');
    nameSortRef.on('value', (snap) => {
        snap.forEach( (snapshot) => {
          // since snap.val() doesnt provide the key, put the object value in the sortedStudent variable and manually added the id/key to sortedStudent
          let sortedStudent = snapshot.val();
          sortedStudent.id = snapshot.key;

          // pushed sortedStudent which now contains the id to the sort array
          sortArray.push(sortedStudent)
        })
    })
    this.setState({
      sortedStudents: {
        clicked: true,
        byName: sortArray
      }
    })
  }

  deleteStudent(key){
    console.log('key delete', key);
    const studentsRef = database.ref('students');
    studentsRef.child(key).remove();
  }

  renderStudents() {
    const { students, sortedStudents } = this.state;
    // for empty database
    if(!students){
      return <tr><td>Enter student</td></tr>
    }
    // for sorted students by name
    if(sortedStudents.clicked && sortedStudents.byName){
      return sortedStudents.byName.map(student => {
        return <StudentList key={student.id} id={student.id} name={student.name} course={student.course} grade={student.grade} deleteStudentHandler={() => this.deleteStudent(student.id)} />
      })
    }

    // for first load, render students by mapping through dynamic keys created by Firebase
    return Object.keys(students).map( key => {
      // With access to dynamic keys from firebase, inserted key into firebase Students object into const id
      const id = students[key];
      // const id gives access to the object keys
      return <StudentList key={key} id={key} name={id.name} course={id.course} grade={id.grade} deleteStudentHandler={() => this.deleteStudent(key)}/>
    })
  }
  render() {
    return (
      <div className="col-sm-9 col-sm-pull-3 col-md-9 col-md-pull-3 col-lg-9 col-lg-pull-3">
        <table className="table">
          <thead>
            <tr>
              <th><button onClick={() => this.sortName()}>BTN</button>Student Name</th>
              <th>Student Course</th>
              <th>Student Grade</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {this.renderStudents()}
          </tbody>
        </table>
      </div>
    )
  }
}
