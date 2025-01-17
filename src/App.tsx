import React from "react";
import { useSearch } from "./hooks";
import { Loading, SearchBar, SearchResults } from "./components";

const App: React.FC  = () => {
  const { searchTerm, setSearchTerm, results, loading, error, search } = useSearch();

  return (
    <div className="p-4">
      <SearchBar
        searchItem={searchTerm}
        setSearchItem={setSearchTerm}
        onSearch={search}
        loading={loading}
      />
      {loading && <Loading />}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {!loading && <SearchResults results={results} />}
    </div>
  );
}

export default App;