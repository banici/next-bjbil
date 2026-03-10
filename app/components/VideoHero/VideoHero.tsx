'use client';

import { useEffect, useRef, useState } from 'react';
import './videoHero.css';

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentWord, setCurrentWord] = useState('');
  
  useEffect(() => {
    // Dynamic word animation
    const words = ['BMW', 'MINI', 'TESLA', 'Audi', 'VW'];
    let index = 0;
    
    const interval = setInterval(() => {
      setCurrentWord(words[index]);
      index = (index + 1) % words.length;
    }, 2000);
    
    // Ensure video plays
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Autoplay prevented:', error);
      });
    }
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="video-container">
      <div className="intro-box">
        <p id="dynamic-sentence" aria-live="polite">
          Fristående specialister på
        </p>
        <span id="last-word" aria-live="polite" aria-atomic="true">
          {currentWord}
        </span>
      </div>
      
      <video
        ref={videoRef}
        id="video1"
        muted
        autoPlay
        playsInline
        loop
        preload="auto"
        aria-label="Introduktionsvideo som visar vår verkstad och tjänster"
      >
        <source src="/videos/indexIntro.MP4" type="video/mp4" />
        <p>
          Din webbläsare stöder inte videouppspelning.
          <a href="/om-oss">Läs mer om våra tjänster här</a>.
        </p>
      </video>
    </div>
  );
}