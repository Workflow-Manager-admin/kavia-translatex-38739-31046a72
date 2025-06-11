import React from 'react';
import './AccessibilityControls.css';

/**
 * Props interface:
 * @param {string} speed - Current speech speed value
 * @param {Function} onSpeedChange - Handler for speech speed (value => void)
 * @param {Function} onDownloadTranscript - Handler for transcript download
 */
// PUBLIC_INTERFACE
function AccessibilityControls({
  speed = '1',
  onSpeedChange = () => {},
  onDownloadTranscript = () => {},
}) {
  return (
    <div className="accessibility-controls" aria-label="Accessibility controls">
      <div className="accessibility-row">
        <label htmlFor="speech-speed" className="access-label">Speech Speed:</label>
        <select
          id="speech-speed"
          className="access-dropdown"
          value={speed}
          onChange={e => onSpeedChange(e.target.value)}
          aria-label="Set speech speed"
          tabIndex={0}
        >
          <option value="1">Normal</option>
          <option value="1.25">1.25x</option>
          <option value="0.8">0.8x (Slow)</option>
        </select>
      </div>
      <div className="accessibility-row">
        <button
          className="btn btn-sidebar"
          onClick={onDownloadTranscript}
          type="button"
          tabIndex={0}
          aria-label="Download transcript"
          role="button"
          onKeyDown={e => {
            if (e.key === ' ' || e.key === 'Enter') onDownloadTranscript();
          }}
        >
          Download Transcript
        </button>
      </div>
    </div>
  );
}

export default AccessibilityControls;
