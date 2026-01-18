"use client";

import { QuestLog } from "./quest-log";

const projects = [
  {
    id: "quest-1",
    title: "The E-Commerce Dungeon",
    description: "Built a full-stack e-commerce platform with real-time inventory, payment processing, and admin dashboard. Defeated the boss of slow load times with SSR and caching strategies.",
    status: "completed" as const,
    rewards: ["React", "Node.js", "PostgreSQL", "Stripe"],
    link: "#",
  },
  {
    id: "quest-2",
    title: "The Real-Time Fortress",
    description: "Created a collaborative workspace application with real-time document editing, video chat, and team management. Mastered the WebSocket arts.",
    status: "completed" as const,
    rewards: ["Next.js", "Socket.io", "WebRTC", "Redis"],
    link: "#",
  },
  {
    id: "quest-3",
    title: "The AI Companion Quest",
    description: "Developed an AI-powered assistant that helps developers write better code. Integrated multiple LLM providers and built a plugin system.",
    status: "completed" as const,
    rewards: ["Python", "OpenAI", "LangChain", "FastAPI"],
    link: "#",
  },
  {
    id: "quest-4",
    title: "The Mobile Kingdom",
    description: "Crafted a cross-platform mobile application for fitness tracking with offline sync, health integrations, and social features.",
    status: "active" as const,
    rewards: ["React Native", "TypeScript", "Firebase"],
    link: "#",
  },
  {
    id: "quest-5",
    title: "The Blockchain Frontier",
    description: "Exploring the uncharted territories of Web3, smart contracts, and decentralized applications. Coming soon...",
    status: "locked" as const,
    rewards: ["Solidity", "Ethereum", "IPFS"],
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 relative"
    >
      {/* Section title */}
      <div className="text-center mb-12">
        <div className="inline-block relative">
          <h2 className="text-lg md:text-xl text-primary px-8 py-2 border-4 border-primary bg-card">
            COMPLETED QUESTS
          </h2>
          <div className="absolute -top-1 -left-1 w-3 h-3 bg-primary" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-primary" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary" />
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <QuestLog quests={projects} title="PROJECT QUESTS" />

        {/* Achievement counter */}
        <div className="mt-8 flex justify-center">
          <div className="relative bg-card border-4 border-primary px-8 py-4">
            <div className="flex items-center gap-4">
              <div className="text-center">
                <p className="text-2xl text-primary">
                  {projects.filter((p) => p.status === "completed").length}
                </p>
                <p className="text-[8px] text-muted-foreground">COMPLETED</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center">
                <p className="text-2xl text-accent">
                  {projects.filter((p) => p.status === "active").length}
                </p>
                <p className="text-[8px] text-muted-foreground">ACTIVE</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center">
                <p className="text-2xl text-muted-foreground">
                  {projects.filter((p) => p.status === "locked").length}
                </p>
                <p className="text-[8px] text-muted-foreground">LOCKED</p>
              </div>
            </div>

            {/* Corner decorations */}
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
