import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/search_bar';
import TabList from './components/tab_list';
import WordList from './components/word_list';
import SearchHistory from './components/search_history';
import searchHistoryStorage from './getSearchHistory';

/* oxford dictionaries api info
const APP_ID = '7d64b4c4';
const API_KEY = 'a038417f5a31b680504fdad206a4e3f6';
const ROOT_URL = 'https://od-api.oxforddictionaries.com:443/api/v1';

merriam webster api info
const API_KEY = 'de082571-069a-4866-a497-fb562d003326';
const ROOT_URL = 'https://www.dictionaryapi.com/api/v1/references/collegiate/xml';*/

const ROOT_URL = 'https://my-little-cors-proxy.herokuapp.com/https://owlbot.info//api/v2/dictionary';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      words: [],
      missingWords: [],
      searchHistory: searchHistoryStorage,
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
    let parse = term.replace(/\s/g, '').split(',');
    let searchHistoryWordsArray = this.state.searchHistory;

    for(let word of parse) {
      if(word.length > 0) {
        searchHistoryWordsArray.push(word);
        this._lookupWord(word);
      }
    }
    localStorage.setItem('search-history', JSON.stringify(searchHistoryWordsArray));
  }

  _lookupWord(word) {
    const url = `${ROOT_URL}/${word}?format=json`;
    axios.get(url)
      .then((response) => {
        switch(response.status) {
          case 200:
            if(response.data.length > 0) {
              let newWordsArray = this.state.words;
              newWordsArray.push({
                word: word,
                definition: response.data[0].definition
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
