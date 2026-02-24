export default function DetailModal({ city, onClose }) {
  if (!city) return null;

  const uvLabel = (uv) => {
    if (uv <= 2) return { text: "Low", color: "#34d399" };
    if (uv <= 5) return { text: "Moderate", color: "#fbbf24" };
    if (uv <= 7) return { text: "High", color: "#f97316" };
    return { text: "Very High", color: "#f87171" };
  };

  const uv = uvLabel(city.uv);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-header">
          <div>
            <h2>{city.name}</h2>
            <p className="modal-sub">{city.flag} {city.country} · {city.timezone}</p>
          </div>
          <span className="modal-icon">{city.icon}</span>
        </div>

        <div className="modal-temp">{city.temp}°C</div>
        <div className="modal-condition">{city.condition}</div>
        <div className="modal-hilo">H: {city.high}° / L: {city.low}°</div>

        <div className="modal-stats">
          <div className="mstat">
            <span className="mstat-icon">🌡️</span>
            <span className="mstat-label">Feels Like</span>
            <span className="mstat-val">{city.feelsLike}°C</span>
          </div>
          <div className="mstat">
            <span className="mstat-icon">💧</span>
            <span className="mstat-label">Humidity</span>
            <span className="mstat-val">{city.humidity}%</span>
          </div>
          <div className="mstat">
            <span className="mstat-icon">💨</span>
            <span className="mstat-label">Wind</span>
            <span className="mstat-val">{city.wind} km/h</span>
          </div>
          <div className="mstat">
            <span className="mstat-icon">👁️</span>
            <span className="mstat-label">Visibility</span>
            <span className="mstat-val">{city.visibility} km</span>
          </div>
          <div className="mstat">
            <span className="mstat-icon">🔆</span>
            <span className="mstat-label">UV Index</span>
            <span className="mstat-val" style={{ color: uv.color }}>
              {city.uv} · {uv.text}
            </span>
          </div>
        </div>

        <div className="forecast-section">
          <h3>5-Day Forecast</h3>
          <div className="forecast-row">
            {city.forecast.map((f) => (
              <div key={f.day} className="forecast-day">
                <span className="f-day">{f.day}</span>
                <span className="f-icon">{f.icon}</span>
                <span className="f-high">{f.high}°</span>
                <span className="f-low">{f.low}°</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
