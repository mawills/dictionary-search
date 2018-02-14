import React from 'react';

const WordDetail = ({word}) => {
  if(!word) {
    return <div>Loading...</div>;
  }

  return(
    <div>
      <div>{word}</div>
      <div>Description</div>
    </div>
  );
}

export default WordDetail;
