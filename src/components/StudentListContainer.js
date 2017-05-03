import React, {Component} from 'react';

export default class StudentListContainer extends Component {
  render(){
    return(
      <div className="col-sm-9 col-sm-pull-3 col-md-9 col-md-pull-3 col-lg-9 col-lg-pull-3">
        <table className="table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Student ID</th>
              <th>Student Course</th>
              <th>Student Grade</th>
              <th>Operations</th>
            </tr>
          </thead>
        </table>
      </div>
    )
  }
}
