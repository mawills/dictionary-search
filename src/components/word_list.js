import React from 'react';
import WordDetail from './word_detail';

const WordList = (props) => {
  if(props.isHistoryView) {
    return null;
  }
  const words = props.words.map( (word) => {
    return(
      <li className="list-group-item" key={word} ><WordDetail word={word} /></li>
    );
  });

  return(
    <div>
      <h3>Here are the results:</h3>
      <p>Found -- words, unable to find words ----, ----, ----</p>
      <ul className="list-group" >
        {words}
      </ul>
    </div>
  );
};

export default WordList;
