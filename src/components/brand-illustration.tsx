"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type BlockColors = { top: string; right: string; left: string };

type IsoBlock = {
  x: number;
  hw: number;
  extrusion: number;
  colors: BlockColors;
  delay: number;
};

const TEAL = {
  short: { top: "#5ee0db", right: "#36C9C2", left: "#1f8a85" },
  mid: { top: "#7ae8e3", right: "#36C9C2", left: "#248f89" },
  tall: { top: "#ff8a8c", right: "#FF6A6C", left: "#c93537" },
};

const BLOCKS: IsoBlock[] = [
  { x: 36, hw: 54, extrusion: 48, colors: TEAL.short, delay: 0.15 },
  { x: 148, hw: 54, extrusion: 92, colors: TEAL.mid, delay: 0.4 },
  { x: 260, hw: 54, extrusion: 136, colors: TEAL.tall, delay: 0.65 },
];

const SPARKLES = [
  { cx: 48, cy: 58, r: 2.5, delay: 0 },
  { cx: 372, cy: 72, r: 2, delay: 0.6 },
  { cx: 318, cy: 148, r: 1.8, delay: 1.1 },
  { cx: 92, cy: 128, r: 2, delay: 1.6 },
  { cx: 388, cy: 228, r: 1.5, delay: 0.9 },
];

const GROUND_Y = 318;

function isoPaths(hw: number, extrusion: number) {
  const d = Math.round(hw * 0.574);
  return {
    top: `M ${hw} 0 L ${hw * 2} ${d} L ${hw} ${d * 2} L 0 ${d} Z`,
    right: `M ${hw * 2} ${d} L ${hw * 2} ${d + extrusion} L ${hw} ${d * 2 + extrusion} L ${hw} ${d * 2} Z`,
    left: `M 0 ${d} L ${hw} ${d * 2} L ${hw} ${d * 2 + extrusion} L 0 ${d + extrusion} Z`,
    totalHeight: d * 2 + extrusion,
  };
}

function IsoBlockShape({
  block,
  reduceMotion,
}: {
  block: IsoBlock;
  reduceMotion: boolean | null;
}) {
  const { top, right, left, totalHeight } = isoPaths(block.hw, block.extrusion);
  const y = GROUND_Y - totalHeight;

  return (
    <g transform={`translate(${block.x}, ${y})`}>
      <motion.g
        initial={reduceMotion ? false : { opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 0.85,
          delay: block.delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ transformOrigin: `${block.hw}px ${totalHeight}px`, transformBox: "fill-box" }}
      >
        <motion.g
          animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
          transition={{
            duration: 3.2 + block.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: block.delay + 0.9,
          }}
        >
          <path d={top} fill={block.colors.top} />
          <path d={right} fill={block.colors.right} />
          <path d={left} fill={block.colors.left} />
        </motion.g>
      </motion.g>
    </g>
  );
}

type BrandIllustrationProps = {
  className?: string;
};

const TAGLINE_LINE1 = "Bold Brands.";
const TAGLINE_LINE2 = "Real Impact.";
const TAGLINE_LINE2_ACCENT_START = 5;

function TypingTagline({ reduceMotion }: { reduceMotion: boolean | null }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const [line1Len, setLine1Len] = useState(() => (reduceMotion ? TAGLINE_LINE1.length : 0));
  const [line2Len, setLine2Len] = useState(() => (reduceMotion ? TAGLINE_LINE2.length : 0));
  const [line1Done, setLine1Done] = useState(Boolean(reduceMotion));

  useEffect(() => {
    if (reduceMotion || !inView) return;

    if (line1Len < TAGLINE_LINE1.length) {
      const id = window.setTimeout(() => setLine1Len((count) => count + 1), 68);
      return () => window.clearTimeout(id);
    }

    if (!line1Done) {
      const id = window.setTimeout(() => setLine1Done(true), 320);
      return () => window.clearTimeout(id);
    }

    if (line2Len < TAGLINE_LINE2.length) {
      const id = window.setTimeout(() => setLine2Len((count) => count + 1), 68);
      return () => window.clearTimeout(id);
    }
  }, [inView, line1Len, line2Len, line1Done, reduceMotion]);

  const showLine1Cursor = !reduceMotion && inView && line1Len < TAGLINE_LINE1.length;
  const showLine2Cursor =
    !reduceMotion && inView && line1Done && line2Len < TAGLINE_LINE2.length;
  const line2Text = TAGLINE_LINE2.slice(0, line2Len);

  return (
    <div ref={ref}>
      <p className="min-h-[20px] text-base font-extrabold leading-tight tracking-tight text-text sm:min-h-[28px] sm:text-[22px]">
        {TAGLINE_LINE1.slice(0, line1Len)}
        {showLine1Cursor ? (
          <motion.span
            className="ml-0.5 inline-block text-accent"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.85, repeat: Infinity, ease: "linear" }}
            aria-hidden
          >
            |
          </motion.span>
        ) : null}
      </p>

      {line1Done ? (
        <p className="mt-1 min-h-[20px] text-base font-extrabold leading-tight tracking-tight sm:min-h-[28px] sm:text-[22px]">
          <span className="text-accent">{line2Text.slice(0, TAGLINE_LINE2_ACCENT_START)}</span>
          <span className="text-[#FF6A6C]">{line2Text.slice(TAGLINE_LINE2_ACCENT_START)}</span>
          {showLine2Cursor ? (
            <motion.span
              className="ml-0.5 inline-block text-accent"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.85, repeat: Infinity, ease: "linear" }}
              aria-hidden
            >
              |
            </motion.span>
          ) : null}
        </p>
      ) : null}
    </div>
  );
}

