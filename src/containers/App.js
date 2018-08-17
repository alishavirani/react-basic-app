import React, { Component } from 'react';
import classes from'./App.css';
import PersonList from '../components/PersonList/PersonList'
import Cockpit from '../components/cockpit/Cockpit'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      persons: [
        {id:'xgfcvbhnj',name: "Alisha", age: 22},
        {id: 'cgvhbjnnm',name: "Ali", age: 22},
        {id: 'ghkjlhjkm',name: "Sha", age: 22}
      ],
      showPersons: false
    }
    console.log("App.js//Inside constructor!!!!!");
  }

  componentWillMount = () => {
    console.log("App.js//Inside componentWillMount!!!!!");
  }
  
  componentDidMount = () => {
    console.log("App.js//Inside componentDidMount!!!!!");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("UPDATE:App.js//Inside shouldComponentUpdate!!!!!", nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("UPDATE:App.js//Inside componentWillUpdate!!!!!", nextProps, nextState);
  }

  componentDidUpdate() {
    console.log("UPDATE:App.js//Inside componentDidUpdate!!!!!");
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
    console.log("App.js//Inside render!!!!");
    let persons = null;

    if (this.state.showPersons) {
      persons = <PersonList
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          title={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />     
        {persons}
      </div>
    );
  }
}

export default App;
