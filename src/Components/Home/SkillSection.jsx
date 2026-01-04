// src/Components/Home/SkillsSection.jsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "HTML / CSS", level: "Confident" },
  { name: "JavaScript (ES6+)", level: "Comfortable" },
  { name: "React", level: "Comfortable" },
  { name: "Next.js", level: "Learning" },
  { name: "Tailwind CSS", level: "Confident" },
  { name: "Node.js / Express", level: "Learning" },
  { name: "REST APIs", level: "Learning" },
  { name: "Git & GitHub", level: "Comfortable" },
];

const levelColors = {
  Learning: "bg-zinc-900 border-zinc-700 text-zinc-300",
  Comfortable: "bg-yellow-500/10 border-yellow-500/60 text-yellow-300",
  Confident: "bg-emerald-500/10 border-emerald-500/60 text-emerald-300",
  Expert: "bg-sky-500/10 border-sky-500/60 text-sky-300",
};

export default function SkillsSection() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#141414] via-[#050608] to-[#050608]"
    >
      {/* big background word + glow */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
        aria-hidden="true"
      >
        <div className="absolute w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] rounded-full bg-yellow-500/10 blur-3xl" />
        <p className="relative text-[16vw] md:text-[10vw] font-semibold tracking-tight text-yellow-500/15 leading-none">
          SKILLS
        </p>
      </div>

      {/* content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="relative z-10 w-full max-w-6xl px-6 md:px-10 lg:px-16 flex flex-col gap-10"
      >
        {/* intro */}
        <div className="max-w-xl">
          <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-yellow-400/80">
            Tech stack
          </span>
          <h2 className="mt-2 text-2xl md:text-3xl lg:text-4xl font-semibold text-zinc-50">
            How well these tools are known.
          </h2>
          <p className="mt-3 text-sm md:text-base text-zinc-300">
            Each level reflects what can be built in real projects, instead of
            fake percentages like “80% React”.
          </p>
        </div>

        {/* legend */}
        <div className="flex flex-wrap gap-3 text-[0.7rem] md:text-xs text-zinc-400">
          <span className="flex items-center gap-2">
            <span
              className={`inline-flex items-center rounded-full px-2 py-0.5 border ${levelColors.Learning}`}
            >
              Learning
            </span>
            Can follow tutorials, build simple features, still need references.
          </span>
          <span className="flex items-center gap-2">
            <span
              className={`inline-flex items-center rounded-full px-2 py-0.5 border ${levelColors.Comfortable}`}
            >
              Comfortable
            </span>
            Can build full pages/apps and debug common issues alone.
          </span>
          <span className="flex items-center gap-2">
            <span
              className={`inline-flex items-center rounded-full px-2 py-0.5 border ${levelColors.Confident}`}
            >
              Confident
            </span>
            Can structure projects, refactor and apply best practices.
          </span>
        </div>

        {/* skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="relative rounded-2xl border border-yellow-500/20 bg-black/40 px-4 py-4 shadow-[0_16px_45px_rgba(0,0,0,0.8)]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm md:text-base text-zinc-100">
                  {skill.name}
                </span>
                <span
                  className={`text-[0.7rem] md:text-xs rounded-full px-3 py-1 border ${
                    levelColors[skill.level]
                  }`}
                >
                  {skill.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
