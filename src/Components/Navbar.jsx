"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-transparent h-20">
      {/* MAIN BAR */}
      <div className="flex h-full items-center justify-between px-10 md:px-12">
        {/* ABOUT LINK */}
        <Link
          href="#about"
          onClick={() => handleLinkClick("about")}
          className={`hidden md:block uppercase transition-all duration-700 ease-out text-[0.8rem] tracking-[0.2em] ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          } delay-1100 ${
            activeLink === "about"
              ? "text-amber-400 shadow-[0_0_15px_rgba(245,197,94,0.7)] px-4 py-2 rounded-lg"
              : "text-slate-200"
          }`}
        >
          ABOUT
        </Link>

        {/* WORK LINK */}
        <Link
          href="#work"
          onClick={() => handleLinkClick("work")}
          className={`hidden md:block uppercase transition-all duration-700 ease-out text-[0.8rem] tracking-[0.2em] ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          } delay-700 ${
            activeLink === "work"
              ? "text-amber-400 shadow-[0_0_15px_rgba(245,197,94,0.7)] px-4 py-2 rounded-lg"
              : "text-slate-200 hover:shadow-[0_0_15px_rgba(245,197,94,0.5)"
          }`}
        >
          WORK
        </Link>

        {/* CENTER LOGO = HOME */}
        <Link
          href="/"
          onClick={() => handleLinkClick("home")}
          className={`flex items-center justify-center  rounded-xl  text-xl font-semibold transition-all duration-700 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
          } ${
            activeLink === "home"
              ? "shadow-[0_0_25px_rgba(245,197,94,0.7)] w-14 h-14 px-2 py-2"
              : " hover:shadow-[0_0_15px_rgba(245,197,94,0.5)"
          }`}
        >
          <Image
            src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop"
            alt="Logo"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        </Link>

        {/* SHOP LINK */}
        <Link
          href="#shop"
          onClick={() => handleLinkClick("shop")}
          className={`hidden md:block uppercase transition-all duration-700 ease-out text-[0.8rem] tracking-[0.2em] ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          } delay-700 ${
            activeLink === "shop"
              ? "text-amber-400 shadow-[0_0_15px_rgba(245,197,94,0.7)] px-4 py-2 rounded-lg"
              : "text-slate-200"
          }`}
        >
          SHOP
        </Link>

        {/* CONTACTS LINK */}
        <Link
          href="#contacts"
          onClick={() => handleLinkClick("contacts")}
          className={`hidden md:block uppercase transition-all duration-700 ease-out text-[0.8rem] tracking-[0.2em] ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          } delay-1100 ${
            activeLink === "contacts"
              ? "text-amber-400 shadow-[0_0_15px_rgba(245,197,94,0.7)] px-4 py-2 rounded-lg"
              : "text-slate-200"
          }`}
        >
          CONTACTS
        </Link>

        {/* HAMBURGER (mobile) */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span
            className={`h-0.5 w-6 bg-slate-100 transition-transform duration-300 ${
              open ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-slate-100 transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-slate-100 transition-transform duration-300 ${
              open ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* MOBILE MENU (under bar, full width) */}
      <div
        className={`md:hidden flex flex-col items-center gap-3 pt-2 pb-4 transition-all duration-500 ease-out origin-top ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        {/* MOBILE ABOUT LINK */}
        <Link
          href="#about"
          onClick={() => {
            setOpen(false);
            handleLinkClick("about");
          }}
          className={`uppercase text-xs tracking-[0.2em] transition-all duration-500 ease-out ${
            open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          } delay-300 ${
            activeLink === "about"
              ? "text-amber-400 shadow-[0_0_10px_rgba(245,197,94,0.7)] px-4 py-2 rounded-lg"
              : "text-slate-200"
          }`}
        >
          ABOUT
        </Link>

        {/* MOBILE WORK LINK */}
        <Link
          href="#work"
          onClick={() => {
            setOpen(false);
            handleLinkClick("work");
          }}
          className={`uppercase text-xs tracking-[0.2em] transition-all duration-500 ease-out ${
            open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          } delay-400 ${
            activeLink === "work"
              ? "text-amber-400 shadow-[0_0_10px_rgba(245,197,94,0.7)] px-4 py-2 rounded-lg"
              : "text-slate-200"
          }`}
        >
          WORK
        </Link>

        {/* MOBILE SHOP LINK */}
        <Link
          href="#shop"
          onClick={() => {
            setOpen(false);
            handleLinkClick("shop");
          }}
          className={`uppercase text-xs tracking-[0.2em] transition-all duration-500 ease-out ${
            open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          } delay-500 ${
            activeLink === "shop"
              ? "text-amber-400 shadow-[0_0_10px_rgba(245,197,94,0.7)] px-4 py-2 rounded-lg"
              : "text-slate-200"
          }`}
        >
          SHOP
        </Link>

        {/* MOBILE CONTACTS LINK */}
        <Link
          href="#contacts"
          onClick={() => {
            setOpen(false);
            handleLinkClick("contacts");
          }}
          className={`uppercase text-xs tracking-[0.2em] transition-all duration-500 ease-out ${
            open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          } delay-600 ${
            activeLink === "contacts"
              ? "text-amber-400 shadow-[0_0_10px_rgba(245,197,94,0.7)] px-4 py-2 rounded-lg"
              : "text-slate-200"
          }`}
        >
          CONTACTS
        </Link>
      </div>
    </nav>
  );
}
