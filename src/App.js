import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Welcome to React</h1>
        <p>This is working!</p>
          <Person />
          <Person />
      </div>
    )
  }
}

export default App;
