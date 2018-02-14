import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/search_bar';
import TabList from './components/tab_list';
import WordList from './components/word_list';
import SearchHistory from './components/search_history';


const APP_ID = '7d64b4c4';
const API_KEY = 'a038417f5a31b680504fdad206a4e3f6'
const ROOT_URL = 'https://od-api.oxforddictionaries.com/api/v1';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { words: [] };
  }

  parseWords(term) {
    //TODO: Trim spaces.
    var parse = [];
    parse = term.split(',');

    var wordsArray = this.state.words;
    for(let word of parse) {
      wordsArray.push(word);
    }
    this.setState({ words: wordsArray });
    console.log(this.state.words);

    for(let word of this.state.words) {
      this.lookupWord(word);
    }
  }

  lookupWord(word) {
    const url = `${ROOT_URL}/search/en/${word}`;
    const config = {
      headers: {
        'app_id': APP_ID,
        'app_key': API_KEY
        }
    }
    axios.get(url, config)
      .then(function (response) {
        if(response.status === 200) {
          console.log(response);
          return response.results[0];
        }
        else {
          alert('Error: Recieved response ' + response.status);
        }
      });
  }

  render() {
    return (
      <div className="App">
        <TabList />
        <SearchBar onSearchTermChange={term => this.parseWords(term)} />
        <WordList words={this.state.words} />
        <SearchHistory words={this.state.words} />
      </div>
    );
  }
}

export default App;
