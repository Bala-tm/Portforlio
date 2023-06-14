import React, { useState } from 'react';

const TextToVoice = () => {
  const [text, setText] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speakText = () => {
    if (!text) {
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to speak"
      />
      <div>
        <button onClick={speakText} disabled={isSpeaking}>
          Speak
        </button>
        <button onClick={stopSpeaking} disabled={!isSpeaking}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default TextToVoice;
