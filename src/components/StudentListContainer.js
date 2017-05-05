import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStudent } from '../actions/actionCreators';
import StudentList from './StudentList';

class StudentListContainer extends Component {
  componentDidMount() {
    this.props.onGetStudent();
  }
  // componentWillReceiveProps(nextProps){
  //   // let { students } = this.props;
  //   // if(students === nextProps.students){
  //   //   return false;
  //   // }
  //   // this.props.onGetStudent()
  //   // this.props.onGetStudent()
  //   console.log('the next props', nextProps.students);
  // }
  renderStudents() {
    const {students} = this.props;
    if(!students){
      return <tr><td>Loading...</td></tr>
    }
    console.log('the students', students);
    let key = Object.keys(students);
    let id;
    for(id in students){
      console.log('the id in students', students[id].grade);
      // return <StudentList key={key} name={students[id].name} course={students[id].course} grade={students[id].grade}/>
    }
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
