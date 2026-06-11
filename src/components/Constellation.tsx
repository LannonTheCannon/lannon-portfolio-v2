// Scorpius — the real one.
// Star positions are projected from J2000 astronomical coordinates
// (right ascension / declination), star sizes from visual magnitude,
// and the lines follow the IAU stick figure. Antares is a red
// supergiant — "the rival of Mars" — so it alone burns warm.

type Star = {
  name: string;
  ra: number; // right ascension, hours (J2000)
  dec: number; // declination, degrees (J2000)
  mag: number; // visual magnitude
};

const STARS: Record<string, Star> = {
  nu: { name: "ν Sco · Jabbah", ra: 16.1997, dec: -19.461, mag: 4.0 },
  beta: { name: "β Sco · Acrab", ra: 16.0906, dec: -19.805, mag: 2.62 },
  delta: { name: "δ Sco · Dschubba", ra: 16.0056, dec: -22.622, mag: 2.32 },
  pi: { name: "π Sco · Fang", ra: 15.9809, dec: -26.114, mag: 2.89 },
  rho: { name: "ρ Sco · Iklil", ra: 15.9483, dec: -29.214, mag: 3.87 },
  sigma: { name: "σ Sco · Alniyat", ra: 16.3531, dec: -25.593, mag: 2.89 },
  antares: { name: "α Sco · Antares", ra: 16.4901, dec: -26.432, mag: 0.96 },
  tau: { name: "τ Sco · Paikauhale", ra: 16.598, dec: -28.216, mag: 2.82 },
  epsilon: { name: "ε Sco · Larawag", ra: 16.8361, dec: -34.293, mag: 2.29 },
  mu: { name: "μ¹ Sco · Xamidimura", ra: 16.8643, dec: -38.048, mag: 3.0 },
  zeta: { name: "ζ² Sco", ra: 16.9097, dec: -42.362, mag: 3.59 },
  eta: { name: "η Sco", ra: 17.2026, dec: -43.239, mag: 3.33 },
  theta: { name: "θ Sco · Sargas", ra: 17.6219, dec: -42.998, mag: 1.86 },
  iota: { name: "ι¹ Sco", ra: 17.7931, dec: -40.127, mag: 2.99 },
  kappa: { name: "κ Sco · Girtab", ra: 17.7081, dec: -39.03, mag: 2.39 },
  lambda: { name: "λ Sco · Shaula", ra: 17.5601, dec: -37.104, mag: 1.62 },
  upsilon: { name: "υ Sco · Lesath", ra: 17.5127, dec: -37.296, mag: 2.7 },
};

// IAU stick figure, in draw order: head fan, heart, body, tail, stinger
const SEGMENTS: (keyof typeof STARS)[][] = [
  ["beta", "delta", "pi", "rho"],
  ["nu", "delta"],
  ["delta", "sigma", "antares"],
  ["antares", "tau", "epsilon", "mu", "zeta"],
  ["zeta", "eta", "theta", "iota"],
  ["iota", "kappa", "lambda", "upsilon"],
];

// Equirectangular projection onto the viewBox. RA grows eastward
// (left on a sky chart, as seen from Earth); north is up.
const RA_MAX = 17.7931;
const DEC_MAX = -19.461;
const COS_MID_DEC = 0.854; // cos of the constellation's mid-declination
const SCALE = 13;
const MARGIN = 40;

function project(s: Star): { x: number; y: number } {
  return {
    x: (RA_MAX - s.ra) * 15 * COS_MID_DEC * SCALE + MARGIN,
    y: (DEC_MAX - s.dec) * SCALE + MARGIN,
  };
}

// brighter star (lower magnitude) → larger dot
function radius(mag: number): number {
  return Math.max(1.4, 4.8 - mag * 0.9);
}

const P = Object.fromEntries(
  Object.entries(STARS).map(([k, s]) => [k, project(s)]),
) as Record<keyof typeof STARS, { x: number; y: number }>;

function toPath(keys: (keyof typeof STARS)[]): string {
  return keys.map((k, i) => `${i === 0 ? "M" : "L"}${P[k].x.toFixed(1)} ${P[k].y.toFixed(1)}`).join(" ");
}

const DRAW_STEP = 0.4; // seconds between segments lighting up

export default function Constellation({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 390 390"
      className={`constellation-float ${className}`}
      role="img"
      aria-label="Scorpius, charted from real J2000 star coordinates — Antares burning warm at the heart, Shaula at the stinger"
    >
      <defs>
        <radialGradient id="antares-glow">
          <stop offset="0%" stopColor="#ffb38a" stopOpacity="0.75" />
          <stop offset="40%" stopColor="#ff8a5e" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#ff8a5e" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="shaula-glow">
          <stop offset="0%" stopColor="#8fb0ff" stopOpacity="0.8" />
          <stop offset="45%" stopColor="#5e8bff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#5e8bff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="nebula">
          <stop offset="0%" stopColor="#3b6cf6" stopOpacity="0.12" />
          <stop offset="60%" stopColor="#2b53d6" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#2b53d6" stopOpacity="0" />
        </radialGradient>
        <filter id="star-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="1.6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Milky Way wash — Scorpius sits beside the galactic core */}
      <ellipse cx="250" cy="140" rx="130" ry="130" fill="url(#nebula)" />
      <ellipse cx="150" cy="290" rx="140" ry="95" fill="url(#nebula)" opacity="0.8" />

      {/* stick figure, drawn segment by segment */}
      {SEGMENTS.map((seg, i) => (
        <path
          key={`seg-${i}`}
          d={toPath(seg)}
          fill="none"
          stroke="#7da3ff"
          strokeOpacity="0.65"
          strokeWidth="1.1"
          pathLength={1}
          className="constellation-line"
          style={{ animationDelay: `${0.3 + i * DRAW_STEP}s` }}
        />
      ))}

      {/* stars, sized by magnitude */}
      {(Object.keys(STARS) as (keyof typeof STARS)[]).map((k, i) =>
        k === "antares" ? null : (
          <circle
            key={k}
            cx={P[k].x}
            cy={P[k].y}
            r={radius(STARS[k].mag)}
            fill="#eef3ff"
            filter="url(#star-glow)"
            className="constellation-star"
            style={{ animationDelay: `${0.2 + i * 0.12}s` }}
          >
            <title>{STARS[k].name}</title>
          </circle>
        ),
      )}

      {/* Shaula — the stinger */}
      <circle cx={P.lambda.x} cy={P.lambda.y} r="15" fill="url(#shaula-glow)" opacity="0.8" />

      {/* Antares — red supergiant, the rival of Mars */}
      <circle cx={P.antares.x} cy={P.antares.y} r="27" fill="url(#antares-glow)" />
      <circle
        cx={P.antares.x}
        cy={P.antares.y}
        r={radius(STARS.antares.mag)}
        fill="#ffd9c2"
        filter="url(#star-glow)"
        className="constellation-star animate-twinkle"
        style={{ animationDelay: "0.2s" }}
      >
        <title>{STARS.antares.name}</title>
      </circle>

      {/* micro-labels, fading in after the lines finish */}
      <g
        className="constellation-claw font-mono"
        style={{ animationDelay: "3.2s", fontSize: 8.5, letterSpacing: "0.12em" }}
        fill="#6b7691"
      >
        <text x={P.antares.x - 18} y={P.antares.y + 3} textAnchor="end">
          ANTARES · α SCO
        </text>
        <text x={P.lambda.x - 2} y={P.lambda.y - 22} textAnchor="middle">
          SHAULA · THE STINGER
        </text>
      </g>
    </svg>
  );
}
