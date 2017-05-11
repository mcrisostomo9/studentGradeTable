import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStudent, searchStudent } from '../actions/actionCreators';

class AddForm extends Component {
  constructor(){
   super();

   this.state = {
     name: '',
     course: '',
     grade: '',
     formError: false,
     search: ''
   }
 }

 handleAddButton(){
   let { name, course, grade } = this.state;
  //  conditional to not let any info to be added unless all 3 values are filled out
   if(name && course && grade){
    this.props.handleAddStudent(name, course, grade);
    // resets the inputs after adding student
     this.setState({
       name: '',
       course: '',
       grade: '',
       formError: false
     })
   }else{
     this.setState({
       formError: true
     })
   }
 }

  // to render error message when all form inputs are not filled out
  renderError(){
    const { formError } = this.state;
    if(formError){
      return <div className="alert alert-danger">Please fill out whole form</div>
    }
    else {
      return
    }
  }

 handleCancelButton(){
   this.setState({
     name: '',
     course: '',
     grade: '',
     formError: false
   })
 }

  handleSearchButton(){
    this.props.handleSearchStudent(this.state.search);
    this.setState({
      search: ''
    })
  }

 render(){
   const styleBtn = {margin: '0px 3px'};
   return(
     <div className="form-group col-sm-3 col-sm-push-9 col-md-3 col-md-push-9  col-lg-3 col-lg-push-9">
       <h4>Add Student</h4>
       <div className="input-group form-group">
         <span className="input-group-addon">
           <span className="glyphicon glyphicon-user"></span>
         </span>
         <input type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value})} className="form-control" placeholder="Student Name"/>
       </div>

       <div className="input-group form-group">
         <span className="input-group-addon">
           <span className="glyphicon glyphicon-list-alt"></span>
         </span>
         <input type="text" value={this.state.course} onChange={e => this.setState({ course: e.target.value})} className="form-control" placeholder="Student Course"/>
       </div>

       <div className="input-group form-group">
         <span className="input-group-addon">
           <span className="glyphicon glyphicon-education"></span>
         </span>
         <input type="number" value={this.state.grade} onChange={e => this.setState({ grade: e.target.value})} className="form-control" placeholder="Student Grade"/>
       </div>

          {this.renderError()}
          <button style={styleBtn} className="btn btn-success" onClick={() => this.handleAddButton()}>Add</button>
          <button style={styleBtn} className="btn btn-default" onClick={() => this.handleCancelButton()}>Cancel</button>

          <div className="input-group form-group">
            <span className="input-group-addon">
              <span className="glyphicon glyphicon-search"></span>
            </span>
            <input type="text" value={this.state.search} onChange={e => this.setState({ search: e.target.value})} className="form-control" placeholder="search"/>
          </div>
          <button className="btn btn-primary" onClick={() => this.handleSearchButton()}>Search</button>

     </div>
   )
 }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddStudent: (name, course, grade) => dispatch(addStudent(name, course, grade)),
    handleSearchStudent: (name) => dispatch(searchStudent(name))
  }
}

export default connect(null, mapDispatchToProps)(AddForm)
