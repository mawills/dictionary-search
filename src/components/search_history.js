import React, { Component } from 'react';

class SearchHistory extends Component {
  _renderWords(word) {
    return(
      <li className="list-group-item" key={word} >{word}</li>
    );
  }

  render() {
    return(
      <div>
        <h3>Your search history: </h3>
        <ul className="list-group" >
          {this.props.searchHistory.map(this._renderWords)}
        </ul>
      </div>
    );
  }
}

export default SearchHistory;
