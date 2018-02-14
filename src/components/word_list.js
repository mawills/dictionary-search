import React from 'react';
import WordDetail from './word_detail';

const WordList = (props) => {
  const words = props.words.map( (word) => {
    return(
      <WordDetail
        key={word}
        word={word} />
    );
  });

  return(
    <ul>
      {words}
    </ul>
  );
};

export default WordList;
