"use client";

import { QuestLog } from "./quest-log";

const projects = [
  {
    id: "quest-1",
    title: "The LLM Colosseum",
    description: "Constructed an arena where AI titans battle for supremacy on the legendary Monopoly board. Claude, GPT, Gemini, and Grok clash hourly in automated duels, their every strategic thought laid bare for spectators to witness.",
    status: "completed" as const,
    rewards: ["React 19", "Convex", "OpenRouter", "TanStack"],
    link: "https://monopoly-llm.jessewalberg.com",
  },
  {
    id: "quest-2",
    title: "The Tribunal of Judgment",
    description: "Summoned a council of 4 AI judges to preside over moral dilemmas. Each arbiter brings their own wisdom—empathy, logic, pragmatism, and skepticism—before a Chief Judge renders the final verdict on who bears the mark of the A-hole.",
    status: "completed" as const,
    rewards: ["TanStack Start", "Convex", "WorkOS", "Cloudflare"],
    link: "https://aita.jessewalberg.com",
  },
  {
    id: "quest-3",
    title: "The Scroll Forge",
    description: "Enchanted a quill that transforms job seekers' tales into persuasive cover letter scrolls. Over 2.5 million scrolls conjured, with 89% of wielders securing audience with their desired guild masters. A 30-second incantation that changes fates.",
    status: "completed" as const,
    rewards: ["Next.js", "Convex", "OpenAI", "Stripe"],
    link: "https://applyingmyself.com",
  },
  {
    id: "quest-4",
    title: "The Messenger Familiar",
    description: "Summoning an AI familiar that answers the calls of busy tradesmen. When a laborer's hands are full of tools, the familiar awakens—texting patrons, scheduling appointments, and ensuring no coin is lost to missed opportunities.",
    status: "active" as const,
    rewards: ["Twilio", "AI Voice", "Scheduling", "SMS"],
    link: "#",
  },
  {
    id: "quest-5",
    title: "The Unknown Frontier",
    description: "New adventures await in uncharted territories. What legendary systems shall be forged next?",
    status: "locked" as const,
    rewards: ["???", "???", "???"],
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
