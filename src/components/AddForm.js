import React, { Component } from 'react';
import database from '../actions/database';

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
   const { name, course, grade } = this.state;

  //  since firebase is case sensitive when sorting, storing lower case values of the name and course
   const lowerName = name.toLowerCase();
   const lowerCourse = course.toLowerCase();

  //  conditional to not let any info to be added unless all 3 values are filled out
   if(name && course && grade){
    //  firebase reference to add students to the database
    const studentsRef = database.ref('students');
    studentsRef.push({
      name,
      lowerName,
      course,
      lowerCourse,
      grade
    })
    // resets the inputs after adding student
     this.setState({
       name: '',
       course: '',
       grade: ''
     })
   }else{
     // TODO: make a need more info message
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

export default AddForm
