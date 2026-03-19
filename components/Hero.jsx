"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Send, 
  Sparkles, 
  User, 
  Phone, 
  Calendar,
  Waves,
  Palmtree,
  ChevronDown
} from 'lucide-react';

const Hero = () => {
  // 1. Image Loop Configuration
  const bgImages = [
    "/packages/alleppey-backwater-tour.jpg",
    "/packages/kochi-heritage.jpg",
    "/packages/tea-garden-family-photoshoot-in-munnar-scaled.jpg",
    "/packages/thekkadi-wildlife.jpg",
    "/packages/Varkala_beach_from_above.jpg",
    "/packages/wildlife-in-wayanad6358c80fd9737.jpg",
  ];

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 6000); // Change every 6 seconds for a relaxed feel
    return () => clearInterval(timer);
  }, []);

  // 2. Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    destination: ''
  });

  const destinations = ["Munnar", "Alleppey", "Wayanad", "Thekkady", "Varkala", "Kochi"];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();
    const phoneNumber = "918281674180";
    
    const message = `*New Inquiry: Aventura Kerala*%0A` +
                    `--------------------------%0A` +
                    `*Name:* ${formData.name}%0A` +
                    `*Phone:* ${formData.phone}%0A` +
                    `*Date:* ${formData.date}%0A` +
                    `*Destination:* ${formData.destination}%0A` +
                    `--------------------------%0A` +
                    `Please share premium package details.`;

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-emerald-950">
      
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentBg}
            src={bgImages[currentBg]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="w-full h-full object-cover"
            alt="Kerala Background"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-emerald-950" />
      </div>

      <div className="relative z-10 max-w-7xl w-full px-6 pt-34 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Copy */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 text-[10px] font-black uppercase tracking-widest mb-8">
            <Sparkles size={14} className="text-amber-400" />
            <span>God's Own Country Awaits</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tighter">
            Kerala <br />
            <span className="text-emerald-400 italic font-serif font-light">Refined.</span>
          </h1>
          
          <p className="text-lg text-emerald-50/60 mb-10 max-w-md leading-relaxed">
            Experience bespoke luxury travel. From private houseboats to mist-covered estates, we curate the soul of Kerala for you.
          </p>
          
          <div className="flex gap-8 text-emerald-100/30 text-[10px] uppercase font-black tracking-[0.2em]">
            <span className="flex items-center gap-3"><Waves size={18} /> Backwaters</span>
            <span className="flex items-center gap-3"><Palmtree size={18} /> Hill Stations</span>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="w-full max-w-md lg:ml-auto"
        >
          <div className="bg-white rounded-[3.5rem] p-10 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Book a Trip</h3>
              <p className="text-slate-400 text-sm font-medium mb-8">Get your custom itinerary on WhatsApp.</p>
              
              <form onSubmit={handleWhatsAppRedirect} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 text-emerald-600" size={18} />
                  <input
                    required name="name" type="text" placeholder="Your Name" onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-100 p-5 pl-14 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-slate-600"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-emerald-600" size={18} />
                  <input
                    required name="phone" type="tel" placeholder="Phone Number" onChange={handleInputChange}
                    className="w-full text-slate-600 bg-slate-50 border border-slate-100 p-5 pl-14 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    required name="date" type="date" onChange={handleInputChange}
                    className="w-full text-slate-600 bg-slate-50 border border-slate-100 p-5 rounded-2xl text-xs font-bold focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                  <select
                    required name="destination" onChange={handleInputChange}
                    className="w-full text-slate-600 bg-slate-50 border border-slate-100 p-5 rounded-2xl text-xs font-bold focus:ring-2 focus:ring-emerald-500 outline-none appearance-none"
                  >
                    <option value="">Destination</option>
                    {destinations.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-900 hover:bg-black text-white font-black py-6 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 group uppercase tracking-widest text-[10px]"
                >
                  Check Availability <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/20"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
