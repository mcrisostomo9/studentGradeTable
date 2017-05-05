import React from 'react';

const StudentList = (props) => {
  const handleDelete = props => {
    console.log(event);
    props.deleteClickHandler
  }
  return(
    <tr>
      <td>{props.name}</td>
      <td>{props.index}</td>
      <td>{props.course}</td>
      <td>{props.grade}</td>
      <td><button onClick={() => this.handleDelete()} className="btn btn-danger">Delete</button></td>
    </tr>
  )
}

export default StudentList;
