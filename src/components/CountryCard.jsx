import { Link } from "react-router-dom";

function CountryCard({ country, toggleFav, isSaved }) {
  return (
    <div className="card">
      <img
        src={country.flags.svg}
        alt={`Flag of ${country.name.common}`}
        width="100%"
      />

      <h3 className="card__name">{country.name.common}</h3>
      <p>{country.capital?.[0] ?? "N/A"}</p>

      <Link to={`/country/${country.cca3}`}>View</Link>

      <button
        onClick={() => toggleFav(country)}
        aria-label={
          isSaved
            ? `Remove ${country.name.common} from favourites`
            : `Save ${country.name.common} to favourites`
        }
        aria-pressed={isSaved}
      >
        {isSaved ? "♥ Saved" : "♡ Save"}
      </button>
    </div>
  );
}

export default CountryCard;