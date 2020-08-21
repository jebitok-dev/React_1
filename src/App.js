import React, { Component } from 'react'; //enables JSX 

import { CardList } from './Components/card-list/card-list.component';

import { SearchBox } from './Components/search-box/search-box.components';

import './App.css';

//using class gives access to state 
class App extends Component {
  constructor() {
    super(); //extends

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

//JSX uses classname to distinguish
//render comes inbuilt with React.component
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        {/* <input
          type='search'
          placeholder='search monsters'
          onChange={e => this.setState({ searchField: e.target.value })}
        /> */}
        <SearchBox 
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList 
          monsters={filteredMonsters}
        />
    </div>
    );
  }
}

export default App;
