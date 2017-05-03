import React, {Component} from 'react';

export default class Header extends Component {
  render(){
    return(
      <div className="page-header">
        <h1 className="hidden-xs hidden-sm">Student Grade Table
          <small className="pull-right">Grade Average: <span className="label label-default"></span></small>
        </h1>
        <h3 className="hidden-md hidden-lg">Student Grade Table
          <small className="pull-right">Grade Average:
          <span className="label label-default"></span></small>
        </h3>
      </div>
    )
  }
}
