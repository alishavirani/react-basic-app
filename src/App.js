import React, { Component } from 'react';
import './App.css';
import Person from './Person/person'

class App extends Component {

  state = {
    persons: [
      {name: "Alisha", age: 22},
      {name: "Ali", age: 22},
      {name: "Sha", age: 22}
    ]
  }

  switchNameHandler = (newName) => {
    //DONT DO THIS this.state.persons[0].name = "Alisha Virani"

    this.setState({persons: [
      {name: newName, age: 22},
      {name: "Alisha", age: 22},
      {name: "Virani", age: 22}
    ]})
  }

  changeNameHandler = (event) => {
    //DONT DO THIS this.state.persons[0].name = "Alisha Virani"

    this.setState({persons: [
      {name: "Alisha Virani", age: 22},
      {name: event.target.value, age: 22},
      {name: "Virani", age: 22}
    ]})
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '18px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hello React!!!</h1>
        <button
          style={style}
          onClick={() => this.switchNameHandler("ABC")}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "PQR")}
          changed={this.changeNameHandler}
          >Hobbies: Coming from props.children</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
