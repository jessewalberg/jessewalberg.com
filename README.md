# jessewalberg.com

> *A Code Warrior's personal realm, forged in the fires of modern web development.*

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![TanStack](https://img.shields.io/badge/TanStack-Start-ff4154)](https://tanstack.com/start)
[![Convex](https://img.shields.io/badge/Convex-Backend-8b5cf6)](https://convex.dev/)
[![Cloudflare](https://img.shields.io/badge/Cloudflare-Workers-f38020?logo=cloudflare)](https://workers.cloudflare.com/)

---

## The Quest

This is the personal portfolio of **Jesse Walberg**—Tech Lead, Cloud Architect, and builder of things that scale. The site itself is an RPG-themed experience where visitors can explore completed quests (projects), examine the skill inventory, and traverse the career world map.

**Live at:** [jessewalberg.com](https://jessewalberg.com)

---

## Forged With

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (React 19 + SSR) |
| Backend | Convex (real-time serverless) |
| Auth | WorkOS AuthKit |
| Styling | Tailwind CSS v4 |
| Edge | Cloudflare Workers |

---

## Local Development

```bash
# Summon the dependencies
pnpm install

# Awaken the Convex spirits
npx convex dev

# Begin your adventure
pnpm dev
```

Visit `http://localhost:3000` to enter the realm.

---

## Environment Variables

Create `.env.local` with your credentials:

```env
# Convex
CONVEX_DEPLOYMENT=dev:your-deployment
VITE_CONVEX_URL=https://your-deployment.convex.cloud

# WorkOS (Client-side)
VITE_WORKOS_CLIENT_ID=client_xxx
VITE_WORKOS_API_HOSTNAME=api.workos.com

# WorkOS (Server-side - keep secret!)
WORKOS_CLIENT_ID=client_xxx
WORKOS_API_KEY=sk_xxx
```

---

## Deployment

### Cloudflare Pages

1. Connect repository to Cloudflare Pages
2. Set build command: `pnpm build`
3. Set output directory: `dist`
4. Add environment variables in dashboard
5. Deploy on push to main

### Convex

```bash
npx convex deploy
```

---

## Project Structure

```
src/
├── components/          # UI components (RPG-themed)
│   ├── about-section    # Character profile & world map
│   ├── hero-section     # Landing with dialogue
│   ├── skills-section   # Inventory grid
│   ├── projects-section # Quest log
│   └── contact-section  # Communication crystals
├── routes/              # TanStack Router pages
├── integrations/        # Convex, WorkOS, TanStack Query
└── styles.css           # Global styles
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm lint` | Run Biome linter |
| `pnpm format` | Format code |

---

## Connect

- **GitHub:** [jessewalberg](https://github.com/jessewalberg)
- **LinkedIn:** [jessewalberg](https://linkedin.com/in/jessewalberg)
- **X:** [jessewalberg](https://x.com/jessewalberg)
- **Email:** jessewalberg@gmail.com

---

## License

MIT

---

*Built with determination and countless cups of potion.*
