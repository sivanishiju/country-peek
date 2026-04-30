function SearchBar({ query, setQuery }) {
  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search countries..."
      aria-label="Search for a country"
    />
  );
}

export default SearchBar;