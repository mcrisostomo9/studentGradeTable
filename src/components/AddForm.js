import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddForm extends Component {
  render(){
    return(
      <div className="form-group col-sm-3 col-sm-push-9 col-md-3 col-md-push-9  col-lg-3 col-lg-push-9">
        <h4>Add Student</h4>
        <div className="input-group form-group">
          <span className="input-group-addon">
            <span className="glyphicon glyphicon-user"></span>
          </span>
          <input type="text" className="form-control" placeholder="Student Name"/>
        </div>
        <div className="input-group form-group">
          <span className="input-group-addon">
            <span className="glyphicon glyphicon-list-alt"></span>
          </span>
          <input type="text" className="form-control" placeholder="Student Course"/>
        </div>
        <div className="input-group form-group">
          <span className="input-group-addon">
            <span className="glyphicon glyphicon-education"></span>
          </span>
          <input type="text" className="form-control" placeholder="Student Grade"/>
        </div>
        <button className="btn btn-success">Add</button>
        <button className="btn">Cancel</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{

  }
}

const mapDispatchToProps = (state) => {
  return{

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm)
