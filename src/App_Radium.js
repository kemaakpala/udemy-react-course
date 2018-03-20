import React, {Component} from 'react'
import './App.css'
import Radium, { StyleRoot } from 'radium'
import Person from './Person/Person'

class App extends Component {
  state = {
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
    // inline style: this is used to scope styles to make sure it only applies to a
    // single element
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    //Handling dynamic content
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this
            .state
            .persons
            .map((person, index) => {
              return (<Person
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)}/>);
            })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];

    if(this.state.persons.length <= 2){
      classes.push('red'); // classes = ['red]
    }
    
    if(this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red' , 'bold']
    }

    return (
      <StyleRoot>
      <div className="App">
        <h1>
          Hi i'm a React app
        </h1>
        <p className={classes.join(' ')}>This is really working!</p>

        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
