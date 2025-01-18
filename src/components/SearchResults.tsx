import React from "react";
import { SearchResult } from "@/types";

interface SearchResultsProps {
  results: SearchResult[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  if (!results || results.length === 0) {
    return <p>No results found...</p>;
  }

  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-white dark:bg-black p-5">
      {results.map((result) => (
        <div
          key={`${result.trackId}-${result.collectionName}`}
          className="bg-white dark:bg-black rounded-md shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex flex-col items-center">
            <img
              src={result.artworkUrl100}
              alt={result.trackName}
              className="w-24 h-24 rounded-md mb-2"
            />
            <h3 className="font-bold text-lg text-center mb-1">
              {result.trackName}
            </h3>
            <p className="text-gray-600 text-center mb-1">
              {result.artistName}
            </p>
            <p className="text-gray-500 text-center">
              {result.primaryGenreName}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;

/*
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
*/
