import React from 'react';

const StudentList = (props) => {

  const deleteClick = props => {
    console.log('delete');
    props.deleteClickHandler();
  }

  return(
    <tr>
      <td>{props.name}</td>
      <td>{props.index}</td>
      <td>{props.course}</td>
      <td>{props.grade}</td>
      <td><button onClick={() => this.deleteClick()} className="btn btn-danger">Delete</button></td>
    </tr>
  )
}

export default StudentList;
