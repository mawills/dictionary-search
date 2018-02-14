import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
    return(
      <div className="search-bar">
        <textarea
          value={this.state.term}
          rows='10'
          cols='50'
          onChange={event => this.onInputChange(event.target.value)}>
        </textarea>
        <p>Enter words separated by commas.</p>
      </div>
    );
  }
}

export default SearchBar;
