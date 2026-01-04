"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <section className="relative w-full  min-h-screen overflow-hidden bg-[#05060a] flex items-center">
      {/* 🔁 Continuous moving background text */}
      <div className="pointer-events-none absolute inset-0 flex items-end overflow-hidden pb-2">
        <div className="marquee">
          <span className="text-[15vw] font-semibold tracking-tight text-yellow-500/15 leading-none">
            ALANS SHRESTHA PORTFOLIO WEB DEVELOPER UI DESIGNER
          </span>
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20 flex flex-col md:flex-row items-center justify-between gap-16">
        {/* LEFT: text + buttons */}
        <div
          className={`
            flex-1 max-w-xl
            transition-all duration-700 ease-out
            ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <p className="text-xl md:text-xl tracking-[0.35em] uppercase text-yellow-400/80 mb-6">
            ALANS SHRESTHA
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-zinc-50 leading-tight mb-4">
            Web developer
            <br />
            and <span className="text-yellow-400">UI designer</span>
          </h1>

          <p className="text-sm md:text-base text-zinc-400 max-w-md mb-8">
            Crafting sleek, fast and{" "}
            <span className="text-yellow-300 font-medium">golden</span>{" "}
            experiences using Next.js, Tailwind and thoughtful interaction
            design tailored for modern brands.
          </p>

          <div className="flex items-center gap-4">
            <button className="px-6 py-2.5 rounded-full bg-yellow-400 text-black text-sm font-medium tracking-wide shadow-[0_0_25px_rgba(245,197,94,0.6)] hover:shadow-[0_0_40px_rgba(245,197,94,0.9)] transition-all duration-300">
              See latest works
            </button>
            <button className="px-6 py-2.5 rounded-full border border-zinc-600 text-sm font-medium text-zinc-200 hover:border-yellow-400 hover:text-yellow-300 transition-all duration-300 bg-white/5">
              Contact me
            </button>
          </div>
        </div>

        {/* RIGHT: portrait card */}
        <div
          className={`
            flex-1 flex justify-center md:justify-end
            transition-all duration-700 ease-out delay-200
            ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <div className="relative w-64 sm:w-72 md:w-80 aspect-[3/4] rounded-[2rem] bg-gradient-to-b from-zinc-900 to-black border border-yellow-500/40 shadow-[0_18px_60px_rgba(0,0,0,0.9)] overflow-hidden">
            {/* subtle floating glow */}
            <div className="absolute -inset-10 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.18),transparent_55%)]" />

            {/* your photo */}
            <div className="relative z-10 w-full h-full flex items-end justify-center">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                alt="Alans Shrestha portrait"
                fill
                className="object-cover object-top"
              />
            </div>

            {/* golden border pulse */}
            <div className="absolute inset-0 rounded-[2rem] border border-yellow-400/70 opacity-40 animate-pulse-slow pointer-events-none" />
          </div>
        </div>
      </div>

      {/* bottom gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/60 to-transparent" />
    </section>
  );
}
