import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import NewsContainer from '../NewsContainer/NewsContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local: local,
      health: health,
      science: science,
      technology: technology,
      entertainment: entertainment,
      currentlyDisplayed: local,
    }
  }

  displaySelectedNews = (newsType) => {
    this.setState({currentlyDisplayed: this.state[newsType]})
  };

  render () {
    return (
      <main className="app">
        <Menu displaySelectedNews={this.displaySelectedNews}/>
        <SearchForm />
        <NewsContainer currentlyDisplayed={this.state.currentlyDisplayed}/>
      </main>
    );
  }
}

export default App;
