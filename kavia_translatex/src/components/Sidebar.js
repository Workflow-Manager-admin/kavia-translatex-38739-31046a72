import React from 'react';
import './Sidebar.css';

/**
 * Props interface:
 * @param {React.ReactNode} children - Optional: nested controls (e.g., <AccessibilityControls />)
 * @param {object[]} controls - Optionally pass controls array { label, onClick }
 */
// PUBLIC_INTERFACE
function Sidebar({ children = null, controls = [] }) {
  // Fallback demo controls if none passed
  const demoControls = [
    { label: 'Input Mode', onClick: () => {} },
    { label: 'Domain', onClick: () => {} },
    { label: 'Glossary', onClick: () => {} },
    { label: 'Export', onClick: () => {} },
  ];
  const controlsToRender = controls.length > 0 ? controls : demoControls;

  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h2 className="sidebar-title">Controls</h2>
        {controlsToRender.map((ctl, idx) => (
          <button className="btn btn-sidebar" key={idx} onClick={ctl.onClick}>
            {ctl.label}
          </button>
        ))}
        {children && (
          <div className="sidebar-accessibility">
            {children}
          </div>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
