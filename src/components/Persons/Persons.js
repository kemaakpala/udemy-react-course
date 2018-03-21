import React, {Component} from 'react'
import Person from './Person/Person'

//StateFull Component
class Persons extends Component {
	constructor(props){
		super(props)
		console.log('[Persons.js] inside constructor:', props)
		
    }
    
	//Lifecycle methods below are not called through dom events
	componentWillMount(){
		console.log('[Persons.js] Inside componentWillMount()')
	}
	
	componentDidMount(){
		console.log('[Persons.js] Inside componentDidMount(): Side-Effects can be caused here')
	  
    }
    
    componentWillUnMount(){
        console.log('[Persons.js] Inside componentWillUnMount()')
    }

    componentWillReceiveProps (nextProps){
        console.log('[Update Persons.js] Inside componentWillReceiveProps()', nextProps )
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Updated Persons.js] Inside shouldComponentUpdate()', nextProps, nextState)
        return nextProps !== this.props.persons
    }

    componentWillUpdate(nextProps, nextState){
        console.log('[Updated Persons.js] Inside componentWillUpdate()', nextProps, nextState)
    }

    componentDidUpdate(){
        console.log('[Updated Persons.js] Inside componentDidUpdate(): Side-Effects can be caused here', this.props, this.state)
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