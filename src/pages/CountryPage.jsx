import { useParams } from "react-router-dom";
import useCountry from "../hooks/useCountry";

function CountryPage() {
  const { code } = useParams();
  const { country, loading, error } = useCountry(code);

  if (loading) return <p>Loading...</p>;
  if (error || !country) return <p>Country not found.</p>;

  return (
    <div className="country-page__layout">
      <img src={country.flags.svg} alt={country.name.common} />

      <div>
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital?.[0] ?? "N/A"}</p>
        <p>Region: {country.region}</p>
        <p>Subregion: {country.subregion ?? "N/A"}</p>
      </div>
    </div>
  );
}

export default CountryPage;