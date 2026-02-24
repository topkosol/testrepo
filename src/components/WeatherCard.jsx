export default function WeatherCard({ city, onClick }) {
  const tempColor =
    city.temp <= 0
      ? "#60a5fa"
      : city.temp <= 15
      ? "#34d399"
      : city.temp <= 28
      ? "#fbbf24"
      : "#f87171";

  return (
    <div className="weather-card" onClick={() => onClick(city)}>
      <div className="card-header">
        <div>
          <h2 className="city-name">{city.name}</h2>
          <span className="country">
            {city.flag} {city.country} · {city.timezone}
          </span>
        </div>
        <span className="weather-icon">{city.icon}</span>
      </div>

      <div className="card-temp" style={{ color: tempColor }}>
        {city.temp}°C
      </div>

      <div className="card-condition">{city.condition}</div>

      <div className="card-stats">
        <div className="stat">
          <span className="stat-label">💧 Humidity</span>
          <span className="stat-value">{city.humidity}%</span>
        </div>
        <div className="stat">
          <span className="stat-label">💨 Wind</span>
          <span className="stat-value">{city.wind} km/h</span>
        </div>
        <div className="stat">
          <span className="stat-label">🌡️ Feels like</span>
          <span className="stat-value">{city.feelsLike}°C</span>
        </div>
      </div>

      <div className="card-hilo">
        <span>H: {city.high}°</span>
        <span>L: {city.low}°</span>
      </div>
    </div>
  );
}
