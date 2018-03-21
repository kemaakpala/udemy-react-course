import React, {Component} from 'react'
import Person from './Person/Person'

//StateFull Component
class Persons extends Component {
	constructor(props){
		super(props)
		console.log('[Persons.js] inside constructor:', props)
		
	}
	
	componentWillMount(){
		console.log('[Persons.js] Inside componentWillMount()')
	}
	
	componentDidMount(){
		console.log('[Persons.js] Inside componentDidMount')
	  
    }
    
    componentWillUnMount(){
        console.log('[Persons.js] Inside componentWillUnMount()')
    }
    render() {
        console.log('[Persons.js] Inside render()')
        return this.props.persons.map((person, index) => (
            <Person
                key={person.id}
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.props.changed(event, person.id)}
            />
        ))
    }
}
//StateLess Component
// const persons = (props) => (
//     props.persons.map((person, index) => (
//         <Person
//             key={person.id}
//             click={() => props.clicked(index)}
//             name={person.name}
//             age={person.age}
//             changed={(event) => props.changed(event, person.id)}
//         />
//     ))
// )

export default Persons