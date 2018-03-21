import React, {PureComponent} from 'react'
import classes from './App.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
//Higher Order Component
import Aux from '../hoc/Aux' // empty wrapper tag that returns props.children
import withClass from '../hoc/withClass' // importing function / class that returns jsx
// import WithClass from '../hoc/withClass' //importing jsx tag wrapped around props.children


class App extends PureComponent {
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
      showPersons: false,
      toggleClickedCounter: 0
    }
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount()')
  }

  componentDidMount(){
    console.log('[App.js] Inside componentDidMount')
  }

  // shouldComponentUpdate(nextProps, nextState){
  //     console.log('[Updated App.js] Inside shouldComponentUpdate()', nextProps, nextState)
  //     return nextState.persons !== this.state.persons ||
  //       nextState.showPersons !== this.state.showPersons
  // }

  componentWillUpdate(nextProps, nextState){
      console.log('[Updated App.js] Inside componentWillUpdate()', nextProps, nextState)
  }

  componentDidUpdate(){
      console.log('[Updated App.js] Inside componentDidUpdate(): Side-Effects can be caused here', this.props, this.state)
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
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1 // best practise for mutating state if you rely on prevState
      }
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
      <Aux>
      <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title} 
          showPersons={this.state.showPersons} 
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </Aux>
    );
/*     return (
      <WithClass classes={classes.App}>
      <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title} 
          showPersons={this.state.showPersons} 
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </WithClass>
    ); */
  }
}

export default withClass(App, classes.App);