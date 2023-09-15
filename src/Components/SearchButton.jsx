import React from 'react';

function SearchButton({ searchTerm, setSearchTerm }) {
  return (
    <input
      type='text'
      placeholder='장소를 검색하세요'
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    ></input>
  );
}

export default SearchButton;
