import React from 'react';

const WordDetail = ({word}) => {
  if(!word) {
    return <div>Loading...</div>;
  }

  return(
    <div>{word}</div>
    <div>Description</div>
  );
}

export default WordDetail;
