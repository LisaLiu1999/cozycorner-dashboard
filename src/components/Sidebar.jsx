import React from 'react';
import { Grip, Heart } from 'lucide-react';

const Sidebar = ({ 
  showSidebar, 
  availableWidgets, 
  handleDragStart, 
}) => {
  return (
    <div className={`sidebar ${showSidebar ? 'sidebar-open' : 'sidebar-closed'}`}>
      <div className="sidebar-content">
        <div className="sidebar-header">
          <Heart className="sidebar-heart" />
          <h2>Available Widgets</h2>
          <p>Drag to add to your dashboard</p>
        </div>
        
        <div className="widget-list">
          {availableWidgets.map(widget => {
            const Icon = widget.icon;
            return (
              <div
                key={widget.id}
                draggable
                onDragStart={(e) => handleDragStart(e, widget)}
                className={`widget-item ${widget.color}`}
                title={`Add ${widget.name} widget`}
              >
                <div className="widget-item-content">
                  <Icon className="widget-icon" />
                  <span className="widget-name">{widget.name}</span>
                  <Grip className="drag-handle" />
                </div>
                <p className="widget-description">{widget.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="sidebar-footer">
          <p>Make your dashboard adorable!</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;