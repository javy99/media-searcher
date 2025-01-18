import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import SearchComponent from "./SearchComponent";

interface SearchBarProps {
  searchItem: string;
  setSearchItem: (searchItem: string) => void;
  onSearch: (options?: {
    media?: string;
    entity?: string;
    country?: string;
    attribute?: string;
  }) => void;
  loading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchItem,
  setSearchItem,
  onSearch,
  loading,
}) => {
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);

  const handleSearch = () => {
    onSearch({
      media: "all",
      entity: undefined,
      country: "US",
      attribute: "",
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value);
  };

  const toggleAdvancedOptions = () => {
    setShowAdvancedOptions(!showAdvancedOptions);
  };

  return (
    <div className="flex flex-col gap-2 bg-white dark:bg-black p-5">
      <div className="flex flex-col sm:flex-row items-center gap-2 relative">
        <SearchIcon className="h-5 w-5 text-black dark:text-white absolute left-3 top-3.5" />
        <Input
          id="search"
          type="search"
          placeholder="Search for music, movies, podcasts..."
          value={searchItem}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="pl-12 py-6 focus:border-black dark:focus:border-white transition-all"
        />
        <div className="flex flex-row gap-2 w-full sm:w-auto">
          <Button
            onClick={handleSearch}
            disabled={loading}
            className="bg-black dark:bg-white text-white dark:text-black font-bold py-6 text-base w-full sm:w-auto"
          >
            Search
          </Button>
          <Button
            onClick={toggleAdvancedOptions}
            className="bg-black dark:bg-white text-white dark:text-black font-bold py-6 text-base w-full sm:w-auto"
          >
            {showAdvancedOptions ? "Hide Filters" : "Show Filters"}
          </Button>
        </div>
      </div>

      {showAdvancedOptions && (
        <div className="mt-2">
          <SearchComponent onSearch={onSearch} />
        </div>
      )}
    </div>
  );
};

export default SearchBar;