import React, { Component } from 'react';
import Header from './components/Header';
import AddForm from './components/AddForm';
import StudentList from './components/StudentList';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <AddForm/>
        <StudentList/>
      </div>
    );
  }
}

export default App;
