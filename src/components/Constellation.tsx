// Scorpius constellation — the "Mission Blue Scorpion" signature mark.
// Star positions trace the real Scorpius asterism: a three-star head,
// Antares at the heart, and the long tail hooking up into the stinger.

const HEAD = [
  { x: 318, y: 38, r: 3 }, // β Sco
  { x: 338, y: 72, r: 2.5 }, // δ Sco
  { x: 330, y: 108, r: 2.5 }, // π Sco
];

const ANTARES = { x: 282, y: 96 };

const TAIL = [
  { x: 282, y: 96, r: 0 }, // Antares (rendered separately)
  { x: 252, y: 132, r: 2.5 },
  { x: 230, y: 172, r: 2 },
  { x: 220, y: 214, r: 2.5 },
  { x: 228, y: 252, r: 2 },
  { x: 254, y: 276, r: 2.5 },
  { x: 292, y: 282, r: 2 },
  { x: 326, y: 266, r: 2.5 },
  { x: 344, y: 238, r: 3 }, // λ Sco — Shaula, the stinger
  { x: 332, y: 218, r: 2 }, // υ Sco — Lesath
];

const tailPath = TAIL.map((p, i) => `${i === 0 ? "M" : "L"}${p.x} ${p.y}`).join(" ");

export default function Constellation({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="180 10 200 290"
      className={className}
      role="img"
      aria-label="The Scorpius constellation, drawn in mission blue"
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
      </defs>

      {/* connecting lines */}
      <path
        d={tailPath}
        fill="none"
        stroke="#7da3ff"
        strokeOpacity="0.75"
        strokeWidth="1.2"
        className="constellation-line"
      />
      {HEAD.map((h, i) => (
        <line
          key={`hl-${i}`}
          x1={ANTARES.x}
          y1={ANTARES.y}
          x2={h.x}
          y2={h.y}
          stroke="#7da3ff"
          strokeOpacity="0.75"
          strokeWidth="1.2"
          className="constellation-line"
        />
      ))}

      {/* stars */}
      {[...HEAD, ...TAIL.slice(1)].map((s, i) => (
        <circle
          key={`s-${i}`}
          cx={s.x}
          cy={s.y}
          r={s.r + 0.5}
          fill="#eef3ff"
          filter="url(#star-glow)"
          className="constellation-star"
          style={{ animationDelay: `${0.3 + i * 0.12}s` }}
        />
      ))}

      {/* Antares — the heart of the scorpion */}
      <circle cx={ANTARES.x} cy={ANTARES.y} r="26" fill="url(#antares-glow)" />
      <circle
        cx={ANTARES.x}
        cy={ANTARES.y}
        r="4.5"
        fill="#b8cdff"
        className="constellation-star animate-twinkle"
        style={{ animationDelay: "0.2s" }}
      />
    </svg>
  );
}
