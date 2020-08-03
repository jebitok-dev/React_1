import React, { Component } from 'react'; //enables JSX 

import { CardList } from './Components/card-list/card-list.component';

import { SearchBox } from './Components/search-box/search-box.components';

import './App.css';

//using class gives access to state 
class App extends Component {
  constructor() {
    super();

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

//JSX uses classname to distinguish
//render comes inbuilt with React.component
  render() {
    const { monsters, searchField } = this.state;
    return (
      <div className="App">
        <input
          type='search'
          placeholder='search monsters'
          onChange={e => this.setState({ searchField: e.target.value })}
        />
        <SearchBox 
          placeholder='search monsters'
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={this.state.monsters}/>
    </div>
    );
  }
}

export default App;
