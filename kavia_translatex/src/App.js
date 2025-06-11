import React from 'react';
import './App.css';

// Import modular components
import VideoFeedWithSubtitles from './components/VideoFeedWithSubtitles';
import SpeakerAvatars from './components/SpeakerAvatars';
import Sidebar from './components/Sidebar';
import AccessibilityControls from './components/AccessibilityControls';

// PUBLIC_INTERFACE
function App() {
  // Demo subtitle and avatars data for placeholder/demo rendering
  const subtitles = [
    { text: 'Hello, welcome to TranslateX!', speaker: 'speaker-1' },
    { text: '¡Bienvenidos a todos!', speaker: 'speaker-2' },
  ];
  const avatars = [
    { label: 'Speaker 1', emoji: '🟦', className: 'speaker-1' },
    { label: 'Speaker 2', emoji: '🟩', className: 'speaker-2' },
  ];

  return (
    <div className="app">
      {/* Top navigation bar */}
      <nav className="navbar">
        <div className="container nav-container">
          <div className="logo">
            <span className="logo-symbol">*</span> KAVIA TranslateX
          </div>
          <div className="nav-actions">
            <button className="btn btn-outline">Log in</button>
          </div>
        </div>
      </nav>

      {/* Main layout with sidebar/content split */}
      <div className="main-layout">
        {/* Sidebar with controls and accessibility */}
        <Sidebar>
          <AccessibilityControls
            onSpeedChange={(val) => {
              /* Placeholder action */
            }}
            onDownloadTranscript={() => {
              /* Placeholder action */
            }}
          />
        </Sidebar>

        {/* Main content area */}
        <main className="main-content">
          <VideoFeedWithSubtitles subtitles={subtitles} />
          <SpeakerAvatars avatars={avatars} />
        </main>
      </div>
    </div>
  );
}

export default App;
