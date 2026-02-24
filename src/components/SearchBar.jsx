export default function SearchBar({ query, onChange }) {
  return (
    <div className="search-bar">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        placeholder="Search city..."
        value={query}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
