import React, {Component} from 'react'
import Person from './Person/Person'

//StateFull Component
class Persons extends Component {
    render() {
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