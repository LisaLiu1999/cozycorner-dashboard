import React from 'react';
import { Plus, Sun, Moon, Sparkles } from 'lucide-react';

const Header = ({ darkMode, setDarkMode, setShowSidebar, showSidebar }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="header-title">
            <Sparkles className="title-icon" />
            <h1>My Cozy Corner</h1>
          </div>
          
          <div className="header-actions">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="theme-toggle"
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun className="icon" /> : <Moon className="icon" />}
            </button>
            
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className="add-widget-btn"
            >
              <Plus className="icon" />
              <span>Add Widget</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;