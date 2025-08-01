import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { availableWidgets } from './widgetConfig';

const App = () => {
  const [widgets, setWidgets] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [draggedWidget, setDraggedWidget] = useState(null);
  const [dragOver, setDragOver] = useState(false);

  // Widget data states
  const [widgetData, setWidgetData] = useState({
    weather: null,
    news: [],
    catFact: null
  });

  // Load saved preferences
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    const savedWidgets = localStorage.getItem('widgets');
    
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
    
    if (savedWidgets) {
      setWidgets(JSON.parse(savedWidgets));
    }
  }, []);

  // Save preferences
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('widgets', JSON.stringify(widgets));
  }, [widgets]);

  // Fetch widget data on mount
  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    const promises = [
      fetch('https://api.open-meteo.com/v1/forecast?latitude=51.0447&longitude=-114.0719&current_weather=true&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m'),
      fetch(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`),
      fetch('https://catfact.ninja/fact')
    ];

    const results = await Promise.allSettled(promises);
    
    const dataPromises = results.map(result => {
      if (result.status === 'fulfilled' && result.value.ok) {
        return result.value.json();
      }
      if (result.status === 'rejected') {
        console.error("Fetch failed:", result.reason);
      } else if (result.value && !result.value.ok) {
        console.error(`API request failed with status: ${result.value.status}`);
      }
      return null;
    });

    const [weatherData, newsApiData, catFactData] = await Promise.all(dataPromises);
    
    setWidgetData(prev => ({
      ...prev,
      weather: weatherData ? {
        temp: Math.round(weatherData.current_weather.temperature),
        city: "Calgary, AB",
        description: getWeatherDescription(weatherData.current_weather.weathercode),
        humidity: weatherData.hourly.relative_humidity_2m[0],
        windSpeed: Math.round(weatherData.current_weather.windspeed)
      } : prev.weather,
      
      news: (newsApiData && newsApiData.articles) ? newsApiData.articles.map(article => ({
        id: article.url,
        title: article.title,
        source: article.source.name,
        time: new Date(article.publishedAt).toLocaleDateString()
      })) : prev.news,

      catFact: catFactData ? catFactData : prev.catFact
    }));
  };

  const getWeatherDescription = (code) => {
    const descriptions = { 0: "Clear sky", 1: "Mainly clear", 2: "Partly cloudy", 3: "Overcast", 45: "Foggy", 48: "Depositing rime fog", 51: "Light drizzle", 53: "Moderate drizzle", 55: "Dense drizzle", 61: "Slight rain", 63: "Moderate rain", 65: "Heavy rain", 71: "Slight snow", 73: "Moderate snow", 75: "Heavy snow", 95: "Thunderstorm" };
    return descriptions[code] || "Unknown";
  };
  
  const addWidget = (widgetType) => {
    const newWidget = { id: Date.now(), type: widgetType, position: widgets.length };
    setWidgets([...widgets, newWidget]);

  };

  const removeWidget = (widgetId) => {
    setWidgets(widgets.filter(w => w.id !== widgetId));
  };

  const handleDragStart = (e, widget) => {
    setDraggedWidget(widget);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    if (draggedWidget) {
      addWidget(draggedWidget.id);
      setDraggedWidget(null);
    }
  };

  return (
    <div className={`app ${darkMode ? 'dark' : ''} ${showSidebar ? 'sidebar-is-open' : ''}`}
        onClick={(e) => {
            if (showSidebar && e.target === e.currentTarget) {
                setShowSidebar(false);
            }
        }}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} setShowSidebar={setShowSidebar} showSidebar={showSidebar}/>
      <div className="app-content">
        <Sidebar 
            showSidebar={showSidebar} 
            availableWidgets={availableWidgets} 
            handleDragStart={handleDragStart}
        />
        <MainContent 
            widgets={widgets} 
            widgetData={widgetData} 
            removeWidget={removeWidget} 
            handleDragOver={handleDragOver} 
            handleDragLeave={handleDragLeave} 
            handleDrop={handleDrop} 
            dragOver={dragOver} 
            setShowSidebar={setShowSidebar} 
            darkMode={darkMode} 
            refreshData={fetchAllData}
        />
      </div>
    </div>
  );
};

export default App;