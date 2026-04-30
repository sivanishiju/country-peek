import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="header">
      <h2>CountryPeek</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/favourites">Favourites</Link>
      </nav>

      <button
        onClick={toggleTheme}
        aria-label={
          theme === "light"
            ? "Switch to dark mode"
            : "Switch to light mode"
        }
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default Header;