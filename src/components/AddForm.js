import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStudent } from '../actions/actionCreators';

class AddForm extends Component {
  constructor(){
   super();

   this.state = {
     name: '',
     course: '',
     grade: ''
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
       grade: ''
     })
   }else{
     // TODO: make a more robust message
     console.log('need more');
   }
 }

 handleCancelButton(){
   this.setState({
     name: '',
     course: '',
     grade: ''
   })
 }

 render(){
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

        <div className="btn-group">
          <button className="btn btn-success" onClick={() => this.handleAddButton()}>Add</button>
          <button className="btn btn-default" onClick={() => this.handleCancelButton()}>Cancel</button>
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
