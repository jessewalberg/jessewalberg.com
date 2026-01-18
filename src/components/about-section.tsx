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
    name: "The Academy",
    description: "Earned B.S. in Computer Science from Western Governors University. Mastered programming fundamentals.",
    x: 30,
    y: 50,
    unlocked: true,
  },
  {
    id: "ecommerce",
    name: "Boots Plus More",
    description: "Technical Lead in Austin. Built and scaled e-commerce from $0 to $4M on Amazon. Led a team of 5 engineers.",
    x: 50,
    y: 65,
    unlocked: true,
  },
  {
    id: "enterprise",
    name: "Travelers Insurance",
    description: "Tech Lead in Hartford. Migrated 25+ microservices to AWS EKS. Architected cloud-native solutions with Terraform.",
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
          playerName="JESSE WALBERG"
          level={99}
          title="Tech Lead • Cloud Architect"
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
            This Code Warrior began their quest in the bustling marketplaces of Austin,
            where they forged an e-commerce empire from nothing, commanding a guild of
            5 engineers and amassing 4 million gold pieces through the Amazon trade routes.
          </p>
          <p className="text-[10px] text-foreground leading-relaxed mt-4">
            Now stationed at the great fortress of Hartford, they lead expeditions through
            the treacherous Cloud Realms, having successfully migrated 25 ancient services
            to the legendary AWS EKS infrastructure. A master of Terraform sorcery and
            product-minded strategy, they translate the cryptic scrolls of business needs
            into powerful, scalable architectures.
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
