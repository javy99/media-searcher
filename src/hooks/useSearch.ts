import { fetchSearchResults } from "@/services/iTunesApi";
import { SearchResult } from "@/types";
import { useState } from "react"

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = async () => {
    setLoading(true);
    setError(null);

    const searchResults = await fetchSearchResults(searchTerm);

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