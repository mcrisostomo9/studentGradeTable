import React from 'react';

const StudentList = (props) => {
  <tr>
    <td>{props.name}</td>
    <td>{props.key}</td>
    <td>{props.course}</td>
    <td>{props.grade}</td>

  </tr>
}

export default StudentList
