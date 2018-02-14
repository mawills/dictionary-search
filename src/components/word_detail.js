import React from 'react';

const WordDetail = ({word}) => {
  if(!word) {
    return <div>Loading...</div>;
  }

  return(
    <li>
      <div>Word</div>
      <div>Definition</div>
    </li>
  );
}

export default WordDetail;
