"use client";

import { useState, useEffect } from "react";

interface DialogueBoxProps {
  text: string;
  speaker?: string;
  onComplete?: () => void;
  typingSpeed?: number;
  showContinue?: boolean;
}

export function DialogueBox({
  text,
  speaker,
  onComplete,
  typingSpeed = 30,
  showContinue = true,
}: DialogueBoxProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [blinkVisible, setBlinkVisible] = useState(true);

  useEffect(() => {
    setDisplayedText("");
    setIsComplete(false);
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [text, typingSpeed]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinkVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  const handleClick = () => {
    if (isComplete && onComplete) {
      onComplete();
    } else if (!isComplete) {
      setDisplayedText(text);
      setIsComplete(true);
    }
  };

  return (
    <div
      className="relative bg-card border-4 border-primary p-4 cursor-pointer select-none"
      onClick={handleClick}
    >
      {/* Corner decorations */}
      <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary" />
      <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary" />
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary" />
      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary" />

      {/* Inner border */}
      <div className="absolute inset-2 border-2 border-border pointer-events-none" />

      {speaker && (
        <div className="absolute -top-4 left-4 bg-card px-2 border-2 border-primary">
          <span className="text-[10px] text-primary">{speaker}</span>
        </div>
      )}

      <div className="relative z-10 p-2">
        <p className="text-[10px] md:text-xs leading-relaxed text-foreground min-h-[3rem]">
          {displayedText}
          {!isComplete && <span className="text-primary animate-pulse">_</span>}
        </p>

        {showContinue && isComplete && (
          <div className="flex justify-end mt-2">
            <span
              className={`text-[8px] text-primary ${
                blinkVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              [A] Continue
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
