// Deterministic starfield — same sky every build, no client JS.
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function Starfield({ count = 110 }: { count?: number }) {
  const rand = mulberry32(20261106);
  const stars = Array.from({ length: count }, (_, i) => ({
    cx: rand() * 100,
    cy: rand() * 100,
    r: 0.4 + rand() * 1.1,
    opacity: 0.15 + rand() * 0.55,
    twinkle: i % 7 === 0,
    delay: rand() * 4,
  }));

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 100 100"
    >
      {stars.map((s, i) => (
        <circle
          key={i}
          cx={s.cx}
          cy={s.cy}
          r={s.r * 0.12}
          fill="#b8cdff"
          opacity={s.opacity}
          className={s.twinkle ? "animate-twinkle" : undefined}
          style={s.twinkle ? { animationDelay: `${s.delay}s` } : undefined}
        />
      ))}
    </svg>
  );
}
