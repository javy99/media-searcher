import { SearchResult } from '@/types';
import React from 'react'

interface SearchResultsProps {
  results: SearchResult[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  if (!results || results.length === 0) {
    return <p>No results found...</p>
  }

  return (
    <div className="mt-4">
      {results.map((result) => (
        <div key={`${result.trackId}-${result.collectionName}`} className="border p-2 mb-2 rounded-md">
          <div className="flex gap-2 items-center">
            <img
              src={result.artworkUrl100}
              alt={result.trackName}
              className="w-16 h-16 rounded"
            />
            <div>
              <p className="font-bold">{result.trackName}</p>
              <p className="text-gray-600">{result.artistName}</p>
              <p className="text-gray-600">{result.primaryGenreName}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults