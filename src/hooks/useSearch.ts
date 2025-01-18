import { fetchSearchResults } from "@/services/iTunesApi";
import { SearchResult } from "@/types";
import { useEffect, useState } from "react"

interface SearchOptions {
  term: string;
  country?: string;
  media?: string;
  entity?: string;
  attribute?: string;
  limit?: number;
  lang?: string;
  version?: number;
  explicit?: "Yes" | "No";
}

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = async (options?: Omit<SearchOptions, "term">) => {
    setLoading(true);
    setError(null);

    const searchResults = await fetchSearchResults({
      term: searchTerm,
      explicit: options?.explicit ?? "No",
      ...options,
    });

    if (searchResults) {
      setResults(searchResults);
    } else {
      setError("Failed to fetch search results.");
      setResults([]);
    }
    setLoading(false);
  };

  // Debounced search
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        search();
      } else {
        setResults([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    results,
    loading,
    error,
    search,
  };
}

export default useSearch;