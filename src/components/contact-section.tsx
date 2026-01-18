"use client";

import { useState } from "react";
import { DialogueBox } from "./dialogue-box";

const contactLinks = [
  { name: "GITHUB", url: "https://github.com/jessewalberg", icon: "GH" },
  { name: "LINKEDIN", url: "https://linkedin.com/in/jessewalberg", icon: "LI" },
  { name: "EMAIL", url: "mailto:jessewalberg@gmail.com", icon: "EM" },
];

export function ContactSection() {
  const [showDialogue, setShowDialogue] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText("jessewalberg@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-4 relative flex flex-col items-center justify-center"
    >
      {/* Section title */}
      <div className="text-center mb-12">
        <div className="inline-block relative">
          <h2 className="text-lg md:text-xl text-primary px-8 py-2 border-4 border-primary bg-card">
            JOIN THE GUILD
          </h2>
          <div className="absolute -top-1 -left-1 w-3 h-3 bg-primary" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-primary" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary" />
        </div>
      </div>

      <div className="max-w-2xl w-full space-y-8">
        {/* Dialogue */}
        {showDialogue && (
          <DialogueBox
            text="Greetings, fellow adventurer! If you seek to collaborate on epic quests or wish to join forces, use the communication crystals below to reach me. Together, we can build legendary applications!"
            speaker="GUILD MASTER"
            onComplete={() => setShowDialogue(false)}
            showContinue={false}
          />
        )}

        {/* Contact links */}
        <div className="relative bg-card border-4 border-primary p-6">
          <h3 className="text-xs text-primary mb-6 text-center">
            COMMUNICATION CRYSTALS
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 p-4 border-2 border-border hover:border-primary bg-muted/30 hover:bg-primary/10 transition-all duration-200"
              >
                <div className="w-12 h-12 border-2 border-primary bg-card flex items-center justify-center text-xs text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {link.icon}
                </div>
                <span className="text-[8px] text-muted-foreground group-hover:text-primary">
                  {link.name}
                </span>
              </a>
            ))}
          </div>

          {/* Corner decorations */}
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary" />
        </div>

        {/* Quick email copy */}
        <div className="flex justify-center">
          <button
            onClick={handleCopyEmail}
            className="relative bg-card border-4 border-primary px-6 py-3 hover:bg-primary/10 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-foreground group-hover:text-primary">
                {copied ? "SCROLL COPIED!" : "jessewalberg@gmail.com"}
              </span>
              <span className="text-[8px] text-muted-foreground">
                [CLICK TO COPY]
              </span>
            </div>

            {/* Corner decorations */}
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary" />
          </button>
        </div>

        {/* Footer message */}
        <div className="text-center pt-8">
          <p className="text-[8px] text-muted-foreground">
            QUEST FOR CODE - 2026
          </p>
          <p className="text-[8px] text-muted-foreground mt-2">
            Made with determination and countless cups of potion
          </p>
        </div>
      </div>
    </section>
  );
}
