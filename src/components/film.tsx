"use client";

import { useRef, useState } from "react";

/** Autoplaying, muted, looping film (like Intasect's hero reels) with an optional sound toggle. */
export function Film({
  src,
  poster,
  label,
  withSound = false,
  className
}: {
  src: string;
  poster?: string;
  label: string;
  withSound?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!v.muted) {
      v.currentTime = 0;
      void v.play();
    }
    setMuted(v.muted);
  };

  return (
    <div className={`overflow-hidden bg-ink-soft ${className ?? "relative"}`}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        className="h-full w-full object-cover"
      />
      {withSound ? (
        <button
          type="button"
          onClick={toggle}
          className="absolute bottom-4 right-4 rounded-full bg-black/60 px-4 py-2 text-[13px] uppercase tracking-[0.04em] text-white backdrop-blur transition hover:bg-black/80"
          aria-pressed={!muted}
        >
          {muted ? "Sound on" : "Sound off"}
        </button>
      ) : null}
    </div>
  );
}
