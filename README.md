# lannonkhau.com — v2

Personal portfolio for Lannon Khau, Full-Stack AI/ML Engineer. Built with Next.js 16
(App Router), TypeScript, and Tailwind CSS v4. Fully static-exported — ready for free
hosting on Azure Static Web Apps.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → ./out
npm run lint
```

## Structure

```
src/
  app/
    page.tsx             # Home: hero, selected work, about, stack, writing, contact
    about/               # Full bio + timeline
    work/[slug]/         # Case studies for the 4 production projects
    blog/                # Field notes index + posts
    not-found.tsx        # 404 ("signal lost")
  components/            # Nav, Footer, Reveal, Starfield, Constellation, cards
  data/                  # All content lives here: site.ts, projects.ts, posts.ts
public/images/           # Optimized assets salvaged from the v1 site
```

## Design

"Mission Control" — deep-space dark theme with a single Mission Blue accent
(`--color-mission-*` tokens in `globals.css`), Geist Sans/Mono + Newsreader italic,
and a Scorpius-constellation hero (the "Mission Blue Scorpion" callsign). All motion
respects `prefers-reduced-motion`.

## Future: /dashboard

The public site is fully static (`output: 'export'`). A private, Supabase-auth-gated
`/dashboard` can be added later as its own route group without touching the public
pages — content is already isolated in `src/data/`, and components are route-agnostic.
