"use client";

import { useState, useEffect } from "react";
import { DialogueBox } from "./dialogue-box";

const heroDialogues = [
  "Greetings, brave visitor! You have entered the realm of a seasoned Code Warrior.",
  "For years, I have battled bugs, conquered complex algorithms, and forged powerful applications.",
  "My arsenal includes the ancient arts of JavaScript, the mystical powers of React, and the legendary frameworks of the modern web.",
  "Scroll down to discover my Skills, explore my completed Quests, and learn how we might join forces!",
];

export function HeroSection() {
  const [currentDialogue, setCurrentDialogue] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleDialogueComplete = () => {
    if (currentDialogue < heroDialogues.length - 1) {
      setCurrentDialogue((prev) => prev + 1);
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, oklch(0.75 0.18 100) 1px, transparent 1px),
            linear-gradient(to bottom, oklch(0.75 0.18 100) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating decorations */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary animate-bounce" style={{ animationDelay: "0s" }} />
      <div className="absolute top-40 right-20 w-3 h-3 bg-secondary animate-bounce" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-40 left-20 w-5 h-5 bg-accent animate-bounce" style={{ animationDelay: "1s" }} />

      <div
        className={`relative z-10 max-w-2xl w-full space-y-8 transition-all duration-1000 ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Title area */}
        <div className="text-center space-y-4">
          <div className="flex justify-center gap-2 mb-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 bg-primary rotate-45"
                style={{ animationDelay: `${i * 200}ms` }}
              />
            ))}
          </div>

          <h1 className="text-xl md:text-3xl text-primary">
            CODE WARRIOR
          </h1>
          <p className="text-[10px] text-muted-foreground">
            Software Engineer • Level 99
          </p>

          {/* Health/mana display */}
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <span className="text-[8px] text-accent">HP</span>
              <div className="flex gap-[2px]">
                {[...Array(5)].map((_, i) => (
                  <HeartIcon key={i} />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[8px] text-secondary">MP</span>
              <div className="w-20 h-3 bg-muted border border-border">
                <div className="h-full w-full bg-secondary" />
              </div>
            </div>
          </div>
        </div>

        {/* Dialogue box */}
        <div className="mt-12">
          <DialogueBox
            text={heroDialogues[currentDialogue]}
            speaker="SAGE"
            onComplete={handleDialogueComplete}
            showContinue={currentDialogue < heroDialogues.length - 1}
          />
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2 mt-8">
          <p className="text-[8px] text-muted-foreground animate-pulse">
            [SCROLL TO CONTINUE]
          </p>
          <div className="w-4 h-6 border-2 border-primary flex justify-center pt-1">
            <div className="w-1 h-2 bg-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-4 h-4">
      <path
        d="M8 14L2 8V4L4 2H6L8 4L10 2H12L14 4V8L8 14Z"
        fill="oklch(0.55 0.15 25)"
        stroke="oklch(0.55 0.15 25)"
        strokeWidth="1"
      />
    </svg>
  );
}
