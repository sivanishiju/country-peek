import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import CountryCard from "../components/CountryCard";

function Home() {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [favs, setFavs] = useState(
    JSON.parse(localStorage.getItem("favs")) || []
  );

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  useEffect(() => {
    if (!query.trim()) return;

    const fetchData = async () => {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${query}`
      );
      const data = await res.json();
      setCountries(data || []);
    };

    const timer = setTimeout(fetchData, 500);
    return () => clearTimeout(timer);
  }, [query]);

  const toggleFav = (country) => {
    const exists = favs.find((c) => c.cca3 === country.cca3);
    if (exists) {
      setFavs(favs.filter((c) => c.cca3 !== country.cca3));
    } else {
      setFavs([...favs, country]);
    }
  };

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />

      {countries.length === 0 && query && <p>No countries found.</p>}

      <div className="cards-grid">
        {countries.map((c) => (
          <CountryCard
            key={c.cca3}
            country={c}
            toggleFav={toggleFav}
            isSaved={favs.some((f) => f.cca3 === c.cca3)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;