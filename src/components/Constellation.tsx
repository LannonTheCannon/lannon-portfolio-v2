// Scorpius — the "Mission Blue Scorpion" signature mark.
// Head bar (β/δ/π), Antares burning at the heart, a J-hook tail striking up
// into the stinger (Shaula + Lesath), and the claws Scorpius lost to Libra
// reaching forward as fainter, dashed lines.

type Star = { x: number; y: number; r: number };

const STARS: Record<string, Star> = {
  // head bar
  beta: { x: 250, y: 88, r: 3 },
  delta: { x: 234, y: 120, r: 2.6 },
  pi: { x: 224, y: 152, r: 2.4 },
  // the lost claws (Libra)
  clawTop: { x: 158, y: 38, r: 2.2 },
  clawBottom: { x: 138, y: 102, r: 2.2 },
  // heart
  sigma: { x: 262, y: 150, r: 2.2 },
  antares: { x: 286, y: 176, r: 4.5 },
  // body
  tau: { x: 298, y: 216, r: 2.4 },
  epsilon: { x: 294, y: 256, r: 2.6 },
  mu: { x: 274, y: 288, r: 2.2 },
  zeta: { x: 256, y: 314, r: 2.4 },
  // tail hook
  eta: { x: 274, y: 340, r: 2.2 },
  theta: { x: 314, y: 350, r: 2.6 },
  iota: { x: 346, y: 336, r: 2.2 },
  kappa: { x: 364, y: 308, r: 2.4 },
  shaula: { x: 358, y: 276, r: 3.4 },
  lesath: { x: 342, y: 266, r: 2.2 },
};

// drawn in order, segment by segment
const SPINE: (keyof typeof STARS)[][] = [
  ["beta", "delta", "pi"],
  ["delta", "sigma", "antares"],
  ["antares", "tau", "epsilon", "mu", "zeta"],
  ["zeta", "eta", "theta", "iota", "kappa", "shaula"],
  ["shaula", "lesath"],
];

const CLAWS: (keyof typeof STARS)[][] = [
  ["delta", "clawTop"],
  ["pi", "clawBottom"],
];

function toPath(keys: (keyof typeof STARS)[]): string {
  return keys
    .map((k, i) => `${i === 0 ? "M" : "L"}${STARS[k].x} ${STARS[k].y}`)
    .join(" ");
}

const DRAW_STEP = 0.45; // seconds between segments lighting up

export default function Constellation({ className = "" }: { className?: string }) {
  const allStars = Object.entries(STARS);

  return (
    <svg
      viewBox="110 10 280 360"
      className={`constellation-float ${className}`}
      role="img"
      aria-label="The Scorpius constellation in mission blue — claws, heart, and stinger"
    >
      <defs>
        <radialGradient id="antares-glow">
          <stop offset="0%" stopColor="#8fb0ff" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#5e8bff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#5e8bff" stopOpacity="0" />
        </radialGradient>
        <filter id="star-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="1.6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="nebula">
          <stop offset="0%" stopColor="#3b6cf6" stopOpacity="0.13" />
          <stop offset="60%" stopColor="#2b53d6" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#2b53d6" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Milky Way core wash behind the constellation */}
      <ellipse cx="280" cy="220" rx="110" ry="150" fill="url(#nebula)" />
      <ellipse cx="240" cy="120" rx="115" ry="105" fill="url(#nebula)" opacity="0.7" />

      <g transform="rotate(-6 250 190)">
      {/* spine, drawn segment by segment */}
      {SPINE.map((seg, i) => (
        <path
          key={`seg-${i}`}
          d={toPath(seg)}
          fill="none"
          stroke="#7da3ff"
          strokeOpacity="0.75"
          strokeWidth="1.2"
          pathLength={1}
          className="constellation-line"
          style={{ animationDelay: `${0.3 + i * DRAW_STEP}s` }}
        />
      ))}

      {/* the claws Scorpius lost to Libra — fainter, dashed */}
      {CLAWS.map((seg, i) => (
        <path
          key={`claw-${i}`}
          d={toPath(seg)}
          fill="none"
          stroke="#7da3ff"
          strokeOpacity="0.4"
          strokeWidth="1"
          strokeDasharray="0.04 0.025"
          pathLength={1}
          className="constellation-claw"
          style={{ animationDelay: `${0.3 + (SPINE.length + i) * DRAW_STEP}s` }}
        />
      ))}

      {/* stars */}
      {allStars.map(([name, s], i) =>
        name === "antares" ? null : (
          <circle
            key={name}
            cx={s.x}
            cy={s.y}
            r={s.r}
            fill="#eef3ff"
            filter="url(#star-glow)"
            className="constellation-star"
            style={{ animationDelay: `${0.2 + i * 0.13}s` }}
          />
        ),
      )}

      {/* Antares — the heart */}
      <circle cx={STARS.antares.x} cy={STARS.antares.y} r="28" fill="url(#antares-glow)" />
      <circle
        cx={STARS.antares.x}
        cy={STARS.antares.y}
        r={STARS.antares.r}
        fill="#b8cdff"
        filter="url(#star-glow)"
        className="constellation-star animate-twinkle"
        style={{ animationDelay: "0.2s" }}
      />

      {/* Shaula — the stinger, armed */}
      <circle cx={STARS.shaula.x} cy={STARS.shaula.y} r="16" fill="url(#antares-glow)" opacity="0.8" />
      <circle
        cx={STARS.shaula.x}
        cy={STARS.shaula.y}
        r={STARS.shaula.r}
        fill="#d7e3ff"
        filter="url(#star-glow)"
        className="constellation-star animate-twinkle"
        style={{ animationDelay: "1.4s" }}
      />

      {/* mission-control micro-labels, fading in last */}
      <g
        className="constellation-claw font-mono"
        style={{ animationDelay: "3.4s", fontSize: 8, letterSpacing: "0.12em" }}
        fill="#6b7691"
      >
        <text x={STARS.antares.x - 16} y={STARS.antares.y + 3} textAnchor="end">
          ANTARES · α SCO
        </text>
        <text x={300} y={364} textAnchor="middle">
          SHAULA · THE STINGER
        </text>
        <text x={STARS.clawTop.x + 12} y={STARS.clawTop.y - 6}>
          THE LOST CLAWS · LIBRA
        </text>
      </g>
      </g>
    </svg>
  );
}
