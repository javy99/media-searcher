import React, { useState } from "react";
import { SearchResult } from "@/types";
import { Search, X } from "lucide-react";
import { CardContent, CardHeader, CardTitle, CardDescription, Card, CardFooter } from "@/components/ui/card";
import { Button } from "./ui/button";


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

  const formatDuration = (millis: number): string => {
    const totalSeconds = Math.floor(millis / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}m ${seconds}s`;
  };

  const formatDate = (dateString: string): string => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (error) {
      console.error(error);
      return "Invalid Date";
    }
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
        <div
          key={`${result.trackId}-${result.collectionName}`}
          className="cursor-pointer"
          onClick={() => openModal(result)}
        >
          <Card className="bg-white dark:bg-black rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            <CardContent className="flex flex-col items-center p-4">
              <div className="relative w-32 h-32 mb-4 mx-auto rounded-md overflow-hidden">
                <img
                  src={result.artworkUrl100}
                  alt={result.trackName}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader className="text-center p-0 mb-2">
                <CardTitle className="text-base font-medium truncate">
                  {result.trackName}
                </CardTitle>
                <CardDescription className="text-sm truncate">
                  {result.artistName}
                </CardDescription>
              </CardHeader>
            </CardContent>
            <CardFooter className="flex justify-between items-center px-6 py-4 mt-auto">
              <span className="text-base text-gray-500 dark:text-gray-400">
                {result.primaryGenreName}
              </span>
              <span className="ml-2 text-base text-gray-500 dark:text-gray-400">
                {result.trackPrice
                  ? `${result.currency} ${result.trackPrice}`
                  : "Free"}
              </span>
            </CardFooter>
            <div className="py-4 px-6 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-600">
              <p>
                <strong>Media Type:</strong> {result.kind}
              </p>
              <p>
                <strong>Entity:</strong> {result.wrapperType}
              </p>
              <p>
                <strong>Country:</strong> {result.country}
              </p>
            </div>
          </Card>
        </div>
      ))}

      {/* Modal for displaying detailed information */}
      {isModalOpen && selectedTrack && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-black p-6 rounded-lg w-3/4 max-w-lg overflow-y-auto dark:border dark:border-gray-600">
            <div className="flex justify-between items-center mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                {selectedTrack.trackName}
              </h2>
              <Button
                onClick={closeModal}
                className="bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 transition-colors shadow-none duration-200"
              >
                <X className="!w-6 !h-6" />
              </Button>
            </div>
            <div className="flex flex-col items-center mb-6">
              <div className="relative w-36 h-36 mb-4 mx-auto rounded-md overflow-hidden">
                <img
                  src={selectedTrack.artworkUrl100}
                  alt={selectedTrack.trackName}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="mb-6">
              <p className="text-base font-semibold text-gray-700 dark:text-gray-200 mb-2">
                Artist:{" "}
                <span className="font-normal text-gray-600 dark:text-gray-300">
                  {selectedTrack.artistName}
                </span>
              </p>
              <p className="text-base font-semibold text-gray-600 dark:text-gray-300 mb-2">
                Genre:{" "}
                <span className="text-gray-500 dark:text-gray-400 font-normal">
                  {selectedTrack.primaryGenreName}
                </span>
              </p>
              {selectedTrack.collectionName && (
                <p className="text-base font-semibold text-gray-600 dark:text-gray-300 mb-2">
                  Collection:{" "}
                  <span className="text-gray-500 dark:text-gray-400 font-normal">
                    {selectedTrack.collectionName}
                  </span>
                </p>
              )}
              <p className="text-base font-semibold text-gray-600 dark:text-gray-300 mb-2">
                Explicit:{" "}
                <span className="text-gray-500 dark:text-gray-400 font-normal">
                  {selectedTrack.trackExplicitness === "notExplicit"
                    ? "No"
                    : "Yes"}
                </span>
              </p>
              {selectedTrack.trackPrice && (
                <p className="text-base font-semibold text-gray-600 dark:text-gray-300 mb-2">
                  Price:{" "}
                  <span className="text-gray-500 dark:text-gray-400 font-normal">
                    {selectedTrack.trackPrice
                      ? `${selectedTrack.currency} ${selectedTrack.trackPrice}`
                      : "Free"}
                  </span>
                </p>
              )}

              <p className="text-base font-semibold text-gray-600 dark:text-gray-300 mb-2">
                Duration:{" "}
                <span className="text-gray-500 dark:text-gray-400 font-normal">
                  {" "}
                  {formatDuration(selectedTrack.trackTimeMillis)}
                </span>
              </p>
              {selectedTrack.releaseDate && (
                <p className="text-base font-semibold text-gray-600 dark:text-gray-300 mb-2">
                  Release Date:{" "}
                  <span className="text-gray-500 dark:text-gray-400 font-normal">
                    {formatDate(selectedTrack.releaseDate)}
                  </span>
                </p>
              )}
            </div>

            <div className="mt-4 border-t pt-4 border-gray-200 dark:border-gray-700">
              <a
                href={selectedTrack.trackViewUrl}
                className="text-blue-500 hover:underline block mb-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Track on iTunes Store
              </a>
              {selectedTrack.previewUrl && (
                <audio
                  controls
                  className="mt-4 w-full"
                  src={selectedTrack.previewUrl}
                >
                  Your browser does not support the audio element.
                </audio>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
