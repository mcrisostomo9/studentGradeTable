import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStudent, deleteStudentFirebase } from '../actions/actionCreators';
import StudentList from './StudentList';

class StudentListContainer extends Component {

  componentDidMount() {
    this.props.handleGetStudent()
  }

  deleteStudent(key){
    this.props.handleDeleteStudent(key)
  }

  renderStudents() {
    const { students } = this.props;
    if(!students){
      return <tr><td>Enter student</td></tr>
    }

    // Render students by mapping through dynamic keys created by Firebase
    return Object.keys(students).map( key => {
      // With access to dynamic keys from firebase, inserted key into firebase Students object into const id
      const id = students[key];
      // const id gives access to the object keys
      return <StudentList key={key} id={key} name={id.name} course={id.course} grade={id.grade} deleteStudentHandler={() => this.deleteStudent(key)}/>
    })
  }
  render() {
    return (
      <div className="col s12 m9 pull-m3">
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

const mapStateToProps = (state) => {
  return {
    students: state.studentData.students
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetStudent: () => dispatch(getStudent()),
    handleDeleteStudent: (key) => dispatch(deleteStudentFirebase(key))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentListContainer)
