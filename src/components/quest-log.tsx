"use client";

import { useState } from "react";

interface Quest {
  id: string;
  title: string;
  description: string;
  status: "active" | "completed" | "locked";
  rewards?: string[];
  link?: string;
}

interface QuestLogProps {
  quests: Quest[];
  title?: string;
}

export function QuestLog({ quests, title = "QUEST LOG" }: QuestLogProps) {
  const [selectedQuest, setSelectedQuest] = useState<Quest | null>(null);
  const [expandedQuest, setExpandedQuest] = useState<string | null>(null);

  const getStatusIcon = (status: Quest["status"]) => {
    switch (status) {
      case "completed":
        return (
          <div className="w-4 h-4 flex items-center justify-center text-secondary">
            <CheckIcon />
          </div>
        );
      case "locked":
        return (
          <div className="w-4 h-4 flex items-center justify-center text-muted-foreground">
            <LockIcon />
          </div>
        );
      default:
        return (
          <div className="w-3 h-3 bg-accent animate-pulse" />
        );
    }
  };

  const handleQuestClick = (quest: Quest) => {
    if (quest.status === "locked") return;
    setSelectedQuest(quest);
    setExpandedQuest(expandedQuest === quest.id ? null : quest.id);
  };

  return (
    <div className="relative bg-card border-4 border-primary">
      {/* Header */}
      <div className="bg-primary/20 border-b-4 border-primary px-4 py-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs text-primary">{title}</h3>
          <div className="flex gap-1">
            <span className="text-[8px] text-muted-foreground">
              {quests.filter((q) => q.status === "completed").length}/
              {quests.length}
            </span>
            <StarIcon />
          </div>
        </div>
      </div>

      {/* Quest list */}
      <div className="divide-y-2 divide-border">
        {quests.map((quest) => (
          <div
            key={quest.id}
            className={`p-4 cursor-pointer transition-colors ${
              quest.status === "locked"
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-muted/30"
            } ${selectedQuest?.id === quest.id ? "bg-muted/50" : ""}`}
            onClick={() => handleQuestClick(quest)}
          >
            <div className="flex items-start gap-3">
              {getStatusIcon(quest.status)}
              <div className="flex-1 min-w-0">
                <p
                  className={`text-[10px] ${
                    quest.status === "completed"
                      ? "text-muted-foreground line-through"
                      : "text-foreground"
                  }`}
                >
                  {quest.title}
                </p>

                {expandedQuest === quest.id && (
                  <div className="mt-3 space-y-3 animate-in slide-in-from-top-2">
                    <p className="text-[8px] text-muted-foreground leading-relaxed">
                      {quest.description}
                    </p>

                    {quest.rewards && quest.rewards.length > 0 && (
                      <div className="space-y-1">
                        <p className="text-[8px] text-primary">Rewards:</p>
                        <div className="flex flex-wrap gap-2">
                          {quest.rewards.map((reward, i) => (
                            <span
                              key={i}
                              className="text-[8px] bg-primary/20 text-primary px-2 py-1 border border-primary"
                            >
                              {reward}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {quest.link && quest.status !== "locked" && (
                      <a
                        href={quest.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[8px] text-accent hover:text-primary transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>[A] View Quest</span>
                        <ArrowIcon />
                      </a>
                    )}
                  </div>
                )}
              </div>
              <div className="text-[8px] text-muted-foreground">
                {expandedQuest === quest.id ? "[-]" : "[+]"}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Corner decorations */}
      <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary" />
      <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary" />
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary" />
      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary" />
    </div>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-3 h-3" fill="currentColor">
      <path d="M2 8L6 12L14 4L12 2L6 8L4 6L2 8Z" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-3 h-3" fill="currentColor">
      <path d="M4 6V4C4 2 6 0 8 0C10 0 12 2 12 4V6H14V16H2V6H4ZM6 4V6H10V4C10 3 9 2 8 2C7 2 6 3 6 4ZM7 10V13H9V10H7Z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-3 h-3 text-primary" fill="currentColor">
      <path d="M8 0L10 6H16L11 10L13 16L8 12L3 16L5 10L0 6H6L8 0Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-3 h-3" fill="currentColor">
      <path d="M2 7H12L8 3L10 1L16 8L10 15L8 13L12 9H2V7Z" />
    </svg>
  );
}
