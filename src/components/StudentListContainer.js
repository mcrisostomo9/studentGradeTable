import React, {Component} from 'react';
import database from '../actions/database';
import StudentList from './StudentList';

export default class StudentListContainer extends Component {
  constructor(){
    super();
    this.state = {
      students: {}
    }
  }

  componentDidMount() {
    // const studentsRef = database.ref('students');
    const studentsRef = database.ref('students').orderByChild('name');
    studentsRef.on('value', snap => {
      this.setState({
        students: snap.val()
      })
    });
  }

  deleteStudent(key){
    const studentsRef = database.ref('students');
    studentsRef.child(key).remove();
  }

  renderStudents() {
    const {students} = this.state;
    if(!students){
      return <div>Enter student</div>
    }
    return Object.keys(students).map( key => {
      const id = students[key];
      return <StudentList key={key} id={key} name={id.name} course={id.course} grade={id.grade} deleteStudentHandler={() => this.deleteStudent(key)}/>
    })
  }
  render() {
    return (
      <div className="col-sm-9 col-sm-pull-3 col-md-9 col-md-pull-3 col-lg-9 col-lg-pull-3">
        <table className="table">
          <thead>
            <tr>
              <th>Student Name</th>
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
