import React from 'react';

const WordDetail = ({word}) => {
  if(!word) {
    return <div>Loading...</div>;
  }
//<div>{word.lexicalEntries.entries.senses.definitions[0]}</div>
  return(
    <li>
      <div>{word}</div>
      <div>Definition</div>
    </li>
  );
}

export default WordDetail;
