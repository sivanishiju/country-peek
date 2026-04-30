function Favourites() {
  const favs = JSON.parse(localStorage.getItem("favs")) || [];

  if (favs.length === 0) return <p>No favourites yet.</p>;

  return (
    <div className="cards-grid">
      {favs.map((c) => (
        <div key={c.cca3}>{c.name.common}</div>
      ))}
    </div>
  );
}

export default Favourites;