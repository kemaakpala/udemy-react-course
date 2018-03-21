import React, {Component} from 'react'
import classes from './App.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  constructor(props){
    super(props)
    console.log('[App.js] inside constructor:', props)
    
    // works in react versions pre react16
    this.state = {
      persons: [
        {
          id: 'asfa1',
          name: 'Max',
          age: 28
        }, {
          id: 'bsfc1',
          name: 'Manu',
          age: 29
        }, {
          id: 'dsfe1',
          name: 'Stephanie',
          age: 26
        }
      ],
      otherState: 'Some other value',
      showPersons: false
    }
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount()')
  }

  componentDidMount(){
    console.log('[App.js] Inside componentDidMount')
  }
  
  // works in react 16.2.0 &>
/*   state = {
    persons: [
      {
        id: 'asfa1',
        name: 'Max',
        age: 28
      }, {
        id: 'bsfc1',
        name: 'Manu',
        age: 29
      }, {
        id: 'dsfe1',
        name: 'Stephanie',
        age: 26
      }
    ],
    otherState: 'Some other value',
    showPersons: false
  } */

  deletePersonHandler = (personIndex) => {
    /*
      you should never mutate the original state.
      const persons = this.state.persons.slice(); is equivalent to
      persons = [...this.state.persons] as they both create a copy
      of the array and is the preferred solution.
    */

    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this
      .state
      .persons
      .findIndex(p => {
        return p.id === id;
      });

    const person = {
      ...this.state.persons[personIndex]
    };

    /*
    you can also use object assign
    const person = Object.assign({}, this.state.persons[personIndex]) */

    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({persons})
  }

  togglePersonsHandler = (arg) => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    console.log('[App.js] inside render');

    //Handling dynamic content
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed = {this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          appTitle={this.props.title} 
          showPersons={this.state.showPersons} 
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;