import React from 'react';

//TODO: Store in local
const SearchHistory = (props) => {
  const words = props.words.map( (word) => {
    return(
      <li>{word}</li>
    );
  });

  return(
    <ul>
      {words}
    </ul>
  );
};

export default SearchHistory;
