import { useState } from "react";

function SearchBar({ onSearch, error }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      onSearch(query);
    }
  };

  return (
    <div className="mb-8">
      <div className="relative max-w-md">
        <input
          className="w-full bg-white text-black rounded-full px-12 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-500"
          placeholder="What do you want to listen to?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleSearch}
        />
        <svg className="w-6 h-6 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      {error && (
        <p className="text-red-400 text-sm mt-2">{error}</p>
      )}
    </div>
  );
}

export default SearchBar;