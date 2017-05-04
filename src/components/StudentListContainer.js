import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStudent } from '../actions/actionCreators'

class StudentListContainer extends Component {
  componentDidMount() {
  this.props.onGetStudent();
}
  // renderStudents(){
  //
  // }
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
        {/* {this.renderStudents()} */}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return{

  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onGetStudent: () => dispatch(getStudent())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentListContainer)
