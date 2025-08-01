import React from 'react';
import { Cat, X } from 'lucide-react';

const CatFactWidget = ({ widgetId, removeWidget, data, darkMode }) => {
  if (!data) {
    return (
      <div className={`widget cat-fact-widget loading ${darkMode ? 'dark' : ''}`}>
        <div className="widget-header">
          <div className="widget-title">
            <Cat className="widget-icon" />
            <h3>Cat Fact</h3>
          </div>
          <button onClick={() => removeWidget(widgetId)} className="remove-btn" title="Remove widget">
            <X className="remove-icon" />
          </button>
        </div>
        <div className="widget-content">
          <div className="loading-spinner">Loading cat fact...</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`widget cat-fact-widget ${darkMode ? 'dark' : ''}`}>
      <div className="widget-header">
        <div className="widget-title">
          <Cat className="widget-icon" />
          <h3>Cat Fact</h3>
        </div>
        <button onClick={() => removeWidget(widgetId)} className="remove-btn" title="Remove widget">
          <X className="remove-icon" />
        </button>
      </div>
      <div className="widget-content">
        <p className="fact-text">“{data.fact}”</p>
      </div>
    </div>
  );
};

export default CatFactWidget;