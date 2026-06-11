// Ordered manga sunburst — clean wedge rays radiating from center,
// spinning almost imperceptibly slowly behind the newspaper pile.

const RAYS = 28;
const R = 50;

export default function Sunburst({ className = "" }: { className?: string }) {
  const wedges = Array.from({ length: RAYS }, (_, i) => {
    const center = (i / RAYS) * Math.PI * 2;
    const half = (Math.PI * 2) / RAYS / 2 * 0.55; // ray width vs gap
    const a1 = center - half;
    const a2 = center + half;
    return `50,50 ${(50 + Math.cos(a1) * R).toFixed(2)},${(50 + Math.sin(a1) * R).toFixed(2)} ${(50 + Math.cos(a2) * R).toFixed(2)},${(50 + Math.sin(a2) * R).toFixed(2)}`;
  });

  return (
    <svg aria-hidden="true" viewBox="0 0 100 100" className={`sunburst-spin ${className}`}>
      {wedges.map((points, i) => (
        <polygon key={i} points={points} fill="currentColor" />
      ))}
    </svg>
  );
}
