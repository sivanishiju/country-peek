import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import CountryCard from "../components/CountryCard";
import FilterBar from "../components/FilterBar";

function Home() {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);

  const [region, setRegion] = useState("All");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    if (!query) {
      setCountries([]);
      return;
    }

    async function fetchCountries() {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${query}`
      );
      const data = await res.json();
      setCountries(data);
    }

    fetchCountries();
  }, [query]);

  // ✅ Derived state
  const displayed = [...countries]
    .filter((c) => region === "All" || c.region === region)
    .sort((a, b) => {
      if (sortBy === "name") {
        return a.name.common.localeCompare(b.name.common);
      }
      if (sortBy === "population") {
        return b.population - a.population;
      }
      return 0;
    });

  return (
    <div className="home">
      <SearchBar query={query} onQueryChange={setQuery} />

      <FilterBar
        region={region}
        onRegionChange={setRegion}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      {countries.length === 0 ? (
        <p className="home__placeholder">
          Start searching to explore countries.
        </p>
      ) : (
        <div className="cards-grid">
          {displayed.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;