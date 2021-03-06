import React, { Component } from 'react';
import Header from './components/Header';
import AddForm from './components/AddForm';
import StudentListContainer from './components/StudentListContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <AddForm/>
        <StudentListContainer/>
      </div>
    );
  }
}

export default App;
