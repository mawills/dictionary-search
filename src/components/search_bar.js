import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange(term) {
    this.setState({term});
  }

  onSubmit(term) {
    this.props.onSearchTermChange(term);
    this.setState({ term: '' });
  }

  render() {
    return(
      <div>
        <div>
          <textarea
            value={this.state.term}
            rows='10'
            cols='50'
            onChange={event => this.onInputChange(event.target.value)}>
          </textarea>
        </div>
        <div>
          <button
            type="button"
            onClick={event => this.onSubmit(this.state.term)} >
            Submit</button>
        </div>
        <p>Enter words separated by commas.</p>
      </div>
    );
  }
}

export default SearchBar;
