import React from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { formatDuration, formatDate } from "@/utils/formatUtils";
import { SearchResult } from "@/types";

interface ItemDetailProps {
  item: SearchResult;
  closeModal: () => void;
}

const ItemDetail: React.FC<ItemDetailProps> = ({ item, closeModal }) => {
  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
      onClick={closeModal}
    >
      <div
        className="bg-white dark:bg-black p-6 rounded-lg w-3/4 max-w-lg overflow-y-auto dark:border dark:border-gray-600"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            {item.trackName || item.collectionName}
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
              src={item.artworkUrl100}
              alt={item.trackName || item.collectionName}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="mb-6">
          <p className="text-base font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Artist:{" "}
            <span className="font-normal text-gray-600 dark:text-gray-300">
              {item.artistName}
            </span>
          </p>
          <p className="text-base font-semibold text-gray-600 dark:text-gray-300 mb-2">
            Genre:{" "}
            <span className="text-gray-500 dark:text-gray-400 font-normal">
              {item.primaryGenreName}
            </span>
          </p>
          {item.collectionName && (
            <p className="text-base font-semibold text-gray-600 dark:text-gray-300 mb-2">
              Collection:{" "}
              <span className="text-gray-500 dark:text-gray-400 font-normal">
                {item.collectionName}
              </span>
            </p>
          )}
          <p className="text-base font-semibold text-gray-600 dark:text-gray-300 mb-2">
            Explicit:{" "}
            <span className="text-gray-500 dark:text-gray-400 font-normal">
              {item.trackExplicitness === "notExplicit" ? "No" : "Yes"}
            </span>
          </p>
          {item.trackPrice && (
            <p className="text-base font-semibold text-gray-600 dark:text-gray-300 mb-2">
              Price:{" "}
              <span className="text-gray-500 dark:text-gray-400 font-normal">
                {item.trackPrice
                  ? `${item.currency} ${item.trackPrice}`
                  : "Free"}
              </span>
            </p>
          )}

          <p className="text-base font-semibold text-gray-600 dark:text-gray-300 mb-2">
            Duration:{" "}
            <span className="text-gray-500 dark:text-gray-400 font-normal">
              {formatDuration(item.trackTimeMillis)}
            </span>
          </p>
          {item.releaseDate && (
            <p className="text-base font-semibold text-gray-600 dark:text-gray-300 mb-2">
              Release Date:{" "}
              <span className="text-gray-500 dark:text-gray-400 font-normal">
                {formatDate(item.releaseDate)}
              </span>
            </p>
          )}
        </div>

        <div className="mt-4 border-t pt-4 border-gray-200 dark:border-gray-700">
          <a
            href={item.trackViewUrl}
            className="text-blue-500 hover:underline block mb-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Item on Store
          </a>
          {item.previewUrl && (
            <audio controls className="mt-4 w-full" src={item.previewUrl}>
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
