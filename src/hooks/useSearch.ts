import { fetchSearchResults } from "@/services/iTunesApi";
import { SearchOptions, SearchResult } from "@/types";
import { useEffect, useState } from "react"

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