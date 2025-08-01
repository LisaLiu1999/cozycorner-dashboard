import React from 'react';
import { Newspaper, X, ExternalLink } from 'lucide-react';

const NewsWidget = ({ widgetId, removeWidget, data, darkMode }) => {
  return (
    <div className={`widget news-widget ${darkMode ? 'dark' : ''}`}>
      <div className="widget-header">
        <div className="widget-title">
          <Newspaper className="widget-icon news-icon" />
          <h3>Latest News</h3>
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
        <div className="news-list">
          {data && data.length > 0 ? (
            data.slice(0, 3).map(news => (
              <a
                key={news.id}
                href={news.id}
                target="_blank"
                rel="noopener noreferrer"
                className="news-item"
              >
                <div className="news-content">
                  <h4 className="news-title">{news.title}</h4>
                  <div className="news-meta">
                    <span className="news-source">{news.source}</span>
                    <span className="news-time">{news.time}</span>
                  </div>
                </div>
                <ExternalLink className="news-link-icon" />
              </a>
            ))
          ) : (
            <div className="no-data">No news available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsWidget;