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
    if(this.props.isHistoryView) {
      return null;
    }
    return(
      <div>
        <h3>Enter words separated by commas, then press submit to look up definitions</h3>
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
            className="btn btn-primary"
            onClick={event => this.onSubmit(this.state.term)} >
            Submit</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
