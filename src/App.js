import React, { Component } from 'react'; //enables JSX 
import logo from './logo.svg';
import './App.css';

//using class gives access to state 
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'asc1'
        },
        {
          name: 'Dracula',
          id: 'asc2'
        },
        {
          name: 'Zombie',
          id: 'asc3'
        }
      ]
    }
  }

//JSX uses classname to dis
  render() {
    return (
      <div className="App">
      {
        this.state.monsters.map(monster => <h1 key={monster.id}> { monster.name } </h1>)
      }
    </div>
    )
  }
}

export default App;
