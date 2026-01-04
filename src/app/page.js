"use client";

import HeroSection from "@/Components/Home/HeroSection";
import HeroCarousel from "@/Components/Home/AboutSection";
import ProjectsSection from "@/Components/Home/ProjectSection";
import SkillsSection from "@/Components/Home/SkillSection";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const easing = [0.6, -0.05, 0.01, 0.99];

export default function Page() {
  // HeroSection: slide from left
  const [ref1, inView1] = useInView({ threshold: 0.3 });
  const controls1 = useAnimation();

  // AboutSection (HeroCarousel): slide from right
  const [ref2, inView2] = useInView({ threshold: 0.3 });
  const controls2 = useAnimation();

  // ProjectsSection: slide up
  const [ref3, inView3] = useInView({ threshold: 0.3 });
  const controls3 = useAnimation();

  // SkillsSection: slide up (separate ref + controls)
  const [ref4, inView4] = useInView({ threshold: 0.3 });
  const controls4 = useAnimation();

  useEffect(() => {
    controls1.start({
      opacity: inView1 ? 1 : 0,
      x: inView1 ? 0 : -100,
      transition: { duration: 1.8, ease: easing },
    });
  }, [inView1, controls1]);

  useEffect(() => {
    controls2.start({
      opacity: inView2 ? 1 : 0,
      x: inView2 ? 0 : 100,
      transition: { duration: 0.8, ease: easing },
    });
  }, [inView2, controls2]);

  useEffect(() => {
    controls3.start({
      opacity: inView3 ? 1 : 0,
      y: inView3 ? 0 : 80,
      transition: { duration: 0.9, ease: easing },
    });
  }, [inView3, controls3]);

  useEffect(() => {
    controls4.start({
      opacity: inView4 ? 1 : 0,
      y: inView4 ? 0 : 80,
      transition: { duration: 0.9, ease: easing },
    });
  }, [inView4, controls4]);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <motion.div
        ref={ref1}
        animate={controls1}
        initial={{ opacity: 0, x: -100 }}
      >
        <HeroSection />
      </motion.div>

      {/* About */}
      <motion.div
        ref={ref2}
        animate={controls2}
        initial={{ opacity: 0, x: 100 }}
      >
        <HeroCarousel />
      </motion.div>

      {/* Projects */}
      <motion.div
        ref={ref3}
        animate={controls3}
        initial={{ opacity: 0, y: 80 }}
      >
        <ProjectsSection />
      </motion.div>

      {/* Skills */}
      <motion.div
        ref={ref4}
        animate={controls4}
        initial={{ opacity: 0, y: 80 }}
      >
        <SkillsSection />
      </motion.div>
    </div>
  );
}
