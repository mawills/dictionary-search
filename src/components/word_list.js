import React from 'react';
import WordDetail from './word_detail';

const WordList = (props) => {
  if(props.isHistoryView) {
    return null;
  }
  const words = props.words.map( (word) => {
    return(
      <li className="list-group-item" ><WordDetail key={word} word={word} /></li>
    );
  });

  return(
    <ul className="list-group" >
      {words}
    </ul>
  );
};

export default WordList;
