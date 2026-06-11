"use client";

import { useRef, type ReactNode } from "react";

// 3D tilt-on-hover, descended from the v1 site's tilt.js.
// Transforms are written straight to the DOM (no re-renders), the glare
// position rides along via CSS vars, and everything is inert for touch
// pointers and prefers-reduced-motion.

const MAX_TILT = 12; // degrees

export default function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function interactive(): boolean {
    return (
      window.matchMedia("(hover: hover)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = ref.current;
    if (!card || !interactive()) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(900px) rotateX(${(-y * MAX_TILT).toFixed(2)}deg) rotateY(${(x * MAX_TILT).toFixed(2)}deg) scale3d(1.03, 1.03, 1.03)`;
    card.style.setProperty("--glare-x", `${((x + 0.5) * 100).toFixed(1)}%`);
    card.style.setProperty("--glare-y", `${((y + 0.5) * 100).toFixed(1)}%`);
    card.style.setProperty("--glare-opacity", "1");
  }

  function handleLeave() {
    const card = ref.current;
    if (!card) return;
    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    card.style.setProperty("--glare-opacity", "0");
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`tilt-card relative ${className}`}
    >
      {children}
      {/* glare sheen, riding the cursor */}
      <div aria-hidden="true" className="tilt-glare pointer-events-none absolute inset-0 rounded-[inherit]" />
    </div>
  );
}
