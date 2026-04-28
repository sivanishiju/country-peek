import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountryPage from "./pages/CountryPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Country Detail Page (IMPORTANT: use :code) */}
        <Route path="/country/:code" element={<CountryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
import Favourites from "./pages/Favourites";

// replace old route with this:
<Route path="/favourites" element={<Favourites />} />