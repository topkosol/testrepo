import { useState, useMemo } from "react";
import { cities } from "./data/cities";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import DetailModal from "./components/DetailModal";
import "./App.css";

const FILTERS = ["All", "Hot 🔥", "Cold 🧊", "Rainy 🌧️", "Sunny ☀️"];

export default function App() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    let list = cities;

    if (query) {
      list = list.filter((c) =>
        c.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (filter === "Hot 🔥") list = list.filter((c) => c.temp >= 30);
    else if (filter === "Cold 🧊") list = list.filter((c) => c.temp <= 5);
    else if (filter === "Rainy 🌧️")
      list = list.filter((c) =>
        ["Rain", "Light Rain", "Thunderstorm", "Snowing"].some((k) =>
          c.condition.includes(k)
        )
      );
    else if (filter === "Sunny ☀️")
      list = list.filter((c) =>
        ["Sunny", "Clear", "Hot"].some((k) => c.condition.includes(k))
      );

    return list;
  }, [query, filter]);

  const avgTemp =
    filtered.length > 0
      ? Math.round(filtered.reduce((s, c) => s + c.temp, 0) / filtered.length)
      : 0;

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-icon">🌍</span>
            <div>
              <h1>World Weather</h1>
              <p>Live forecast for cities around the globe</p>
            </div>
          </div>
          <div className="header-stats">
            <div className="hstat">
              <span className="hstat-num">{filtered.length}</span>
              <span className="hstat-lbl">Cities</span>
            </div>
            <div className="hstat">
              <span className="hstat-num">{avgTemp}°C</span>
              <span className="hstat-lbl">Avg Temp</span>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="controls">
          <SearchBar query={query} onChange={setQuery} />
          <div className="filters">
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`filter-btn ${filter === f ? "active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="empty">
            <span>🔭</span>
            <p>No cities match your search.</p>
          </div>
        ) : (
          <div className="grid">
            {filtered.map((city) => (
              <WeatherCard key={city.id} city={city} onClick={setSelected} />
            ))}
          </div>
        )}
      </main>

      <DetailModal city={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
