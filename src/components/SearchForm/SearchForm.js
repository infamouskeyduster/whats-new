import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return(
      <section className="search-section">
        <input placeholder="Search All Article Here"></input>
        <button>Search</button>
      </section>
    );
  }
}

export default SearchForm;
