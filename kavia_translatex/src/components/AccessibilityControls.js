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
    <div className="accessibility-controls">
      <div className="accessibility-row">
        <label htmlFor="speech-speed" className="access-label">Speech Speed:</label>
        <select
          id="speech-speed"
          className="access-dropdown"
          value={speed}
          onChange={e => onSpeedChange(e.target.value)}
        >
          <option value="1">Normal</option>
          <option value="1.25">1.25x</option>
          <option value="0.8">0.8x (Slow)</option>
        </select>
      </div>
      <div className="accessibility-row">
        <button className="btn btn-sidebar" onClick={onDownloadTranscript}>
          Download Transcript
        </button>
      </div>
    </div>
  );
}

export default AccessibilityControls;
