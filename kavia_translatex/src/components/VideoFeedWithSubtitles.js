import React from 'react';
import './VideoFeedWithSubtitles.css';

/**
 * Props interface:
 * @param {object[]} subtitles - Array of { text, speaker } subtitle lines
 * @param {string|JSX.Element} videoFrame - Optional custom video frame to render
 * @param {object[]} speakers - Optional for future use
 * @param {string} detectedLanguage - Current detected language (for visual indication)
 * @param {boolean} isTranslating - If translation is in-progress
 * @param {string} inputMode - "voice" | "text"
 * @param {boolean} accentMatch - If accent matching is enabled
 * @param {boolean} toneMatch - If tone preservation is enabled
 * @param {string} domain - Currently selected domain
 */
// PUBLIC_INTERFACE
function VideoFeedWithSubtitles({
  subtitles = [
    { text: 'Hello, welcome to TranslateX!', speaker: 'speaker-1' },
    { text: '¡Bienvenidos a todos!', speaker: 'speaker-2' }
  ],
  videoFrame = <span role="img" aria-label="Video">🎥</span>,
  speakers = ['speaker-1', 'speaker-2'],
  detectedLanguage = 'English',
  isTranslating = true,
  inputMode = 'voice',
  accentMatch = false,
  toneMatch = false,
  domain = 'General',
}) {
  return (
    <div className="video-section">
      <div className="video-feed" tabIndex={0}>
        <div className="video-placeholder">
          {/* Demo placeholder for video feed */}
          {videoFrame}
        </div>
        {/* Feature status overlay UI elements (top left) */}
        <div style={{
          position: 'absolute',
          left: 19, top: 14,
          zIndex: 20,
          background: 'rgba(255,255,255,0.83)',
          color: '#1A237E',
          borderRadius: 9,
          fontSize: '.98em',
          padding: '8px 18px 8px 13px',
          boxShadow: '0 1px 10px #ececee',
          minWidth: 130,
          fontWeight: 500,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          pointerEvents: 'auto'
        }}>
          {/* Language and translation mode */}
          <span>
            <span style={{ marginRight: 9 }}>
              <span
                style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: isTranslating ? '#00B8D4' : '#bdbdbd',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  marginRight: 4
                }}
              ></span>
              {isTranslating ? 'Translating...' : 'Paused'}
            </span>
            <span style={{
              background: '#f6fbff',
              padding: '0 6px',
              borderRadius: 7,
              fontSize: '0.98em'
            }}>
              {detectedLanguage}
            </span>
          </span>
          <span style={{
            color: '#222842',
            fontWeight: 400, fontSize: '.96em'
          }}>
            Mode: <strong style={{ fontWeight: 600 }}>{inputMode.charAt(0).toUpperCase() + inputMode.slice(1)}</strong>
            &nbsp; | Domain: <strong>{domain}</strong>
          </span>
          <span style={{ color: '#222842', fontWeight: 400, fontSize: '.91em' }}>
            Accent: <b>{accentMatch ? 'Match' : 'Orig.'}</b> &nbsp; | Tone: <b>{toneMatch ? 'Preserve' : 'Orig.'}</b>
          </span>
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
