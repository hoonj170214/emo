import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useDataFetcher from './useDataFetcher';

function useSearch() {
  const [searchText, setSearchText] = useState('');

  const data = useDataFetcher(searchText);
  return searchText;
}

export default useSearch;
