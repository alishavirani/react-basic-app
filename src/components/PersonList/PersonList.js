import React from 'react';
import Person from './Person/person'

const PersonList = (props) => props.persons.map((person, personIndex) => {
    return (
      <Person
        click={() => {props.clicked(personIndex)}}
        name={person.name} 
        age={person.age}
        key={person.id}
        changed={(event) => {props.changed(event, person.id)}}/> 
    )
})

export default PersonList;