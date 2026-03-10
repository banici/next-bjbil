'use client';
import { useEffect, useRef, useState } from 'react';
import './videoHero.css';

const WORDS = ['BMW', 'MINI', 'TESLA', 'VAG'];

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentWord, setCurrentWord] = useState(WORDS[0]);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;

    const attemptPlay = () => {
      // iOS needs explicit load() before play()
      video.load();
      video.play().catch(() => {});
    };

    if (video.readyState >= 2) {
      // Already loaded enough to play
      attemptPlay();
    } else {
      // Wait for canplay event — more reliable than readyState on iOS
      video.addEventListener('canplay', attemptPlay, { once: true });
    }

    // iOS Safari resumes after interruptions (calls, etc.)
    const handleVisibility = () => {
      if (!document.hidden) {
        video.play().catch(() => {});
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;

    let index = 1;
    const interval = setInterval(() => {
      setCurrentWord(WORDS[index]);
      index = (index + 1) % WORDS.length;
    }, 3000);

    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <section
      className="video-container"
      role="region"
      aria-label="Introduktionssektion"
    >
      <div
        className="intro-box"
        aria-live="polite"
        aria-atomic="true"
        aria-label={`Fristående specialister på ${currentWord}`}
      >
        <p id="dynamic-sentence">Fristående specialister på</p>
        <span id="last-word" aria-hidden="true">{currentWord}</span>
      </div>

      <video
        ref={videoRef}
        muted
        autoPlay
        playsInline
        loop
        preload="auto"       // changed from "metadata" — more reliable on iOS
        role="presentation"
        aria-hidden="true"
        // iOS Safari requires these as direct HTML attributes
        {...({ 'webkit-playsinline': 'true' } as any)}
      >
        {/* Serve both formats — iOS prefers mp4 but be explicit */}
        <source src="/videos/indexIntro.MP4" type="video/mp4" />
      </video>
    </section>
  );
}