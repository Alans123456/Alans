// src/Components/Home/ProjectsSection.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("center"); // enter | center | exit
  const directionRef = useRef("down");
  const locked = useRef(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    fetch("https://api.github.com/users/Alans123456/repos")
      .then((res) => res.json())
      .then((repos) => {
        const wanted = [
          "repo-one",
          "repo-two",
          // add more repo names here
        ];

        const filtered = repos.filter((r) => {
          const hasHomepage = r.homepage && r.homepage !== "";
          const isWanted = wanted.includes(r.name);
          return hasHomepage || isWanted;
        });

        const mapped = filtered.map((r) => ({
          id: r.id,
          title: r.name,
          subtitle: r.description || "No description",
          description: r.description || "No description",
          image: `https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop`,
          tech: ["GitHub"],
          github: r.html_url,
          live: r.homepage || "#",
        }));

        setProjects(mapped);
      })
      .catch((err) => console.error("GitHub fetch error:", err));
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || projects.length === 0) return;

    const onWheel = (e) => {
      if (locked.current) return;

      const down = e.deltaY > 0;
      const up = e.deltaY < 0;

      if (down && index === projects.length - 1) return;
      if (up && index === 0) return;

      e.preventDefault();
      locked.current = true;
      directionRef.current = down ? "down" : "up";
      setPhase("exit");

      setTimeout(() => {
        setIndex((prev) => (down ? prev + 1 : prev - 1));
        setPhase("enter");

        setTimeout(() => {
          setPhase("center");
          locked.current = false;
        }, 700);
      }, 700);
    };

    section.addEventListener("wheel", onWheel, { passive: false });
    return () => section.removeEventListener("wheel", onWheel);
  }, [index, projects]);

  const getTransform = () => {
    const dir = directionRef.current;
    if (phase === "center") return "translate(-50%, -50%) rotate(0deg)";
    if (phase === "enter")
      return dir === "down"
        ? "translate(-50%, 150%) rotate(-15deg)"
        : "translate(-50%, -150%) rotate(15deg)";
    if (phase === "exit")
      return dir === "down"
        ? "translate(-50%, -150%) rotate(15deg)"
        : "translate(-50%, 150%) rotate(-15deg)";
  };

  if (projects.length === 0) return null;

  const current = projects[index];
  if (!current) return null;

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#050608] via-[#050608] to-[#141414]"
    >
      {/* background big word + glow */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
        aria-hidden="true"
      >
        <div className="absolute w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] rounded-full bg-yellow-500/10 blur-3xl" />
        <p className="relative text-[18vw] md:text-[12vw] font-semibold tracking-tight text-yellow-500/15 leading-none">
          PROJECTS
        </p>
      </div>

      {/* floating content, no card/container border */}
      <div
        className={`
          absolute left-1/2 top-1/2 w-full px-6 md:px-10 lg:px-16 max-w-7xl
          flex flex-col md:flex-row items-center md:items-stretch justify-between gap-8 md:gap-12
          transition-all duration-700 ease-out
        `}
        style={{
          transform: getTransform(),
          opacity: phase === "center" ? 1 : 0,
        }}
      >
        {/* LEFT: image with glow */}
        <div className="relative flex-1 flex items-center justify-center">
          <div className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full bg-yellow-500/20 blur-3xl" />
          <div className="relative w-full h-56 md:h-72 max-w-md rounded-3xl overflow-hidden border border-yellow-500/50 bg-black/60 shadow-[0_18px_55px_rgba(0,0,0,0.8)]">
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT: text, free-floating like About */}
        <div className="relative flex-1 flex flex-col gap-3 max-w-xl">
          <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-yellow-400/80">
            Featured project
          </span>

          <h3 className="text-2xl md:text-3xl font-semibold text-white">
            {current.title}
          </h3>

          <p className="text-sm md:text-base text-yellow-300/80">
            {current.subtitle}
          </p>

          <p className="text-sm md:text-base text-zinc-300">
            {current.description}
          </p>

          <div className="mt-2 flex flex-wrap gap-2">
            {current.tech.map((t) => (
              <span
                key={t}
                className="rounded-full bg-zinc-900 px-3 py-1 text-xs text-zinc-200 border border-zinc-700"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-4 flex gap-4">
            <a
              href={current.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-yellow-300 hover:text-yellow-200 transition"
            >
              GitHub ↗
            </a>
            {current.live !== "#" && (
              <a
                href={current.live}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-zinc-300 hover:text-yellow-200 transition"
              >
                Live demo ↗
              </a>
            )}
          </div>
        </div>
      </div>

      {/* dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex justify-center gap-2">
        {projects.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-yellow-400" : "bg-zinc-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
