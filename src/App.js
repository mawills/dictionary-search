import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/search_bar';
import TabList from './components/tab_list';
import WordList from './components/word_list';
import SearchHistory from './components/search_history';
import searchHistory from './getSearchHistory';
import $ from 'jquery';

/* oxford dictionaries api info
const APP_ID = '7d64b4c4';
const API_KEY = 'a038417f5a31b680504fdad206a4e3f6';
const ROOT_URL = 'https://od-api.oxforddictionaries.com:443/api/v1';*/

const API_KEY = 'de082571-069a-4866-a497-fb562d003326';
const ROOT_URL = 'https://www.dictionaryapi.com/api/v1/references/collegiate/xml';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      words: [],
      missingWords: [],
      searchHistory: searchHistory,
      isHistoryView: false
     };
   }

 _toggleHistoryView(toggle) {
    this.setState({ isHistoryView: toggle });
  }

  _parseSearchTerm(term) {
    this.setState({
      words: [],
      missingWords: []
    });
    //TODO: Trim spaces.
    let parse = term.split(',');
    let searchHistoryWordsArray = this.state.searchHistory;

    for(let word of parse) {
      searchHistoryWordsArray.push(word);
      this._lookupWord(word);
    }
    localStorage.setItem('search-history', JSON.stringify(searchHistoryWordsArray));
  }

  _lookupWord(word) {
    if(word.length > 0) {
      const url = `${ROOT_URL}/${word}?key=${API_KEY}`;
      axios.get(url)
        .then((response) => {
          switch(response.status) {
            case 200:
              if($(response.data).find("dt").html()) {
                let newWordsArray = this.state.words;
                newWordsArray.push({
                  word: word,
                  definition: $(response.data).find("dt").html()
                });
                this.setState({ words: newWordsArray });
              }
              else {
                this.setState({ missingWords: this.state.missingWords.concat(word) });
              }
              break;
            default:
              alert('Error: Recieved response ' + response.status);
          }
        });
    }
  }

  render() {
    return(
      <div className="App">
        <TabList
          toggleHistoryView={toggle => this._toggleHistoryView(toggle)} />
        <SearchBar
          onSearchTermChange={term => this._parseSearchTerm(term)}
          isHistoryView={this.state.isHistoryView} />
        <WordList
          words={this.state.words}
          missingWords={this.state.missingWords}
          isHistoryView={this.state.isHistoryView} />
        <SearchHistory
          searchHistory={this.state.searchHistory}
          isHistoryView={this.state.isHistoryView} />
      </div>
    );
  }
}

export default App;
