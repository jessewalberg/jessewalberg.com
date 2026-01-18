"use client";

import { useEffect, useState } from "react";

interface Stat {
  name: string;
  value: number;
  maxValue: number;
  color: string;
}

interface StatsPanelProps {
  playerName: string;
  level: number;
  title: string;
  stats: Stat[];
  experience: number;
  maxExperience: number;
}

export function StatsPanel({
  playerName,
  level,
  title,
  stats,
  experience,
  maxExperience,
}: StatsPanelProps) {
  const [animatedStats, setAnimatedStats] = useState<Record<string, number>>({});

  useEffect(() => {
    // Animate stats on mount
    stats.forEach((stat) => {
      let current = 0;
      const increment = stat.value / 30;
      const interval = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(interval);
        }
        setAnimatedStats((prev) => ({ ...prev, [stat.name]: current }));
      }, 30);
    });
  }, [stats]);

  return (
    <div className="relative bg-card border-4 border-primary">
      {/* Header with player info */}
      <div className="bg-primary/20 border-b-4 border-primary p-4">
        <div className="flex items-center gap-4">
          {/* Pixel avatar placeholder */}
          <div className="w-16 h-16 border-2 border-primary bg-muted flex items-center justify-center">
            <div className="grid grid-cols-3 gap-[2px]">
              {/* Simple pixel face */}
              <div className="w-2 h-2" />
              <div className="w-2 h-2 bg-primary" />
              <div className="w-2 h-2" />
              <div className="w-2 h-2 bg-foreground" />
              <div className="w-2 h-2" />
              <div className="w-2 h-2 bg-foreground" />
              <div className="w-2 h-2" />
              <div className="w-2 h-2" />
              <div className="w-2 h-2" />
              <div className="w-2 h-2 bg-foreground" />
              <div className="w-2 h-2 bg-foreground" />
              <div className="w-2 h-2 bg-foreground" />
            </div>
          </div>

          <div className="flex-1">
            <p className="text-xs text-primary">{playerName}</p>
            <p className="text-[8px] text-muted-foreground mt-1">{title}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-[8px] text-foreground">LV</span>
              <span className="text-xs text-accent">{level}</span>
            </div>
          </div>
        </div>

        {/* Experience bar */}
        <div className="mt-4">
          <div className="flex justify-between text-[8px] text-muted-foreground mb-1">
            <span>EXP</span>
            <span>
              {experience}/{maxExperience}
            </span>
          </div>
          <div className="h-2 bg-muted border border-border">
            <div
              className="h-full bg-primary transition-all duration-1000"
              style={{ width: `${(experience / maxExperience) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="p-4 space-y-3">
        {stats.map((stat) => (
          <div key={stat.name}>
            <div className="flex justify-between text-[8px] mb-1">
              <span className="text-foreground">{stat.name}</span>
              <span className="text-muted-foreground">
                {Math.round(animatedStats[stat.name] || 0)}/{stat.maxValue}
              </span>
            </div>
            <div className="h-3 bg-muted border border-border relative">
              <div
                className="h-full transition-all duration-1000"
                style={{
                  width: `${((animatedStats[stat.name] || 0) / stat.maxValue) * 100}%`,
                  backgroundColor: stat.color,
                }}
              />
              {/* Pixel segments */}
              <div className="absolute inset-0 flex">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 border-r border-background/30 last:border-r-0"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hearts display */}
      <div className="border-t-2 border-border p-4">
        <div className="flex items-center gap-2">
          <span className="text-[8px] text-accent">LIFE</span>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <HeartIcon key={i} filled={i < 4} />
            ))}
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary" />
      <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary" />
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary" />
      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary" />
    </div>
  );
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg viewBox="0 0 16 16" className="w-4 h-4">
      <path
        d="M8 14L2 8V4L4 2H6L8 4L10 2H12L14 4V8L8 14Z"
        fill={filled ? "oklch(0.55 0.15 25)" : "oklch(0.18 0.03 140)"}
        stroke="oklch(0.55 0.15 25)"
        strokeWidth="1"
      />
    </svg>
  );
}
