import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classes from './Person.css'
import withClass from '../../../hoc/withClass'

class Person extends Component {
    constructor(props) {
        super(props);
        console.log("Person.js//Inside constructor!!!!!");
      }
    
      componentWillMount = () => {
        console.log("Person.js//Inside componentWillMount!!!!!");
      }
      
      componentDidMount = () => {
        console.log("Person.js//Inside componentDidMount!!!!!");
      }
    render() {
        console.log("Person.js//Inside render!!!!!")
        return (
        <React.Fragment>
            <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed}></input>
        </React.Fragment>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person,classes.Person);