import React, {Component} from 'react'
import classes from './Person.css'
import WithClass from '../../../hoc/withClass'
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
	  
	}
    componentWillUnMount(){
        console.log('[Person.js] Inside componentWillUnMount()')
    }
	render(){
		console.log('[Person.js] inside render()')
		return (
			<WithClass classes={classes.Person}>
				<p onClick={this.props.click}>I'm {this.props.name}! and I am {this.props.age}
					years old</p>
				<p>{this.props.children}</p>
				<input type="text" 
					onChange={this.props.changed} 
					value={this.props.name} 
				/>
			</WithClass>
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

export default Person
