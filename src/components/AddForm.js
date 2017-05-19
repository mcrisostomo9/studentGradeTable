import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStudent } from '../actions/actionCreators';

class AddForm extends Component {
  constructor(){
   super();

   this.state = {
     name: '',
     course: '',
     grade: '',
     formError: false
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

 render(){
   const styleBtn = {margin: '0px 3px'};
   return(
     <div className="row">
       <div className="col s3 push-s9 ">
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

       </div>
     </div>
   )
 }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddStudent: (name, course, grade) => dispatch(addStudent(name, course, grade)),
  }
}

export default connect(null, mapDispatchToProps)(AddForm)
