"use client";

import { useState, useEffect } from "react";

interface GameNavProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: "hero", label: "START", icon: "★" },
  { id: "about", label: "PROFILE", icon: "◆" },
  { id: "skills", label: "SKILLS", icon: "▲" },
  { id: "projects", label: "QUESTS", icon: "■" },
  { id: "contact", label: "GUILD", icon: "●" },
];

export function GameNav({ currentSection, onNavigate }: GameNavProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      <div className="relative bg-card border-4 border-primary px-2 py-2">
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-3 py-2 text-[8px] transition-all duration-200 flex items-center gap-1 ${
                currentSection === item.id
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              <span className="hidden md:inline">{item.icon}</span>
              <span className="hidden sm:inline">{item.label}</span>
              <span className="sm:hidden">{item.icon}</span>
            </button>
          ))}
        </div>

        {/* Corner decorations */}
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary" />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary" />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary" />
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary" />
      </div>
    </nav>
  );
}
