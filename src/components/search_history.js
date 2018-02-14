import React, { Component } from 'react';

class SearchHistory extends Component {
  _renderWords(word) {
    return(
      <li key={word} >{word}</li>
    );
  }

  render() {
    if(!this.props.isHistoryView) {
      return null;
    }
    return(
      <div>
        <h3>Your search history: </h3>
        <ul>
          {this.props.searchHistory.map(this._renderWords)}
        </ul>
      </div>
    );
  }
}

export default SearchHistory;
