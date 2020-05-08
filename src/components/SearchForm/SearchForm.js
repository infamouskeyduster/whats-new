import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  };

  updateSearchValueOnChange = (event) => {
    event.preventDefault();
    this.setState({value: event.target.value});
  };

  sendUpSearchValueOnSubmit = (event) => {
    event.preventDefault();
    this.props.filterNewsArticles(this.state.value);
  };

  render() {
    return(
      <section className="search-section">
        <form>
          <input placeholder="Search Topic For Articles!" onChange={this.updateSearchValueOnChange}></input>
          <button type="submit" onClick={this.sendUpSearchValueOnSubmit}>Search</button>
        </form>
      </section>
    );
  };
}

export default SearchForm;
