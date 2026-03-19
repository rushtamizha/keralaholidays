"use client";
import React from "react";
import Link from "next/link";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
  Send,
} from "lucide-react";

// Social links configuration
export const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61576891907450",
    label: "Facebook",
  },
  { icon: Twitter, href: "#", label: "Twitter" },
];

// Navigation links configuration
const navItems = [
  { name: "Home", href: "/" },
  { name: "Tour Packages", href: "#packages" },
  { name: "Cab Services", href: "#cabs" },
  { name: "Resorts", href: "#resorts" },
  { name: "About Us", href: "#about" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#022c22] text-white pt-20 pb-10 overflow-hidden relative">
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <h2 className="text-2xl font-black tracking-tighter italic">
                Aventura<span className="text-emerald-400 font-serif">.</span>
              </h2>
            </Link>
            <p className="text-emerald-50/60 text-sm leading-relaxed max-w-xs">
              Crafting authentic Kerala memories since 2014. From misty hills to
              tranquil backwaters, we take you to the heart of God's Own
              Country.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 rounded-full bg-white/5 hover:bg-emerald-500 hover:scale-110 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-emerald-400 uppercase tracking-widest text-xs mb-8">
              Navigation
            </h4>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-emerald-50/60 hover:text-white text-sm flex items-center gap-2 group transition-colors"
                  >
                    <div className="w-1 h-1 bg-emerald-500 rounded-full scale-0 group-hover:scale-100 transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-bold text-emerald-400 uppercase tracking-widest text-xs mb-8">
              Contact Us
            </h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <MapPin className="text-emerald-500 shrink-0" size={20} />
                <span className="text-emerald-50/60 text-sm italic leading-relaxed">
                  Bysonvally tea company, Pottankad post
                  <br />
                  Land mark: Opposite to Marry Matha Church, Munnar-685612.
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="text-emerald-500 shrink-0" size={20} />
                <a
                  href="mailto:aventurakeralaholidays@gmail.com"
                  className="text-emerald-50/60 text-sm hover:text-white transition-colors"
                >
                  aventurakeralaholidays@gmail.com
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="text-emerald-500 shrink-0" size={20} />
                <a
                  href="tel:+9182816741080"
                  className="text-emerald-50/60 text-sm hover:text-white transition-colors"
                >
                  +91 8281674180
                </a>
              </li>
            </ul>
          </div>

          {/* WhatsApp Primary CTA */}
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-white text-lg mb-2">
                Plan Your Trip?
              </h4>
              <p className="text-emerald-50/50 text-xs mb-6 leading-relaxed">
                Chat with our travel experts on WhatsApp for a custom itinerary.
              </p>
            </div>
            <Link
              href="https://wa.me/918281674180"
              target="_blank"
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 group"
            >
              Message Us{" "}
              <Send
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>

        {/* Trust & Copyright Section */}
        <div className="pt-10 hidden flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6 opacity-40 ">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Dept. of Tourism Licensed
              </span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <span className="text-[10px] font-bold uppercase tracking-widest">
              ISO 9001 Certified
            </span>
          </div>

          
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 ">
          <p className="text-emerald-50/20 text-[10px] uppercase font-bold tracking-[0.2em]">
            © {currentYear} Aventura Kerala Holidays
          </p>

          {/* Your Agency Credit */}
          <div className="flex items-center gap-2 group">
            <span className="text-yellow-200 text-[10px] uppercase font-bold tracking-widest">
              Developed by
            </span>
            <a
              href="https://wepzite.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 group-hover:text-yellow-400 font-black text-[11px] tracking-tighter transition-colors italic"
            >
              WEPZITE<span className="text-yellow-500">.</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
