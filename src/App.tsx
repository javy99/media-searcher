import React from "react";
import { Loading, Navbar, SearchBar, SearchResults } from "./components";
import { useSearch } from "./hooks";

const App: React.FC = () => {
  const { searchTerm, setSearchTerm, results, loading, error, search } = useSearch();

  return (
    <>
      <Navbar />
      <SearchBar
        searchItem={searchTerm}
        setSearchItem={setSearchTerm}
        onSearch={search}
        loading={loading}
      />
      {loading && <Loading />}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {!loading && <SearchResults results={results} />}
    </>
  );
};

export default App;
