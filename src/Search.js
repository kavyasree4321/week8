import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Search() {
  const query = useQuery();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const queryParam = query.get('query');
    if (queryParam) {
      setSearchTerm(queryParam);
    }
  }, [query]);

  return (
    <div>
      <h2>Search Results</h2>
      <p>Search Term: {searchTerm}</p>
      {/* Display search results based on searchTerm */}
    </div>
  );
}

export default Search;
