import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveStudent } from '../actions/actionCreators';

class StudentList extends Component {
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
    // conditional to check if all inputs have been filled
    if(name && course && grade){
      const { id } = this.props;
      this.props.handleSaveStudent(name, course, grade, id);
      this.setState({
        edit: false
      });
    }
  }

  // handle input changes for all three input fields
  handleChangeFor(e, inputField){
    this.setState({
       [inputField]: e.target.value
      })
  }

  render() {
    const styleBtn = {margin: '0px 3px'};
    const { edit, name, course, grade } = this.state;
    // when edit is false, render table data
    if (!edit) {
      return (
        <tr>
          <td>{name}</td>
          <td>{course}</td>
          <td>{grade}</td>
          <td>
            <button style={styleBtn} type="button" onClick={() => this.editStudent()} className="btn btn-primary btn-md"><span className="glyphicon glyphicon-pencil"></span></button>
            <button style={styleBtn} type="button" onClick={() => this.props.deleteStudentHandler()} className="btn btn-danger btn-md"><span className="glyphicon glyphicon-trash"></span></button>
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
        <td>
          <button style={styleBtn} type="button" onClick={() => this.saveStudent()} className="btn btn-success btn-md"><span className="glyphicon glyphicon-floppy-disk"></span></button>
          <button style={styleBtn} type="button" onClick={() => this.props.deleteStudentHandler()} className="btn btn-danger btn-md"><span className="glyphicon glyphicon-trash"></span></button>
        </td>
      </tr>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSaveStudent: (name, course, grade, id) => dispatch(saveStudent(name, course, grade, id))
  }
}

export default connect(null, mapDispatchToProps)(StudentList)
