import React from 'react';
import { CloudRain, X, Droplets, Wind, Thermometer } from 'lucide-react';

const WeatherWidget = ({ widgetId, removeWidget, data, darkMode }) => {
  if (!data) {
    return (
      <div className={`widget weather-widget loading ${darkMode ? 'dark' : ''}`}>
        <div className="widget-header">
          <div className="widget-title">
            <CloudRain className="widget-icon weather-icon" />
            <h3>Weather</h3>
          </div>
          <button
            onClick={() => removeWidget(widgetId)}
            className="remove-btn"
            title="Remove widget"
          >
            <X className="remove-icon" />
          </button>
        </div>
        <div className="widget-content">
          <div className="loading-spinner">Loading weather data...</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`widget weather-widget ${darkMode ? 'dark' : ''}`}>
      <div className="widget-header">
        <div className="widget-title">
          <CloudRain className="widget-icon weather-icon" />
          <h3>Weather</h3>
        </div>
        <button
          onClick={() => removeWidget(widgetId)}
          className="remove-btn"
          title="Remove widget"
        >
          <X className="remove-icon" />
        </button>
      </div>
      
      <div className="widget-content">
        <div className="weather-main">
          <div className="temperature">
            <Thermometer className="temp-icon" />
            {data.temp}°C
          </div>
          <div className="weather-info">
            <div className="city">{data.city}</div>
            <div className="description">{data.description}</div>
          </div>
        </div>
        
        <div className="weather-details">
          <div className="detail-item">
            <Droplets className="detail-icon" />
            <span>Humidity</span>
            <span className="detail-value">{data.humidity}%</span>
          </div>
          <div className="detail-item">
            <Wind className="detail-icon" />
            <span>Wind Speed</span>
            <span className="detail-value">{data.windSpeed} km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;