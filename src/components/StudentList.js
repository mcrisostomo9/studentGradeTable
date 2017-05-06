import React, {Component} from 'react';
import database from '../actions/database';

export default class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      studentInfo: {
        name: this.props.name,
        course: this.props.course,
        grade: this.props.grade
      }

    }
  }

  editStudent() {
    this.setState({edit: true})
  }

  saveStudent() {
    const {name, course, grade} = this.state.studentInfo;
    const studentsRef = database.ref().child('students');
    studentsRef.child(this.props.id).update({name, course, grade});
    this.setState({edit: false});
  }

  changeName = (e) => {
    const { studentInfo } = this.state;
    const newStudentInfo = {
      ...studentInfo,
      name: e.target.value
    };

    this.setState({studentInfo: newStudentInfo});
  }

  changeCourse = (e) => {
    console.log('default', e);
    const { studentInfo } = this.state;
    const newStudentInfo = {
      ...studentInfo,
      course: e.target.value
    };
    this.setState({studentInfo: newStudentInfo});
  }

  changeGrade = (e) => {
    const { studentInfo } = this.state;
    const newStudentInfo = {
      ...studentInfo,
      grade: e.target.value
    };
    this.setState({studentInfo: newStudentInfo});
  }

  render() {
    const {name, course, grade} = this.state.studentInfo;
    if (!this.state.edit) {
      return (
        <tr>
          <td>{name}</td>
          <td>{course}</td>
          <td>{grade}</td>
          <td className="btn-group" role="group">
            <button type="button" onClick={() => this.editStudent()} className="btn btn-primary btn-sm">Edit</button>
            <button type="button" onClick={() => this.props.deleteStudentHandler()} className="btn btn-danger btn-sm">Delete</button>
          </td>
        </tr>
      )
    }
    return (
      <tr>
        <td><input className="form-control" type="text" value={name} onChange={this.changeName}/></td>
        <td><input className="form-control" type="text" value={course} onChange={this.changeCourse}/></td>
        <td><input className="form-control" type="number" value={grade} onChange={this.changeGrade}/></td>
        <td className="btn-group" role="group">
          <button type="button" onClick={() => this.saveStudent()} className="btn btn-success btn-sm">Save</button>
          <button type="button" onClick={() => this.props.deleteStudentHandler()} className="btn btn-danger btn-sm">Delete</button>
        </td>
      </tr>
    )
  }

}
