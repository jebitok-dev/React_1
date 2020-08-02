import React, { Component } from 'react'; //enables JSX 

import { CardList } from './Components/card-list/card-list.component';

 import './App.css';

//using class gives access to state 
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

//JSX uses classname to distinguish
//render comes inbuilt with React.component
  render() {
    return (
      <div className="App">
      <CardList name="Jebitok"/>
      {
        this.state.monsters.map(monster => <h1 key={monster.id}> { monster.name } </h1>)
      }
    </div>
    )
  }
}

export default App;
