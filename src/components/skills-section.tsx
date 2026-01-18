"use client";

import { InventoryGrid } from "./inventory-grid";

const skills = [
  {
    id: "react",
    name: "REACT SWORD",
    description: "A legendary blade forged in the fires of component-based architecture. Grants +50 to UI building speed.",
    icon: <ReactIcon />,
    rarity: "legendary" as const,
  },
  {
    id: "typescript",
    name: "TYPESCRIPT SHIELD",
    description: "An ancient shield that protects against runtime errors. Provides type-safe defense.",
    icon: <TypeScriptIcon />,
    rarity: "legendary" as const,
  },
  {
    id: "nextjs",
    name: "NEXT.JS ARMOR",
    description: "Enchanted armor that enables SSR, SSG, and API routes. Full-stack protection.",
    icon: <NextIcon />,
    rarity: "legendary" as const,
  },
  {
    id: "nodejs",
    name: "NODE.JS STAFF",
    description: "A powerful staff for casting backend spells. Non-blocking magic at its finest.",
    icon: <NodeIcon />,
    rarity: "rare" as const,
  },
  {
    id: "python",
    name: "PYTHON WAND",
    description: "Versatile wand for data magic and automation spells. Simple yet powerful.",
    icon: <PythonIcon />,
    rarity: "rare" as const,
  },
  {
    id: "postgres",
    name: "POSTGRES TOME",
    description: "Ancient tome containing all knowledge of relational databases and SQL queries.",
    icon: <DatabaseIcon />,
    rarity: "rare" as const,
  },
  {
    id: "docker",
    name: "DOCKER BOOTS",
    description: "Magical boots that let you run anywhere. Container-ized mobility.",
    icon: <DockerIcon />,
    rarity: "rare" as const,
  },
  {
    id: "git",
    name: "GIT TIME GEM",
    description: "A gem that allows you to travel through code history. Branch and merge realities.",
    icon: <GitIcon />,
    rarity: "common" as const,
  },
  {
    id: "tailwind",
    name: "TAILWIND CLOAK",
    description: "A utility cloak with thousands of class-based enchantments for styling.",
    icon: <TailwindIcon />,
    rarity: "rare" as const,
  },
  {
    id: "aws",
    name: "AWS CLOUD RING",
    description: "Ring that summons cloud infrastructure. Deploy anywhere in the realm.",
    icon: <CloudIcon />,
    rarity: "legendary" as const,
  },
  {
    id: "terraform",
    name: "TERRAFORM GRIMOIRE",
    description: "Ancient spellbook for infrastructure as code. Conjure entire realms with a single incantation.",
    icon: <TerraformIcon />,
    rarity: "legendary" as const,
  },
  {
    id: "eks",
    name: "EKS HELM",
    description: "Enchanted helm for orchestrating container fleets. Commands Kubernetes armies across the cloud.",
    icon: <KubernetesIcon />,
    rarity: "legendary" as const,
  },
  {
    id: "graphql",
    name: "GRAPHQL AMULET",
    description: "Amulet that allows precise data fetching. Query only what you need.",
    icon: <GraphQLIcon />,
    rarity: "common" as const,
  },
  {
    id: "testing",
    name: "JEST POTION",
    description: "Potion that reveals bugs before they cause harm. Test-driven defense.",
    icon: <PotionIcon />,
    rarity: "common" as const,
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-4 relative"
    >
      {/* Section title */}
      <div className="text-center mb-12">
        <div className="inline-block relative">
          <h2 className="text-lg md:text-xl text-primary px-8 py-2 border-4 border-primary bg-card">
            SKILL INVENTORY
          </h2>
          <div className="absolute -top-1 -left-1 w-3 h-3 bg-primary" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-primary" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <InventoryGrid items={skills} title="EQUIPPED SKILLS" />

        {/* Legend */}
        <div className="mt-8 flex justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-primary bg-primary/20" />
            <span className="text-[8px] text-muted-foreground">LEGENDARY</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-secondary bg-secondary/20" />
            <span className="text-[8px] text-muted-foreground">RARE</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-border bg-muted/50" />
            <span className="text-[8px] text-muted-foreground">COMMON</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Pixel art style icons
function ReactIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-6 h-6" fill="currentColor">
      <circle cx="8" cy="8" r="2" />
      <ellipse cx="8" cy="8" rx="7" ry="3" fill="none" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="8" cy="8" rx="7" ry="3" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 8 8)" />
      <ellipse cx="8" cy="8" rx="7" ry="3" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 8 8)" />
    </svg>
  );
}

function TypeScriptIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-6 h-6" fill="currentColor">
      <rect x="1" y="1" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1" />
      <text x="4" y="12" fontSize="8" fontWeight="bold">TS</text>
    </svg>
  );
}

function NextIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-6 h-6" fill="currentColor">
      <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1" />
      <text x="4" y="11" fontSize="6" fontWeight="bold">N</text>
    </svg>
  );
}

function NodeIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-6 h-6" fill="currentColor">
      <polygon points="8,1 15,5 15,11 8,15 1,11 1,5" fill="none" stroke="currentColor" strokeWidth="1" />
      <text x="5" y="10" fontSize="5">JS</text>
    </svg>
  );
}

function PythonIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-6 h-6" fill="currentColor">
      <path d="M4 2H12V6H8V8H12V14H4V10H8V8H4V2Z" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-6 h-6" fill="currentColor">
      <ellipse cx="8" cy="3" rx="6" ry="2" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M2 3V13C2 14 4.5 15 8 15C11.5 15 14 14 14 13V3" fill="none" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="8" cy="8" rx="6" ry="2" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function DockerIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-6 h-6" fill="currentColor">
      <rect x="2" y="6" width="12" height="8" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="4" y="8" width="2" height="2" />
      <rect x="7" y="8" width="2" height="2" />
      <rect x="10" y="8" width="2" height="2" />
      <rect x="4" y="3" width="2" height="3" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function GitIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-6 h-6" fill="currentColor">
      <circle cx="4" cy="4" r="2" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="12" cy="4" r="2" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="8" cy="12" r="2" fill="none" stroke="currentColor" strokeWidth="1" />
      <line x1="4" y1="6" x2="4" y2="10" stroke="currentColor" strokeWidth="1" />
      <line x1="4" y1="10" x2="8" y2="10" stroke="currentColor" strokeWidth="1" />
      <line x1="12" y1="6" x2="12" y2="10" stroke="currentColor" strokeWidth="1" />
      <line x1="12" y1="10" x2="8" y2="10" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function TailwindIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-6 h-6" fill="currentColor">
      <path d="M4 6C5 4 7 4 8 6C9 8 11 8 12 6" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M4 10C5 8 7 8 8 10C9 12 11 12 12 10" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-6 h-6" fill="currentColor">
      <path d="M4 12H12C14 12 15 10 15 8C15 6 13 5 12 5C12 3 10 2 8 2C5 2 3 4 3 6C1 6 0 8 0 10C0 12 2 12 4 12Z" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function TerraformIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-6 h-6" fill="currentColor">
      <polygon points="1,3 5,5.5 5,10.5 1,8" fill="currentColor" />
      <polygon points="6,5.5 10,8 10,13 6,10.5" fill="currentColor" />
      <polygon points="6,0 10,2.5 10,7.5 6,5" fill="currentColor" />
      <polygon points="11,8 15,10.5 15,15.5 11,13" fill="none" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  );
}

function KubernetesIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-6 h-6" fill="currentColor">
      <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="8" cy="8" r="2" fill="currentColor" />
      <line x1="8" y1="2" x2="8" y2="5" stroke="currentColor" strokeWidth="1" />
      <line x1="8" y1="11" x2="8" y2="14" stroke="currentColor" strokeWidth="1" />
      <line x1="2" y1="8" x2="5" y2="8" stroke="currentColor" strokeWidth="1" />
      <line x1="11" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function GraphQLIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-6 h-6" fill="currentColor">
      <polygon points="8,1 14,4 14,12 8,15 2,12 2,4" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="8" cy="8" r="2" />
    </svg>
  );
}

function PotionIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-6 h-6" fill="currentColor">
      <rect x="6" y="1" width="4" height="3" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M5 4L3 14H13L11 4H5Z" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="5" y="9" width="6" height="4" />
    </svg>
  );
}
