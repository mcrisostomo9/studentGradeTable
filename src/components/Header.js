import React from 'react';
import { connect } from 'react-redux';

const Header = (props) => {
    return(
      <div className="page-header">
        <h1 className="hidden-xs hidden-sm visible-md-block visible-lg-block">Student Grade Table
          <small className="pull-right">Grade Average: <span className="label label-default">{props.gradeAverage}%</span></small>
        </h1>

        <h3 className="hidden-md hidden-lg">Student Grade Table
          <small className="pull-right">Grade Average:
          <span className="label label-default">{props.gradeAverage}%</span></small>
        </h3>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    gradeAverage: state.studentData.gradeAverage
  }
}

export default connect(mapStateToProps)(Header)
