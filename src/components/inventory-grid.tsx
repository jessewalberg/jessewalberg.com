"use client";

import { useState, type ReactNode } from "react";

interface InventoryItem {
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
  rarity: "common" | "rare" | "legendary";
}

interface InventoryGridProps {
  items: InventoryItem[];
  title: string;
}

export function InventoryGrid({ items, title }: InventoryGridProps) {
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);
  const [hoveredItem, setHoveredItem] = useState<InventoryItem | null>(null);

  const getRarityColor = (rarity: InventoryItem["rarity"]) => {
    switch (rarity) {
      case "legendary":
        return "border-primary bg-primary/20";
      case "rare":
        return "border-secondary bg-secondary/20";
      default:
        return "border-border bg-muted/50";
    }
  };

  const getRarityGlow = (rarity: InventoryItem["rarity"]) => {
    switch (rarity) {
      case "legendary":
        return "shadow-[0_0_20px_rgba(200,170,80,0.5)]";
      case "rare":
        return "shadow-[0_0_15px_rgba(80,140,80,0.4)]";
      default:
        return "";
    }
  };

  return (
    <div className="relative">
      {/* Main container */}
      <div className="bg-card border-4 border-primary p-4">
        {/* Title bar */}
        <div className="border-b-2 border-border pb-2 mb-4">
          <h3 className="text-xs text-primary text-center">{title}</h3>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {items.map((item) => (
            <button
              key={item.id}
              className={`aspect-square border-2 p-2 transition-all duration-200 hover:scale-105 ${getRarityColor(
                item.rarity
              )} ${
                selectedItem?.id === item.id
                  ? `ring-2 ring-primary ${getRarityGlow(item.rarity)}`
                  : ""
              }`}
              onClick={() => setSelectedItem(item)}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="w-full h-full flex items-center justify-center text-foreground">
                {item.icon}
              </div>
            </button>
          ))}
        </div>

        {/* Item description */}
        <div className="mt-4 border-t-2 border-border pt-4 min-h-[80px]">
          {(hoveredItem || selectedItem) && (
            <div className="space-y-1">
              <p className="text-[10px] text-primary">
                {(hoveredItem || selectedItem)?.name}
              </p>
              <p className="text-[8px] text-muted-foreground leading-relaxed">
                {(hoveredItem || selectedItem)?.description}
              </p>
            </div>
          )}
          {!hoveredItem && !selectedItem && (
            <p className="text-[8px] text-muted-foreground italic">
              Select an item to view details...
            </p>
          )}
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute -top-1 -left-1 w-3 h-3 border-t-4 border-l-4 border-primary" />
      <div className="absolute -top-1 -right-1 w-3 h-3 border-t-4 border-r-4 border-primary" />
      <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-4 border-l-4 border-primary" />
      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-4 border-r-4 border-primary" />
    </div>
  );
}
