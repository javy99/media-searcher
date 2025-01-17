import { fetchSearchResults } from "@/services/iTunesApi";
import { SearchResult } from "@/types";
import { useState } from "react"

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

  const search = async (options?:Omit<SearchOptions, "term">) => {
    setLoading(true);
    setError(null);

    const searchResults = await fetchSearchResults({term: searchTerm, ...options, explicit: options?.explicit ?? "No"});

    if (searchResults) {
      setResults(searchResults);
    } else {
      setError('Failed to fetch search results.');
      setResults([]);
    }
    setLoading(false);
  }

  return {
    searchTerm,
    setSearchTerm,
    results,
    loading,
    error,
    search,
  }
}

export default useSearch;