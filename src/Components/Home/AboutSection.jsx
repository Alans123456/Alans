// src/Components/Home/AboutSection.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    label: "Frontend Craft",
    title: "Clean, responsive interfaces.",
    tagline:
      "Building pixel‑perfect layouts with React, Next.js and Tailwind that feel fast and intuitive.",
    accent: "UI / UX",
    bgWords: ["Layouts", "Pixels", "Details"],
    mainImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2070&auto=format&fit=crop",
    sideLeft: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    sideRight: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    label: "Backend Logic",
    title: "Reliable APIs and data flow.",
    tagline:
      "Designing REST APIs, integrating databases and handling auth with secure, scalable patterns.",
    accent: "APIs & Data",
    bgWords: ["Logic", "Data", "Secure"],
    mainImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2070&auto=format&fit=crop",
    sideLeft: "https://images.unsplash.com/photo-1544380903-5874230de6ee?q=80&w=2070&auto=format&fit=crop",
    sideRight: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    label: "Creative Motion",
    title: "Micro‑interactions that feel alive.",
    tagline:
      "Using animation and parallax carefully so interfaces feel modern without being distracting.",
    accent: "Motion Design",
    bgWords: ["Motion", "Flow", "Focus"],
    mainImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    sideLeft: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=2070&auto=format&fit=crop",
    sideRight: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function AboutSection() {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const lastSide = useRef(null);
  const lastChangeTime = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const current = slides[index];

  const goNext = () => setIndex((prev) => (prev + 1) % slides.length);
  const goPrev = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const halfW = rect.width / 2;
    const halfH = rect.height / 2;

    const nx = (x - halfW) / halfW;
    const ny = (y - halfH) / halfH;

    setOffset({ x: nx, y: ny * 0.5 });

    const side = nx > 0.35 ? "right" : nx < -0.35 ? "left" : "center";
    const now = performance.now();
    const minGap = 6000; // keep slow

    if (side === "center") {
      lastSide.current = "center";
      return;
    }

    if (side !== lastSide.current && now - lastChangeTime.current > minGap) {
      if (side === "right") goNext();
      else if (side === "left") goPrev();
      lastSide.current = side;
      lastChangeTime.current = now;
    }
  };

  const handleMouseLeave = () => {
    lastSide.current = null;
    setOffset({ x: 0, y: 0 });
  };

  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#050608] via-[#050608] to-[#141414] cursor-default"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* background gold skill words */}
      <div
        className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center select-none transition-opacity duration-700 ease-out"
        aria-hidden="true"
      >
        <p className="text-[10vw] font-semibold tracking-tight text-yellow-500/25 leading-none">
          {current.bgWords[0]}
        </p>
        <p className="text-[10vw] font-semibold tracking-tight text-yellow-500/18 leading-none -mt-6">
          {current.bgWords[1]}
        </p>
        <p className="text-[10vw] font-semibold tracking-tight text-yellow-500/10 leading-none -mt-6">
          {current.bgWords[2]}
        </p>
      </div>

      {/* main floating content */}
      <div
        className={`
          relative z-10 w-full px-6 md:px-10 lg:px-16
          flex flex-col md:flex-row items-center justify-between gap-10
          transition-all duration-700 ease-out
          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
      >
        {/* LEFT: images describing skill */}
        <div className="relative flex-1 flex items-center justify-center">
          {/* soft gold glow circle */}
          <div
            className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full bg-yellow-500/20 blur-3xl"
            style={{
              transform: `translate3d(${offset.x * -15}px, ${
                offset.y * -10
              }px, 0)`,
            }}
          />

          {/* left decorative icon */}
          <div
            className="relative w-28 h-28 md:w-36 md:h-36 rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.7)] overflow-hidden bg-black/80 border border-yellow-500/40"
            style={{
              transform: `translate3d(${offset.x * -25}px, ${
                offset.y * 18
              }px, 0)`,
            }}
          >
            <Image
              src={current.sideLeft}
              alt={current.label + " left"}
              fill
              className="object-cover"
            />
          </div>

          {/* main skill image */}
          <div
            className="
              relative w-60 h-40 md:w-80 md:h-56 lg:w-[400px] lg:h-[280px]
              rounded-[2rem] shadow-[0_18px_55px_rgba(0,0,0,0.85)] overflow-hidden
              bg-black border border-yellow-500/60
              transition-transform duration-500 ease-out
            "
            style={{
              transform: `translate3d(${offset.x * 10}px, ${
                offset.y * -8
              }px, 0)`,
            }}
          >
            <Image
              src={current.mainImage}
              alt={current.label}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* right decorative icon */}
          <div
            className="relative w-24 h-24 md:w-32 md:h-32 rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.7)] overflow-hidden bg-black/80 border border-yellow-500/40"
            style={{
              transform: `translate3d(${offset.x * 30}px, ${
                offset.y * 15
              }px, 0)`,
            }}
          >
            <Image
              src={current.sideRight}
              alt={current.label + " right"}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT: about + skill text */}
        <div className="relative flex-1 flex flex-col gap-4 md:gap-5 max-w-xl">
          <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-yellow-400/80">
            About my skills
          </span>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-zinc-50">
            {current.title}
          </h2>

          <p className="text-sm md:text-base text-zinc-300">
            {current.tagline}
          </p>

          <ul className="mt-2 space-y-1 text-xs md:text-sm text-zinc-400">
            {current.id === 1 && (
              <>
                <li>
                  • Next.js / React components with clean props and structure.
                </li>
                <li>
                  • Tailwind utility‑first styling, responsive across all
                  breakpoints.
                </li>
                <li>
                  • UI states: hover, focus, loading and error handled clearly.
                </li>
              </>
            )}
            {current.id === 2 && (
              <>
                <li>
                  • Designing REST APIs and integrating third‑party services.
                </li>
                <li>
                  • Working with JSON / JWT / basic auth and protected routes.
                </li>
                <li>
                  • Optimizing queries and data flow for real‑world performance.
                </li>
              </>
            )}
            {current.id === 3 && (
              <>
                <li>
                  • Using motion only where it supports UX, not just decoration.
                </li>
                <li>
                  • Cursor / scroll‑based interactions like parallax and
                  reveals.
                </li>
                <li>
                  • Accessible animations with reduced‑motion friendly defaults.
                </li>
              </>
            )}
          </ul>

          <div className="flex items-center gap-3 mt-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 text-yellow-300 border border-yellow-500/60 px-4 py-1 text-xs md:text-sm shadow-[0_0_25px_rgba(245,197,94,0.55)]">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              {current.accent}
            </span>

            <span className="text-[0.75rem] text-zinc-400">
              Move slowly left or right to explore different parts of my
              skill‑set.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
