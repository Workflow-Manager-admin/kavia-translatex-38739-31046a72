import React from 'react';
import './Sidebar.css';

/**
 * Props interface:
 * @param {React.ReactNode} children - Optional: nested controls/subcomponents (e.g., <AccessibilityControls />)
 * @param {object[]} controls - Controls to render at top; allow { label (string | ReactNode), onClick }
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
  const controlsToRender = Array.isArray(controls) && controls.length > 0 ? controls : demoControls;

  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h2 className="sidebar-title">Controls</h2>
        {controlsToRender.map((ctl, idx) => (
          <div key={idx} style={{ marginBottom: 8, width: '100%' }}>
            {/* If label is a ReactNode, render inside a div (to allow custom UI structure). */}
            {typeof ctl.label === 'string'
              ? (
                <button className="btn btn-sidebar" type="button" onClick={ctl.onClick}>{ctl.label}</button>
              )
              : ctl.label}
          </div>
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
