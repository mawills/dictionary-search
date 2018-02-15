import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/search_bar';
import TabList from './components/tab_list';
import WordList from './components/word_list';
import SearchHistory from './components/search_history';
import searchHistory from './getSearchHistory';

const APP_ID = '7d64b4c4';
const API_KEY = 'a038417f5a31b680504fdad206a4e3f6';
const ROOT_URL = 'https://od-api.oxforddictionaries.com/api/v1';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      words: [],
      searchHistory: searchHistory,
      isHistoryView: false
     };
   }

 _toggleHistoryView(toggle) {
    this.setState({ isHistoryView: toggle });
  }

  _parseSearchTerm(term) {
    //TODO: Trim spaces.
    let parse = term.split(',');
    var searchTermWordsArray = [];
    var searchHistoryWordsArray = this.state.searchHistory;

    for(let word of parse) {
      searchTermWordsArray.push(word);
      searchHistoryWordsArray.push(word);
    }
    this.setState({ words: searchTermWordsArray });
    localStorage.setItem('search-history', JSON.stringify(searchHistoryWordsArray));

    console.log(this.state.words);
    console.log(searchTermWordsArray);

    for(let word of searchTermWordsArray) {
      this._lookupWord(word);
    }
  }

  _lookupWord(word) {
    const url = `${ROOT_URL}/search/en/${word}`;
    const config = {
      headers: {
        'app_id': APP_ID,
        'app_key': API_KEY,
      },
      contentType: 'text/plain'
    }
    axios.get(url, config)
      .then(function (response) {
        if(response.status === 200) {
          console.log(response.headers);
          return response.results[0];
        }
        else {
          alert('Error: Recieved response ' + response.status);
        }
      });
  }

  render() {
    if(!this.state.isHistoryView) {
      return(
        <div className="App">
          <TabList toggleHistoryView={toggle => this._toggleHistoryView(toggle)} />
          <SearchBar onSearchTermChange={term => this._parseSearchTerm(term)} />
          <WordList words={this.state.words} />
        </div>
      );
    }
    else {
      return(
        <div className="App">
          <TabList toggleHistoryView={toggle => this._toggleHistoryView(toggle)} />
          <SearchHistory searchHistory={this.state.searchHistory} />
        </div>
      );
    }

  }
}

export default App;
