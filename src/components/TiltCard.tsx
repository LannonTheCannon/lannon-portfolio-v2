"use client";

import { useEffect, useRef, type ReactNode } from "react";

// 3D tilt-on-hover, descended from the v1 site's tilt.js.
// Mouse position is measured against a stationary wrapper (never the
// transforming card itself — that feeds back into jitter), and motion is
// smoothed with a per-frame lerp toward the target instead of CSS
// transitions. Inert for touch pointers and prefers-reduced-motion.

const MAX_TILT = 12; // degrees
const EASE = 0.16; // lerp factor per frame — lower = floatier

export default function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const target = useRef({ rx: 0, ry: 0, gx: 50, gy: 50, glare: 0 });
  const current = useRef({ rx: 0, ry: 0, gx: 50, gy: 50, glare: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (raf.current !== null) cancelAnimationFrame(raf.current);
    };
  }, []);

  function interactive(): boolean {
    return (
      window.matchMedia("(hover: hover)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function tick() {
    const card = cardRef.current;
    if (!card) return;

    const c = current.current;
    const t = target.current;
    c.rx += (t.rx - c.rx) * EASE;
    c.ry += (t.ry - c.ry) * EASE;
    c.gx += (t.gx - c.gx) * EASE;
    c.gy += (t.gy - c.gy) * EASE;
    c.glare += (t.glare - c.glare) * EASE;

    const scale = 1 + 0.03 * c.glare; // settles back with the glare
    card.style.transform = `perspective(900px) rotateX(${c.rx.toFixed(3)}deg) rotateY(${c.ry.toFixed(3)}deg) scale3d(${scale.toFixed(4)}, ${scale.toFixed(4)}, 1)`;
    card.style.setProperty("--glare-x", `${c.gx.toFixed(2)}%`);
    card.style.setProperty("--glare-y", `${c.gy.toFixed(2)}%`);
    card.style.setProperty("--glare-opacity", c.glare.toFixed(3));

    const settled =
      Math.abs(t.rx - c.rx) < 0.01 &&
      Math.abs(t.ry - c.ry) < 0.01 &&
      Math.abs(t.glare - c.glare) < 0.005;

    if (settled && t.glare === 0) {
      raf.current = null;
      return;
    }
    raf.current = requestAnimationFrame(tick);
  }

  function startLoop() {
    if (raf.current === null) raf.current = requestAnimationFrame(tick);
  }

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const wrap = wrapRef.current;
    if (!wrap || !interactive()) return;
    // the wrapper never transforms, so this rect is stable
    const rect = wrap.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    target.current = {
      rx: -y * MAX_TILT,
      ry: x * MAX_TILT,
      gx: (x + 0.5) * 100,
      gy: (y + 0.5) * 100,
      glare: 1,
    };
    startLoop();
  }

  function handleLeave() {
    target.current = { rx: 0, ry: 0, gx: 50, gy: 50, glare: 0 };
    startLoop();
  }

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
    >
      <div ref={cardRef} className="tilt-card relative h-full w-full">
        {children}
        {/* glare sheen, riding the cursor */}
        <div
          aria-hidden="true"
          className="tilt-glare pointer-events-none absolute inset-0 rounded-[inherit]"
        />
      </div>
    </div>
  );
}
