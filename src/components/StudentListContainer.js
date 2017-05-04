import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStudent } from '../actions/actionCreators';
import StudentList from './StudentList';

class StudentListContainer extends Component {
  componentDidMount() {
    this.props.onGetStudent();
  }
  renderStudents() {
    const {students} = this.props;
    if(!students){
      return <tr><td>Loading...</td></tr>
    }
    console.log('my students', students);
    Object.keys(students).map((key) => {
      console.log('the student', key);
      
      // return <StudentList key={key} name={name} course={course} grade={grade}/>
    })
  }
  render() {
    return (
      <div className="col-sm-9 col-sm-pull-3 col-md-9 col-md-pull-3 col-lg-9 col-lg-pull-3">
        <table className="table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Student ID</th>
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
    onGetStudent: () => dispatch(getStudent())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentListContainer)
