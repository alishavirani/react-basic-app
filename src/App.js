import React, { Component } from 'react';
import classes from'./App.css';
import Person from './Person/person'
import ErrorBoundary from './errorBoundary/ErrorBoundary'

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

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, personIndex) => {
            return ( <ErrorBoundary key={person.id}>
                <Person
                  click={() => {this.deletePersonHandler(personIndex)}}
                  name={person.name} 
                  age={person.age}
                  changed={(event) => {this.nameChangedHandler(event, person.id)}}
                />
              </ErrorBoundary>                
            )  
          })}
        </div>
      )
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }


    return (
      <div className={classes.App}>
        <h1>Hello React!!!</h1>
        <p className={assignedClasses.join(' ')}>Welcome to react!!!</p>
        <button className={btnClass}
          onClick={this.togglePersonsHandler}>Show/Hide Persons
        </button>         
        {persons}
      </div>
    );
  }
}

export default App;
