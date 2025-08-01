import React from 'react';
import { Plus, Heart, RefreshCw } from 'lucide-react';
import WeatherWidget from './widgets/WeatherWidget';
import NewsWidget from './widgets/NewsWidget';
import CatFactWidget from './widgets/CatFactWidget'; 

const MainContent = ({
  widgets,
  widgetData,
  removeWidget,
  handleDragOver,
  handleDragLeave,
  handleDrop,
  dragOver,
  setShowSidebar,
  darkMode,
  refreshData
}) => {

  const renderWidget = (widget) => {
    const commonProps = {
      widgetId: widget.id,
      removeWidget,
      darkMode
    };

    switch (widget.type) {
      case 'weather':
        return <WeatherWidget {...commonProps} data={widgetData.weather} />;
      case 'news':
        // ===== Correction: Changed commonShorthand to commonProps =====
        return <NewsWidget {...commonProps} data={widgetData.news} />;
      case 'cat-fact':
        // ===== Correction: Changed commonShorthand to commonProps =====
        return <CatFactWidget {...commonProps} data={widgetData.catFact} />;
      default:
        return null;
    }
  };

  return (
    <main className={`main-content`}>
      <div className="content-container">
        {widgets.length > 0 && (
          <div className="content-header">
            <button
              onClick={refreshData}
              className="refresh-btn"
              title="Refresh all data"
            >
              <RefreshCw className="icon" />
              <span>Refresh Data</span>
            </button>
          </div>
        )}

        {widgets.length === 0 ? (
          <div
            className={`empty-state ${dragOver ? 'drag-over' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="empty-state-content">
              <div className="empty-icon">
                <Heart className="heart-icon" />
              </div>
              <h3>Your dashboard is waiting for some love!</h3>
              <p>
                Drag widgets from the sidebar or click the button below to make it cozy
              </p>
              <button
                onClick={() => setShowSidebar(true)}
                className="cta-button"
              >
                <Plus className="icon" />
                <span>Add Your First Widget</span>
              </button>
            </div>
          </div>
        ) : (
          <div
            className={`widgets-grid ${dragOver ? 'drag-over' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {widgets.map(widget => (
              <div key={widget.id} className="widget-container">
                {renderWidget(widget)}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MainContent;