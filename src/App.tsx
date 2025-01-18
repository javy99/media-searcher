import React from "react";
import { Footer, Loading, Navbar, SearchBar, SearchResults } from "./components";
import { useSearch } from "./hooks";

const App: React.FC = () => {
  const { searchTerm, setSearchTerm, results, loading, error, search } = useSearch();

   return (
     <div className="relative min-h-screen flex flex-col">
       <Navbar />
       <main className="flex-grow">
         <SearchBar
           searchItem={searchTerm}
           setSearchItem={setSearchTerm}
           onSearch={search}
           loading={loading}
         />
         {loading && <Loading />}
         {error && (
           <p className="text-center text-red-500 mt-5">Error: {error}</p>
         )}
         {!loading && <SearchResults results={results} />}
       </main>
       <Footer />
     </div>
   );
};

export default App;
