import React, { useState, useEffect } from "react";

export default function Speech() {
  const [text, setText] = useState("");
  const [selectedVoice, setSelectedVoice] = useState(0);
  const voices = speechSynthesis.getVoices();

  const speech = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    const voice = voices[selectedVoice];
    utterance.voice = voice;
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="main-content">
      <div className="main-content-header">
        <h1>Speech</h1>

        <div className="header-actions">
          <button className="header-action-button" onClick={speech}>
            <i className="fas fa-play" />
          </button>
        </div>
      </div>

      <input
        placeholder="Type here"
        value={text}
        onChange={ev => setText(ev.target.value)}
      />

      <select
        value={selectedVoice}
        onChange={ev => setSelectedVoice(ev.target.value)}
      >
        {voices.map((voice, index) => (
          <option key={index} value={index}>
            {voice.name}
          </option>
        ))}
      </select>
    </div>
  );
}
