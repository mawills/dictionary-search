import React from 'react';

const WordList = (props) => {
  if(props.isHistoryView) {
    return null;
  }
  const searchHistory = props.words.map( (word) => {
    return(
      <li className="list-group-item" key={word.word} >
        <div>{word.word}</div>
        <div>{word.definition}</div>
      </li>
    );
  });

  return(
    <div>
      <h3>Here are the results:</h3>
      <p>Found -- words, unable to find words ----, ----, ----</p>
      <ul className="list-group" >
        {searchHistory}
      </ul>
    </div>
  );
};

export default WordList;
