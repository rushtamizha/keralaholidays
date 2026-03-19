"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  PhoneCall,
  MapPin,
  Palmtree,
  Info,
  Home,
  Users,
  Briefcase,
  Car,
  Hotel,
  MessageSquareQuote,
  Compass,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);const phoneNumber = "+918281674180";

  // Toggle background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", icon: <Home size={20} />, href: "/" },
    { name: "About Us", icon: <Users size={20} />, href: "#about" },
    { name: "Packages", icon: <Briefcase size={20} />, href: "#packages" },
    { name: "Cabs", icon: <Car size={20} />, href: "#cabs" },
    { name: "Resorts", icon: <Hotel size={20} />, href: "#resorts" },
    {
      name: "Testimonials",
      icon: <MessageSquareQuote size={20} />,
      href: "#testimonials",
    },
  ];

  return (
    <header className="fixed w-full z-50 top-0 left-0 pt-6 px-4">
      <nav
        className={`mx-auto max-w-5xl transition-all duration-500 ease-in-out px-6 py-3 flex items-center justify-between
          ${
            isScrolled
              ? "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-full border border-emerald-50"
              : "bg-white/10 backdrop-blur-md rounded-full border border-white/20"
          }`}
      >
        <div className="flex items-center gap-3 group cursor-pointer">
          {/* Logo Container */}
          <div className="relative w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-sm overflow-hidden border border-slate-100 transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-110">
            <Image
              src="/aventura-logo.png"
              alt="Aventura Kerala Holidays Logo"
              width={52}
              height={52}
              className="object-contain " // Added padding if the PNG touches edges
              priority // Ensures the logo loads immediately (LCP optimization)
            />
          </div>

          {/* Brand Name */}
          <div className="flex flex-col leading-none">
            <span
              className={`font-black text-xl tracking-tighter transition-colors duration-300 ${
                isScrolled ? "text-slate-900" : "text-white"
              }`}
            >
              AVENTURA
              <span
                className={`ml-0.5 font-serif italic font-medium transition-colors ${
                  isScrolled ? "text-emerald-600" : "text-emerald-400"
                }`}
              >
                .
              </span>
            </span>
            <span
              className={`text-[8px] font-black uppercase tracking-[0.3em] transition-opacity duration-300 ${
                isScrolled ? "text-emerald-800/60" : "text-white/50"
              }`}
            >
              Kerala Holidays Munnar
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-sm font-semibold hover:text-emerald-500 transition-all
                    ${isScrolled ? "text-slate-700" : "text-white/90"}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Link href="/contact">
            <button className="bg-emerald-800 hover:bg-emerald-900 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-md">
              Book Now
            </button>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2.5 rounded-full transition-all active:scale-90
            ${isScrolled ? "text-emerald-950 bg-emerald-50" : "text-white bg-white/20"}`}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[100px] left-4 right-4 bg-white rounded-[2rem] shadow-2xl overflow-hidden md:hidden border border-emerald-50 p-4"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-emerald-50 text-slate-800 font-semibold transition-colors group"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-emerald-700 group-hover:scale-110 transition-transform">
                    {link.icon}
                  </span>
                  {link.name}
                </a>
              ))}

              <div className="mt-2 pt-4 border-t border-emerald-50">
                <motion.a
                  href={`tel:${phoneNumber}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full"
                >
                  <button className="flex items-center justify-center gap-3 w-full bg-emerald-800 text-white py-4 rounded-2xl font-bold transition-all shadow-lg hover:bg-emerald-900 active:opacity-90">
                    <PhoneCall size={18} />
                    Speak to an Expert
                  </button>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
