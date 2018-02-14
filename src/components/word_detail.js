import React from 'react';

const WordDetail = ({word}) => {
  if(!word) {
    return <div>Loading...</div>;
  }

  return(
    <div> Found x words. Couldnt find y words. </div>
  );
}

export default WordDetail;
