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
      filteredResult: [],
    }
  };

  displaySelectedNews = (newsType) => {
    this.setState({filteredResult: []});
    this.setState({currentlyDisplayed: this.state[newsType]});
  };

  filterNewsArticles = (inputValue) => {
    if (inputValue.length > 0) {
      let foundNewsArticle = this.state.currentlyDisplayed.filter(newsArticle => {
        let capitalizedHeadline = newsArticle.headline.toUpperCase();
        let capitalizedSearchValue = inputValue.toUpperCase();
        if (capitalizedHeadline.includes(capitalizedSearchValue)) {
          return newsArticle;
        }
      });
      this.setState({filteredResult: foundNewsArticle});
      
    } else if (inputValue.length === 0) {
      this.setState({filteredResult: []});
    }
  };

  render () {
    return (
      <main className="app">
        <Menu displaySelectedNews={this.displaySelectedNews}/>
        <SearchForm filterNewsArticles={this.filterNewsArticles}/>
        <NewsContainer currentlyDisplayed={this.state.currentlyDisplayed} filteredResult={this.state.filteredResult}/>
      </main>
    );
  };
}

export default App;
