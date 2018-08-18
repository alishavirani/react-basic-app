import React from 'react';
import classes from './Cockpit.css'

const Cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = classes.Button;
    
    if(props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }    
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    
    return (
        <React.Fragment>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>Welcome to react!!!</p>
     
            <button className={btnClass}
            onClick={props.clicked}>Show/Hide Persons
            </button>
        </React.Fragment>
    )
}

export default Cockpit 