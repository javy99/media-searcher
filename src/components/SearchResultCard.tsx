import React from "react";
import { SearchResult } from "@/types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

interface SearchResultCardProps {
  result: SearchResult;
  onClick: () => void;
}

const SearchResultCard: React.FC<SearchResultCardProps> = ({
  result,
  onClick,
}) => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
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
  );
};

export default SearchResultCard;
