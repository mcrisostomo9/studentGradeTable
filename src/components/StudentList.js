import React, {Component} from 'react';
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
    this.setState({edit: true})
  }

  saveStudent() {
    const {name, course, grade} = this.state;
    const studentsRef = database.ref('students');
    studentsRef.child(this.props.id).update({name, course, grade});
    this.setState({edit: false});
  }

  handleChangeFor(e, inputField){
    this.setState({ [inputField]: e.target.value })
  }

  render() {
    const {name, course, grade} = this.state;
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
        <td><input className="form-control" type="text" value={name} onChange={(e) => this.handleChangeFor(e, 'name')}/></td>
        <td><input className="form-control" type="text" value={course} onChange={(e) => this.handleChangeFor(e, 'course')}/></td>
        <td><input className="form-control" type="number" value={grade} onChange={(e) => this.handleChangeFor(e, 'grade')}/></td>
        <td className="btn-group" role="group">
          <button type="button" onClick={() => this.saveStudent()} className="btn btn-success btn-sm">Save</button>
          <button type="button" onClick={() => this.props.deleteStudentHandler()} className="btn btn-danger btn-sm">Delete</button>
        </td>
      </tr>
    )
  }

}
