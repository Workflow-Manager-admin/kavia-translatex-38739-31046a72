import React from 'react';
import './VideoFeedWithSubtitles.css';

/**
 * Props interface:
 * @param {string[]} subtitles - Array of subtitle strings with speaker info
 * @param {string|JSX.Element} videoFrame - Optional custom video frame to render
 * @param {object[]} speakers - Optional array for future color-coding/extensibility
 */
// PUBLIC_INTERFACE
function VideoFeedWithSubtitles({
  subtitles = [
    { text: 'Hello, welcome to TranslateX!', speaker: 'speaker-1' },
    { text: '¡Bienvenidos a todos!', speaker: 'speaker-2' }
  ],
  videoFrame = <span role="img" aria-label="Video">🎥</span>,
  speakers = ['speaker-1', 'speaker-2']
}) {
  return (
    <div className="video-section">
      <div className="video-feed" tabIndex={0}>
        <div className="video-placeholder">
          {/* Demo placeholder for video feed */}
          {videoFrame}
        </div>
        {/* Overlaid subtitles area */}
        <div className="subtitles-overlay">
          {subtitles.map((line, idx) => (
            <div
              key={idx}
              className={`subtitle ${line.speaker ?? ''}`}
              aria-label={`Subtitle by ${line.speaker}`}>
              {line.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoFeedWithSubtitles;
