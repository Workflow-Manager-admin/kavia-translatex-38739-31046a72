import React, { useState } from 'react';
import './App.css';

// Import modular components
import VideoFeedWithSubtitles from './components/VideoFeedWithSubtitles';
import SpeakerAvatars from './components/SpeakerAvatars';
import Sidebar from './components/Sidebar';
import AccessibilityControls from './components/AccessibilityControls';

/**
 * Main app container for TranslateX
 * - Contains all UX stubs, demo state and dummy handlers for main features.
 * - All props/state clearly scaffolded for extensible logic + accessibility.
 */
// PUBLIC_INTERFACE
function App() {
  // Dummy state and feature toggles for demo scaffolding
  const [inputMode, setInputMode] = useState('voice'); // 'voice' | 'text'
  const [selectedDomain, setSelectedDomain] = useState('General');
  const [accentMatch, setAccentMatch] = useState(false);
  const [toneMatch, setToneMatch] = useState(false);
  const [glossaryOpen, setGlossaryOpen] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);
  const [isTranslating, setIsTranslating] = useState(true);
  const [detectedLanguage, setDetectedLanguage] = useState('English');
  const [speed, setSpeed] = useState('1');
  const [showAccessibility, setShowAccessibility] = useState(false);

  // Demo data for stubs
  const subtitles = [
    { text: 'Hello, welcome to TranslateX!', speaker: 'speaker-1' },
    { text: '¡Bienvenidos a todos!', speaker: 'speaker-2' },
  ];
  const avatars = [
    { label: 'Speaker 1', emoji: '🟦', className: 'speaker-1' },
    { label: 'Speaker 2', emoji: '🟩', className: 'speaker-2' },
  ];
  const domains = ['General', 'Legal', 'Medical', 'Business', 'Education', 'Casual'];
  
  // Sidebar controls definition
  const sidebarControls = [
    {
      label: (
        <>
          Input Mode:&nbsp;
          <button
            className={`btn btn-sidebar${inputMode === 'voice' ? ' active' : ''}`}
            aria-pressed={inputMode === 'voice'}
            aria-label="Switch to Voice Input"
            style={{ marginRight: 6 }}
            tabIndex={0}
            onClick={() => setInputMode('voice')}
            onKeyDown={e => {
              if (e.key === ' ' || e.key === 'Enter') setInputMode('voice');
            }}
            type="button"
            role="button"
          >
            Voice
          </button>
          <button
            className={`btn btn-sidebar${inputMode === 'text' ? ' active' : ''}`}
            aria-pressed={inputMode === 'text'}
            aria-label="Switch to Text Input"
            tabIndex={0}
            onClick={() => setInputMode('text')}
            onKeyDown={e => {
              if (e.key === ' ' || e.key === 'Enter') setInputMode('text');
            }}
            type="button"
            role="button"
          >
            Text
          </button>
        </>
      ),
      onClick: () => {}
    },
    {
      label: (
        <>
          Domain:&nbsp;
          <select
            value={selectedDomain}
            className="access-dropdown"
            onChange={e => setSelectedDomain(e.target.value)}
            aria-label="Choose translation domain"
            tabIndex={0}
          >
            {domains.map(domain =>
              <option value={domain} key={domain}>{domain}</option>
            )}
          </select>
        </>
      ),
      onClick: () => {}
    },
    {
      label: (
        <>
          Accent:{" "}
          <input
            type="checkbox"
            checked={accentMatch}
            onChange={(e) => setAccentMatch(e.target.checked)}
            aria-label="Enable accent match"
            aria-checked={accentMatch}
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === ' ' || e.key === 'Enter') setAccentMatch(v => !v);
            }}
          />&nbsp;
          <span style={{ fontSize: '0.97em' }}>Match</span>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          Tone:{" "}
          <input
            type="checkbox"
            checked={toneMatch}
            onChange={(e) => setToneMatch(e.target.checked)}
            aria-label="Preserve tone"
            aria-checked={toneMatch}
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === ' ' || e.key === 'Enter') setToneMatch(v => !v);
            }}
          />&nbsp;
          <span style={{ fontSize: '0.97em' }}>Preserve</span>
        </>
      ),
      onClick: () => {}
    },
    {
      label: (
        <>
          <button
            className="btn btn-sidebar"
            aria-expanded={glossaryOpen}
            aria-label={glossaryOpen ? 'Hide glossary panel' : 'Show glossary panel'}
            tabIndex={0}
            onClick={() => setGlossaryOpen(v => !v)}
            onKeyDown={e => {
              if (e.key === ' ' || e.key === 'Enter') setGlossaryOpen(v => !v);
            }}
            role="button"
            type="button"
          >
            Glossary {glossaryOpen ? '(Open)' : ''}
          </button>
        </>
      ),
      onClick: () => setGlossaryOpen(v => !v)
    },
    {
      label: (
        <>
          <button
            className="btn btn-sidebar"
            aria-expanded={exportOpen}
            aria-label={exportOpen ? 'Hide export panel' : 'Show export panel'}
            tabIndex={0}
            onClick={() => setExportOpen(v => !v)}
            onKeyDown={e => {
              if (e.key === ' ' || e.key === 'Enter') setExportOpen(v => !v);
            }}
            role="button"
            type="button"
          >
            Export {exportOpen ? '(Open)' : ''}
          </button>
        </>
      ),
      onClick: () => setExportOpen(v => !v)
    }
  ];

  // Accessibility shown as a stub in sidebar (per the design)
  function handleDownloadTranscript() { /* Placeholder function */ }
  function handleSpeedChange(val) { setSpeed(val); }
  
  // Dummy overlay UI for glossary and export stubs
  const GlossaryStub = () => glossaryOpen ? (
    <div aria-live="polite"
      style={{
        background: '#f6fbff',
        color: '#222842',
        padding: '14px 18px',
        borderRadius: 8,
        margin: '11px 0',
        boxShadow: '0 2px 6px #ececee'
      }}>
      <strong>Glossary (Placeholder):</strong><br />
      <ul style={{ margin: 0, padding: 0, listStyle: 'disc inside' }}>
        <li>"Translation": A rendering of text or speech from one language to another</li>
        <li>"Accent": Regional pronunciation or intonation pattern</li>
        <li>Demo: add/edit coming soon...</li>
      </ul>
    </div>
  ) : null;

  const ExportStub = () => exportOpen ? (
    <div aria-live="polite"
      style={{
        background: '#fff2cc',
        color: '#222842',
        padding: '13px 19px',
        borderRadius: 8,
        margin: '10px 0',
        border: '1px solid #ffe082',
        boxShadow: '0 2px 6px #fbecb5'
      }}>
      <strong>Export (Demo UI):</strong>
      <div>
        <button
          className="btn btn-sidebar"
          aria-label="Export subtitles as SRT"
          style={{ marginTop: 8 }}
          type="button"
          tabIndex={0}
        >Export SRT</button>
        <button
          className="btn btn-sidebar"
          aria-label="Export with video"
          style={{ marginLeft: 6, marginTop: 8 }}
          type="button"
          tabIndex={0}
        >Export Video</button>
      </div>
      <small>Feature coming soon: subtitle hard/soft export, choice of file format.</small>
    </div>
  ) : null;

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
        {/* Sidebar with accessible stubs and all control demos */}
        <Sidebar
          controls={sidebarControls}
        >
          <div style={{ marginBottom: '8px' }}>
            {/* Real-time translation status + detected language indication */}
            <div
              style={{
                fontSize: '1em',
                marginBottom: '7px',
                color: isTranslating ? '#00B8D4' : '#52617c',
                fontWeight: 600,
                display: 'flex', alignItems: 'center', gap: '8px'
              }}
              aria-live="polite"
            >
              <span
                style={{
                  width: 10, height: 10, borderRadius: '50%',
                  background: isTranslating ? '#00B8D4' : '#bdbdbd',
                  display: 'inline-block', marginRight: 3
                }}
                title={isTranslating ? 'Translating' : 'Idle'}
              ></span>
              {isTranslating ? 'Translating...' : 'Idle'}
              <span style={{
                padding: '2px 10px',
                background: '#f6fbff',
                color: '#222842',
                borderRadius: '10px',
                marginLeft: 12,
                fontWeight: 400,
                fontSize: '0.96em'
              }}>
                Detected: <strong>{detectedLanguage}</strong>
              </span>
            </div>
            {GlossaryStub()}
            {ExportStub()}
          </div>
          <AccessibilityControls
            speed={speed}
            onSpeedChange={handleSpeedChange}
            onDownloadTranscript={handleDownloadTranscript}
          />
        </Sidebar>

        {/* Main content area */}
        <main className="main-content">
          <VideoFeedWithSubtitles
            subtitles={subtitles}
            detectedLanguage={detectedLanguage}
            isTranslating={isTranslating}
            inputMode={inputMode}
            accentMatch={accentMatch}
            toneMatch={toneMatch}
            domain={selectedDomain}
          />
          <SpeakerAvatars avatars={avatars} />
        </main>
      </div>
    </div>
  );
}

export default App;
