import React,{ Component } from 'react';
import database from '../actions/database';

export default class StudentList extends Component{
  constructor(props){
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

  editStudent(){
    this.setState({
      edit: true
    })
  }

  cancelEdit(){
    this.setState({
      edit: false
    })
  }

  saveStudent(){
    const { name, course, grade } = this.state.studentInfo;
    const studentsRef = database.ref().child('students');
    studentsRef.child(this.props.id).update({
      name,
      course,
      grade
    });
    this.setState({
      edit: false
    });
  }

  // handleChange(propertyName, e){
  //   const { studentInfo } = this.state;
  //   const newStudentInfo = {
  //     ...studentInfo,
  //     {propertyName}: e.target.value;
  //   }
  //   this.setState({
  //     studentInfo: newStudentInfo
  //   })
  // }

  render(){
    const { name, course, grade } = this.state.studentInfo;
    if(!this.state.edit){
        return(
          <tr>
            <td>{name}</td>
            <td>{course}</td>
            <td>{grade}</td>
            <td>
                <button onClick={() => this.editStudent()} className="btn btn-primary btn-sm">Edit</button>
                <button onClick={() => this.props.deleteStudentHandler()} className="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        )
    }
      return(
        <tr>
          <td><input className="form-control" type="text" value={name} onChange={this.handleChange('name')}/></td>
          <td><input className="form-control" type="text" value={course} onChange={this.handleChange('course')}/></td>
          <td><input className="form-control" type="number" value={grade} onChange={this.handleChange('grade')}/></td>
          <td>
              <button onClick={() => this.cancelEdit()} className="btn btn-sm">Cancel</button>
              <button onClick={() => this.saveStudent()} className="btn btn-success btn-sm">Save</button>
          </td>
        </tr>
      )
  }

}
