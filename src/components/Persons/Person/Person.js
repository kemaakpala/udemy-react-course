import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classes from './Person.css'
import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/withClass'
//StateFull Component
class Person extends Component {
	constructor(props){
		super(props)
		console.log('[Person.js] inside constructor:', props)
		
	}
	
	componentWillMount(){
		console.log('[Person.js] Inside componentWillMount()')
	}
	
	componentDidMount(){
		console.log('[Person.js] Inside componentDidMount')
		
		// this should be used for things like controlling media playback and focusing on elements and not updating components
		if(this.props.position === 0){
			this.inputElement.focus()
		}
	}
    componentWillUnMount(){
        console.log('[Person.js] Inside componentWillUnMount()')
    }
	render(){
		console.log('[Person.js] inside render()')
		return (
			<Aux>
				<p onClick={this.props.click}>I'm {this.props.name}! and I am {this.props.age} years old</p>
				<p>{this.props.children}</p>
				<input 
					ref={(inp) => { this.inputElement = inp}}
					type="text" 
					onChange={this.props.changed} 
					value={this.props.name} 
				/>
			</Aux>
		)
	}
}

// StateLess Component
/* const person = (props) => {
	return (
		
		<div className={classes.Person}>
			<p onClick={props.click}>I'm {props.name}! and I am {props.age}
                years old</p>
			<p>{props.children}</p>
			<input type="text" 
				onChange={props.changed} 
				value={props.name} 
			/>
		</div>
	)
} */

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func 
}

export default withClass(Person, classes.Person)
