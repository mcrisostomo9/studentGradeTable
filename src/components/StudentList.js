import React, { Component } from 'react';
import database from '../actions/database';

export default class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      name: this.props.name,
      course: this.props.course,
      grade: this.props.grade
    }
  }

  editStudent() {
    this.setState({
      edit: true
    })
  }

  saveStudent() {
    const { name, course, grade } = this.state;
    const studentsRef = database.ref('students');
    studentsRef.child(this.props.id).update({name, course, grade});
    this.setState({edit: false});
  }

  handleChangeFor(e, inputField){
    this.setState({
       [inputField]: e.target.value
     })
  }

  render() {
    const { edit, name, course, grade } = this.state;

    // when edit is false, render table data
    if (!edit) {
      return (
        <tr>
          <td>{name}</td>
          <td>{course}</td>
          <td>{grade}</td>
          <td className="btn-group" role="group">
            <button type="button" onClick={() => this.editStudent()} className="btn btn-primary btn-md"><span className="glyphicon glyphicon-pencil"></span></button>
            <button type="button" onClick={() => this.props.deleteStudentHandler()} className="btn btn-danger btn-md"><span className="glyphicon glyphicon-trash"></span></button>
          </td>
        </tr>
      )
    }

    // when edit is set to true, gives td input options to edit and save
    return (
      <tr>
        <td><input className="form-control" type="text" value={name} onChange={(e) => this.handleChangeFor(e, 'name')}/></td>
        <td><input className="form-control" type="text" value={course} onChange={(e) => this.handleChangeFor(e, 'course')}/></td>
        <td><input className="form-control" type="number" value={grade} onChange={(e) => this.handleChangeFor(e, 'grade')}/></td>
        <td className="btn-group" role="group">
          <button type="button" onClick={() => this.saveStudent()} className="btn btn-success btn-md"><span className="glyphicon glyphicon-floppy-disk"></span></button>
          <button type="button" onClick={() => this.props.deleteStudentHandler()} className="btn btn-danger btn-md"><span className="glyphicon glyphicon-trash"></span></button>
        </td>
      </tr>
    )
  }

}
