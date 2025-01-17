import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MediaType, mediaTypeAttributes, mediaTypeEntities, urlParams } from "@/data";
import { SearchOptions } from "@/services/iTunesApi";

interface SearchBarProps {
  searchItem: string;
  setSearchItem: (searchItem: string) => void;
  // onSearch: (url: string) => void;
  onSearch: (options?: Omit<SearchOptions, "term">) => void;
  loading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchItem,
  setSearchItem,
  onSearch,
  loading,
}) => {
  const [media, setMedia] = useState<MediaType>("all");
  const [entity, setEntity] = useState<string | undefined>(undefined);
  const [country, setCountry] = useState<string>("US");
  const [attribute, setAttribute] = useState<string>("");

  useEffect(() => {
    setEntity(undefined);
  }, [media]);

  /*
  const handleSearch = () => {
    // Dynamically construct the search URL
    const url = new URL("https://itunes.apple.com/search");

    // Add URL parameters based on the selected values
    url.searchParams.set("term", encodeURIComponent(searchItem));
    url.searchParams.set("country", country); // Selected country code
    url.searchParams.set("media", media || "all"); // Default to 'all' if media is undefined
    url.searchParams.set("entity", entity || "all"); // Default to 'all' if entity is undefined
    url.searchParams.set("attribute", attribute); // Optionally add an attribute selection if needed
    url.searchParams.set("limit", "25"); // Default limit of 25
    url.searchParams.set("explicit", "Yes"); // Explicit content flag
    url.searchParams.set("lang", "en_us"); // Language (default 'en_us')

    console.log(url.toString());

    // Call the onSearch function with the constructed URL
    onSearch(url.toString());
  };
  */

  const handleSearch = () => {
    onSearch({
      country,
      media,
      entity,
      attribute,
      limit: 25,
      explicit: "Yes",
      lang: "en_us",
    });
  };


  const renderEntityOptions = (mediaType: MediaType) => {
    const entities = mediaTypeEntities[mediaType];
    return entities
      ? entities.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))
      : null;
  };

  const renderAttributeOptions = (mediaType: MediaType) => {
    // Check if there are attributes for the selected media type
    const attributes = mediaTypeAttributes[mediaType];

    return attributes
      ? attributes.map((attributeOption: string) => (
          <option key={attributeOption} value={attributeOption}>
            {attributeOption}
          </option>
        ))
      : null;
  };


  return (
    <div className="flex items-center gap-2">
      <Label htmlFor="search">Search</Label>
      <Input
        id="search"
        type="search"
        placeholder="Search here..."
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />

      {/* Country Select */}
      <div>
        <Label htmlFor="country">Country</Label>
        <select
          id="country"
          name="country"
          title="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="border p-1 rounded"
        >
          {urlParams.country.validValues.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
      </div>

      {/* Media Select */}
      <div>
        <Label htmlFor="media">Media</Label>
        <select
          id="media"
          name="media"
          title="media"
          value={media}
          onChange={(e) => setMedia(e.target.value as MediaType)}
          className="border p-1 rounded"
        >
          {Object.keys(mediaTypeEntities).map((mediaKey) => (
            <option key={mediaKey} value={mediaKey}>
              {mediaKey.charAt(0).toUpperCase() + mediaKey.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Entity Select */}
      <div>
        <Label htmlFor="entity">Entity</Label>
        <select
          id="entity"
          name="entity"
          title="entity"
          aria-label="Entity"
          value={entity}
          onChange={(e) => setEntity(e.target.value)}
          className="border p-1 rounded"
        >
          {renderEntityOptions(media)}
        </select>
      </div>

      {/* Attribute Select */}
      <div>
        <Label htmlFor="attribute">Attribute</Label>
        <select
          id="attribute"
          name="attribute"
          title="attribute"
          aria-label="Attribute"
          value={attribute}
          onChange={(e) => setAttribute(e.target.value)}
          className="border p-1 rounded"
        >
          {renderAttributeOptions(media)}
        </select>
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        disabled={loading}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded disabled:bg-blue-300"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
