import React, {Component} from 'react';
import Person from './Person/person'

class PersonList extends Component {
    constructor(props) {
        super(props);
        console.log("PersonList.js//Inside constructor!!!!!");
      }
    
      componentWillMount = () => {
        console.log("PersonList.js//Inside componentWillMount!!!!!");
      }
      
      componentDidMount = () => {
        console.log("PersonList.js//Inside componentDidMount!!!!!");
      }
      
    //Can use the below syntax as we are not referring to the 'this' keyword and no issues will be arised
    //   componentDidMount() {
    //     console.log("PersonList.js//Inside componentDidMount!!!!!");
    //   }

    componentWillReceiveProps(nextProps) {
        console.log("UPDATE:PersonList.js//Inside componentWillReceiveProps!!!!!", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("UPDATE:PersonList.js//Inside shouldComponentUpdate!!!!!", nextProps, nextState);
        return nextProps.person !== this.props.persons;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("UPDATE:PersonList.js//Inside componentWillUpdate!!!!!", nextProps, nextState);
    }

    componentDidUpdate() {
        console.log("UPDATE:PersonList.js//Inside componentDidUpdate!!!!!");
    }

    render () {
        console.log("PersonList.js//Inside render!!!!!");
        return this.props.persons.map((person, personIndex) => {
            return <Person
                click={() => {this.props.clicked(personIndex)}}
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={(event) => {this.props.changed(event, person.id)}}/> 
        }) 
    }
} 

export default PersonList;