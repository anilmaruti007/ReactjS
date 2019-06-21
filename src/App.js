import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {name:'Anil', age: 23},
      {name:'Sandeep', age: 21},
      {name: 'Advait', age: 24}
    ]
  }
  switchnameHandler = () => {
    this.setState({
      persons: [
        {name:'Anil Maruti', age: 24},
        {name:'Sandeep', age: 21},
        {name: 'Advait', age: 26}
      ]
    })
  }
  render() {
    return (
      <div className='App'>
        <h1>Welcome to React</h1>
        <p>This is working!</p>
        <button onClick={this.switchnameHandler}>Switch Name</button>
          <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
          <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchnameHandler}/>
          <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>Hobbies: Writing Poems</Person>
      </div>
    )
  }
}

export default App;
