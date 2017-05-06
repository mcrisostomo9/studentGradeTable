import React from 'react';

const StudentList = (props) => {

  return(
    <tr>
      <td>{props.name}</td>
      {/* <td>{props.index}</td> */}
      <td>{props.course}</td>
      <td>{props.grade}</td>
      <td><button onClick={() => props.deleteStudentHandler()} className="btn btn-danger">Delete</button></td>
    </tr>
  )
}

export default StudentList;
