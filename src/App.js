import React, { Component } from 'react';
import './App.css';
import Person from './Person/person'

class App extends Component {

  state = {
    persons: [
      {id:'xgfcvbhnj',name: "Alisha", age: 22},
      {id: 'cgvhbjnnm',name: "Ali", age: 22},
      {id: 'ghkjlhjkm',name: "Sha", age: 22}
    ],
    showPersons: false
  }

  nameChangedHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === personId;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }


  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '18px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, personIndex) => {
            return (
              <Person
                click={() => {this.deletePersonHandler(personIndex)}}
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={(event) => {this.nameChangedHandler(event, person.id)}}/> 
            )  
          })}
        </div>
      )
      style.backgroundColor = 'red';
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }


    return (
      <div className="App">
        <h1>Hello React!!!</h1>
        <p className={classes.join(' ')}>Welcome to react!!!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Show/Hide Persons
        </button>         
        {persons}
      </div>
    );
  }
}

export default App;
