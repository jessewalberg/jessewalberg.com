"use client";

import { useState } from "react";

interface Location {
  id: string;
  name: string;
  description: string;
  x: number;
  y: number;
  unlocked: boolean;
  current?: boolean;
}

interface WorldMapProps {
  locations: Location[];
  onLocationSelect?: (location: Location) => void;
}

export function WorldMap({ locations, onLocationSelect }: WorldMapProps) {
  const [hoveredLocation, setHoveredLocation] = useState<Location | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    locations.find((l) => l.current) || null
  );

  const handleLocationClick = (location: Location) => {
    if (!location.unlocked) return;
    setSelectedLocation(location);
    onLocationSelect?.(location);
  };

  return (
    <div className="relative bg-card border-4 border-primary">
      {/* Header */}
      <div className="bg-primary/20 border-b-4 border-primary px-4 py-3">
        <h3 className="text-xs text-primary text-center">WORLD MAP</h3>
      </div>

      {/* Map area */}
      <div className="relative aspect-video bg-muted/30 m-4 border-2 border-border overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, oklch(0.35 0.08 100) 1px, transparent 1px),
              linear-gradient(to bottom, oklch(0.35 0.08 100) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Decorative terrain elements */}
        <div className="absolute top-[10%] left-[5%] w-8 h-8 bg-secondary/30 border border-secondary" />
        <div className="absolute top-[20%] left-[15%] w-6 h-6 bg-secondary/20 border border-secondary/50" />
        <div className="absolute bottom-[30%] right-[10%] w-10 h-6 bg-secondary/30 border border-secondary" />
        <div className="absolute top-[50%] left-[40%] w-12 h-8 bg-muted border border-border" />

        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {locations.map((loc, i) => {
            const nextLoc = locations[i + 1];
            if (!nextLoc) return null;
            return (
              <line
                key={`line-${loc.id}`}
                x1={`${loc.x}%`}
                y1={`${loc.y}%`}
                x2={`${nextLoc.x}%`}
                y2={`${nextLoc.y}%`}
                stroke={loc.unlocked && nextLoc.unlocked ? "oklch(0.75 0.18 100)" : "oklch(0.35 0.08 100)"}
                strokeWidth="2"
                strokeDasharray={loc.unlocked && nextLoc.unlocked ? "0" : "4"}
                opacity={0.5}
              />
            );
          })}
        </svg>

        {/* Locations */}
        {locations.map((location) => (
          <button
            key={location.id}
            className={`absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
              location.unlocked
                ? "cursor-pointer hover:scale-125"
                : "cursor-not-allowed opacity-50"
            } ${
              selectedLocation?.id === location.id
                ? "scale-125"
                : ""
            }`}
            style={{ left: `${location.x}%`, top: `${location.y}%` }}
            onClick={() => handleLocationClick(location)}
            onMouseEnter={() => setHoveredLocation(location)}
            onMouseLeave={() => setHoveredLocation(null)}
          >
            {location.current ? (
              <div className="w-full h-full relative">
                <div className="absolute inset-0 bg-accent animate-pulse" />
                <div className="absolute inset-1 bg-primary" />
              </div>
            ) : location.unlocked ? (
              <div className="w-full h-full bg-primary border-2 border-primary shadow-[0_0_10px_rgba(200,170,80,0.5)]" />
            ) : (
              <div className="w-full h-full bg-muted border-2 border-border" />
            )}
          </button>
        ))}

        {/* Hover tooltip */}
        {hoveredLocation && (
          <div
            className="absolute z-10 bg-card border-2 border-primary p-2 pointer-events-none"
            style={{
              left: `${Math.min(hoveredLocation.x + 5, 70)}%`,
              top: `${hoveredLocation.y}%`,
            }}
          >
            <p className="text-[8px] text-primary whitespace-nowrap">
              {hoveredLocation.name}
            </p>
            {!hoveredLocation.unlocked && (
              <p className="text-[6px] text-muted-foreground">[LOCKED]</p>
            )}
          </div>
        )}
      </div>

      {/* Selected location info */}
      <div className="border-t-2 border-border p-4 min-h-[60px]">
        {selectedLocation ? (
          <div className="space-y-1">
            <p className="text-[10px] text-primary">{selectedLocation.name}</p>
            <p className="text-[8px] text-muted-foreground">
              {selectedLocation.description}
            </p>
          </div>
        ) : (
          <p className="text-[8px] text-muted-foreground italic">
            Select a location on the map...
          </p>
        )}
      </div>

      {/* Corner decorations */}
      <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary" />
      <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary" />
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary" />
      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary" />
    </div>
  );
}
