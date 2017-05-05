import React from 'react';

const StudentList = (props) => {
  return(
    <tr>
      <td>{props.name}</td>
      <td>{props.index}</td>
      <td>{props.course}</td>
      <td>{props.grade}</td>
    </tr>
  )
}

export default StudentList;
