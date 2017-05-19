import React from 'react';
import { connect } from 'react-redux';

const Header = (props) => {
    return(
      <div className="page-header">
        <h1 className="hide-on-small-only visible-md-block visible-lg-block ">Student Grade Table
          <small className="right">Grade Averages: <span className="white-text card-panel teal">{`${props.gradeAverage}%`}</span></small>
        </h1>

        <h3 className="hide-on-med-and-up ">Student Grade Table
          <small className="right">Grade Average:
          <span className="white-text card-panel teal">{props.gradeAverage}%</span></small>
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
