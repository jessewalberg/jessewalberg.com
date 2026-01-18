"use client";

import { useState, useEffect, useCallback } from "react";

interface GameIntroProps {
  onComplete: () => void;
}

export function GameIntro({ onComplete }: GameIntroProps) {
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [blinkVisible, setBlinkVisible] = useState(true);

  useEffect(() => {
    const titleTimer = setTimeout(() => setShowTitle(true), 500);
    const subtitleTimer = setTimeout(() => setShowSubtitle(true), 1500);
    const promptTimer = setTimeout(() => setShowPrompt(true), 2500);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(subtitleTimer);
      clearTimeout(promptTimer);
    };
  }, []);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinkVisible((prev) => !prev);
    }, 530);
    return () => clearInterval(blinkInterval);
  }, []);

  const handleStart = useCallback(() => {
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (showPrompt && (e.key === "Enter" || e.key === " ")) {
        handleStart();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [showPrompt, handleStart]);

  return (
    <div
      className="fixed inset-0 bg-background flex flex-col items-center justify-center z-50 cursor-pointer"
      onClick={showPrompt ? handleStart : undefined}
    >
      {/* Decorative pixel border */}
      <div className="absolute inset-4 border-4 border-primary opacity-50" />
      <div className="absolute inset-6 border-2 border-primary opacity-30" />

      {/* Triforce-inspired decoration */}
      <div className="absolute top-16 flex gap-1">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-4 h-4 bg-primary rotate-45 animate-pulse"
            style={{ animationDelay: `${i * 200}ms` }}
          />
        ))}
      </div>

      {/* Main title */}
      <div className="text-center space-y-8">
        <h1
          className={`text-2xl md:text-4xl lg:text-5xl text-primary tracking-wider transition-all duration-1000 ${
            showTitle
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-8"
          }`}
        >
          QUEST FOR CODE
        </h1>

        <p
          className={`text-xs md:text-sm text-secondary-foreground transition-all duration-1000 ${
            showSubtitle
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          A Developer&apos;s Adventure
        </p>

        {/* Health bar decoration */}
        <div
          className={`flex items-center justify-center gap-2 transition-all duration-500 ${
            showSubtitle ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-[8px] text-accent">LIFE</span>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-4 relative">
                <HeartIcon filled />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Start prompt */}
      <div
        className={`absolute bottom-24 transition-all duration-500 ${
          showPrompt ? "opacity-100" : "opacity-0"
        }`}
      >
        <p
          className={`text-[10px] md:text-xs text-foreground tracking-widest ${
            blinkVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          - PRESS START -
        </p>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-8 flex gap-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 bg-border"
          />
        ))}
      </div>
    </div>
  );
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg viewBox="0 0 16 16" className="w-4 h-4">
      <path
        d="M8 14L2 8V4L4 2H6L8 4L10 2H12L14 4V8L8 14Z"
        fill={filled ? "oklch(0.55 0.15 25)" : "transparent"}
        stroke="oklch(0.55 0.15 25)"
        strokeWidth="1"
      />
    </svg>
  );
}