export function BrandIllustration({ className }: BrandIllustrationProps) {
  const reduceMotion = useReducedMotion();
  const uid = useId().replace(/:/g, "");
  const glowId = `sbj-card-glow-${uid}`;
  const growthArrowId = `growth-arrow-${uid}`;
  const frameGlowId = `frame-glow-${uid}`;

  return (
    <div className={cn("flex w-full items-center justify-center", className)}>
      <div className="brand-illustration relative aspect-square w-full overflow-hidden rounded-2xl border border-white/[0.1] bg-[#080812] shadow-card max-sm:shadow-[0_8px_32px_rgba(0,0,0,0.35)] sm:max-w-[min(100%,22rem)] lg:w-[90%] lg:max-w-[90%]">
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/[0.08] via-transparent to-[#FF6A6C]/[0.06]" aria-hidden />
      <motion.div
        className="pointer-events-none absolute inset-[1px] rounded-[15px] border border-white/[0.06]"
        aria-hidden
        animate={reduceMotion ? undefined : { opacity: [0.4, 0.85, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="pointer-events-none absolute -left-12 bottom-8 h-36 w-36 rounded-full bg-[#FF6A6C]/15 blur-3xl max-sm:scale-75 max-sm:opacity-60"
        aria-hidden
        animate={reduceMotion ? undefined : { opacity: [0.3, 0.55, 0.3], scale: [1, 1.08, 1] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl max-sm:scale-75 max-sm:opacity-60"
        aria-hidden
        animate={reduceMotion ? undefined : { opacity: [0.35, 0.65, 0.35], scale: [1, 1.1, 1] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="brand-illustration-grid pointer-events-none absolute inset-0 opacity-60 max-sm:opacity-50 sm:opacity-80" aria-hidden />

      <svg
        viewBox="0 0 420 420"
        className="relative h-full w-full"
        role="img"
        aria-label="SBJ Studio growth illustration — three ascending isometric blocks"
      >
        <defs>
          <linearGradient id={glowId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#36C9C2" stopOpacity="0.14" />
            <stop offset="55%" stopColor="#FF6A6C" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#36C9C2" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={growthArrowId} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#36C9C2" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FF6A6C" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id={frameGlowId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#36C9C2" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FF6A6C" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        <rect width="420" height="420" fill={`url(#${glowId})`} />

        <path
          d="M 18 18 L 18 52 M 18 18 L 52 18"
          stroke={`url(#${frameGlowId})`}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M 402 402 L 402 368 M 402 402 L 368 402"
          stroke={`url(#${frameGlowId})`}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.55"
        />

        {!reduceMotion &&
          SPARKLES.map((sparkle, index) => (
            <motion.circle
              key={index}
              cx={sparkle.cx}
              cy={sparkle.cy}
              r={sparkle.r}
              fill="#36C9C2"
              animate={{ opacity: [0.2, 1, 0.2], scale: [0.7, 1.3, 0.7] }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: sparkle.delay,
              }}
            />
          ))}

        <motion.path
          d="M 52 302 Q 210 248 368 118"
          fill="none"
          stroke={`url(#${growthArrowId})`}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="6 8"
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.75 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.9, ease: "easeOut" }}
        />

        {BLOCKS.map((block, index) => (
          <IsoBlockShape key={index} block={block} reduceMotion={reduceMotion} />
        ))}

        <motion.g
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.15 }}
        >
          <path d="M 358 108 L 368 98 L 378 108" fill="none" stroke="#FF6A6C" strokeWidth="2" strokeLinecap="round" />
          <path d="M 368 98 L 368 118" fill="none" stroke="#FF6A6C" strokeWidth="2" strokeLinecap="round" />
        </motion.g>

        <motion.g
          initial={reduceMotion ? false : { opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <motion.circle
            cx="348"
            cy="98"
            r="4"
            fill="#FF6A6C"
            animate={reduceMotion ? undefined : { opacity: [0.5, 1, 0.5], scale: [1, 1.3, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <circle cx="348" cy="98" r="14" fill="#FF6A6C" fillOpacity="0.18" />
          <circle cx="348" cy="98" r="24" fill="#FF6A6C" fillOpacity="0.06" />
        </motion.g>
      </svg>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 sm:p-5 lg:p-7">
        <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-muted sm:mb-2 sm:text-[11px] sm:tracking-[0.24em]">SBJ · STUDIO</p>
        <TypingTagline reduceMotion={reduceMotion} />
      </div>
    </div>
    </div>
  );
}
