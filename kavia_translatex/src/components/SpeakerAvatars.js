import React from 'react';
import './SpeakerAvatars.css';

/**
 * Props interface:
 * @param {object[]} avatars - Array of avatar objects: { label, emoji, className }
 */
// PUBLIC_INTERFACE
function SpeakerAvatars({
  avatars = [
    { label: 'Speaker 1', emoji: '🟦', className: 'speaker-1' },
    { label: 'Speaker 2', emoji: '🟩', className: 'speaker-2' }
  ]
}) {
  return (
    <div className="speaker-avatars-row">
      {avatars.map((av, idx) => (
        <div className={`avatar ${av.className}`} key={idx}>
          <span role="img" aria-label={av.label}>{av.emoji}</span>
          <div className="avatar-label">{av.label}</div>
        </div>
      ))}
    </div>
  );
}

export default SpeakerAvatars;
