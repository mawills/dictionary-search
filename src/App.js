import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search_bar';
import TabList from './components/tab_list';
import WordList from './components/word_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { words: [] };
  }

  lookupWords(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="App">
        <TabList />
        <SearchBar onSearchTermChange={term => this.lookupWords(term)} />
        <WordList />
      </div>
    );
  }
}

export default App;
