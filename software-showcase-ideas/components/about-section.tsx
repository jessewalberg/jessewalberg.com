"use client";

import { StatsPanel } from "./stats-panel";
import { WorldMap } from "./world-map";

const playerStats = [
  { name: "STRENGTH", value: 85, maxValue: 100, color: "oklch(0.55 0.15 25)" },
  { name: "INTELLIGENCE", value: 95, maxValue: 100, color: "oklch(0.60 0.10 200)" },
  { name: "CREATIVITY", value: 90, maxValue: 100, color: "oklch(0.70 0.12 320)" },
  { name: "TEAMWORK", value: 88, maxValue: 100, color: "oklch(0.45 0.12 140)" },
];

const careerLocations = [
  {
    id: "origin",
    name: "Village of Origins",
    description: "Where the coding journey began. Learned the basics of HTML, CSS, and JavaScript.",
    x: 15,
    y: 70,
    unlocked: true,
  },
  {
    id: "academy",
    name: "The Code Academy",
    description: "Mastered advanced programming concepts and earned the title of Full-Stack Developer.",
    x: 35,
    y: 45,
    unlocked: true,
  },
  {
    id: "startup",
    name: "Startup Stronghold",
    description: "Battled tight deadlines and launched products that reached thousands of users.",
    x: 55,
    y: 60,
    unlocked: true,
  },
  {
    id: "enterprise",
    name: "Enterprise Empire",
    description: "Led engineering teams and architected scalable solutions for millions.",
    x: 75,
    y: 35,
    unlocked: true,
    current: true,
  },
  {
    id: "future",
    name: "The Unknown Frontier",
    description: "What adventures await? The next chapter is yet to be written...",
    x: 90,
    y: 50,
    unlocked: false,
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 relative"
    >
      {/* Section title */}
      <div className="text-center mb-12">
        <div className="inline-block relative">
          <h2 className="text-lg md:text-xl text-primary px-8 py-2 border-4 border-primary bg-card">
            CHARACTER PROFILE
          </h2>
          <div className="absolute -top-1 -left-1 w-3 h-3 bg-primary" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-primary" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Stats Panel */}
        <StatsPanel
          playerName="YOUR NAME"
          level={99}
          title="Full-Stack Code Warrior"
          stats={playerStats}
          experience={8500}
          maxExperience={10000}
        />

        {/* World Map / Career Journey */}
        <WorldMap locations={careerLocations} />
      </div>

      {/* Bio text */}
      <div className="max-w-2xl mx-auto mt-12">
        <div className="relative bg-card border-4 border-primary p-6">
          <h3 className="text-xs text-primary mb-4">BACKSTORY</h3>
          <p className="text-[10px] text-foreground leading-relaxed">
            Born with an innate curiosity for how things work, this Code Warrior
            discovered the magic of programming at a young age. What started as
            simple HTML pages evolved into a passion for creating digital
            experiences that impact lives.
          </p>
          <p className="text-[10px] text-foreground leading-relaxed mt-4">
            Through countless battles with legacy code, victorious deployments,
            and the forging of new technologies, they have become a seasoned
            warrior ready to take on any challenge.
          </p>

          {/* Corner decorations */}
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary" />
        </div>
      </div>
    </section>
  );
}
