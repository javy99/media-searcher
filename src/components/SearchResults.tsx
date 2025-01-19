import React, { useState } from "react";
import { SearchResult } from "@/types";
import { Search } from "lucide-react";
import SearchResultCard from "./SearchResultCard";
import ItemDetail from "./ItemDetail";

interface SearchResultsProps {
  results: SearchResult[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  const [selectedTrack, setSelectedTrack] = useState<SearchResult | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (result: SearchResult) => {
    setSelectedTrack(result);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTrack(null);
    setIsModalOpen(false);
  };

  if (!results || results.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center m-5 p-10 text-center bg-white dark:bg-black rounded-md border border-gray-200 dark:border-gray-500">
        <Search className="text-4xl text-gray-500 dark:text-gray-300 mb-4" />{" "}
        {/* Search icon */}
        <p className="text-xl font-semibold text-gray-600 dark:text-gray-300">
          No results found...
        </p>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Try adjusting your search or filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-white dark:bg-black p-5">
      {results.map((result) => (
        <SearchResultCard
          key={result.trackId || result.collectionId}
          result={result}
          onClick={() => openModal(result)}
        />
      ))}

      {/* Modal for displaying detailed information */}
      {isModalOpen && selectedTrack && (
        <ItemDetail item={selectedTrack} closeModal={closeModal} />
      )}
    </div>
  );
};

export default SearchResults;
