"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mountain, 
  Car, 
  Map, 
  Palmtree, 
  Sunrise, 
  Waves, 
  Users, 
  GlassWater 
} from 'lucide-react';

const UniqueExperiences = () => {
  const experiences = [
    {
      id: 1,
      icon: <Mountain className="text-emerald-700" size={32} />,
      title: "Trekking",
      subtitle: "in the Western Ghats",
      description: "Explore hidden waterfalls, panoramic viewpoints, and dense, ancient forests.",
      tag: "ADVENTURE",
      image: "/explore/trekking.webp"
    },
    {
      id: 2,
      icon: <Car className="text-emerald-700" size={32} />,
      title: "Jeep Safari",
      subtitle: "to Kolukkumalai",
      description: "A rugged journey to visit the world's highest tea plantation for a perfect sunrise.",
      tag: "EXPLORE",
      image: "/explore/jeep.jpg"
    },
    {
      id: 3,
      icon: <Users className="text-emerald-700" size={32} />,
      title: "Cultural Immersion",
      subtitle: "Authentic Kerala",
      description: "Visit traditional villages, learn local arts & crafts, and taste authentic Kerala cuisine.",
      tag: "HERITAGE",
      image: "/explore/cultural.avif"
    },
    {
      id: 4,
      icon: <Waves className="text-emerald-700" size={32} />,
      title: "Houseboat Cruises",
      subtitle: "Alleppey Backwaters",
      description: "Sail through tranquil backwaters, spot exotic wildlife, and enjoy local seafood.",
      tag: "RELAX",
      image: "/explore/backwaters.jpg"
    }
  ];

  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 px-4 py-2 w-fit mx-auto rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase mb-4"
          >
            <Sunrise size={14} className="text-amber-500" />
            <span>Signature Experiences</span>
          </motion.div>
          
          <h2 className="text-5xl font-black text-slate-900 leading-tight">
            Our Unique <span className="text-emerald-600 italic font-serif underline decoration-emerald-100 underline-offset-8">Tour Options</span>
          </h2>
          <p className="text-slate-500 mt-6 leading-relaxed">
            Beyond ordinary sightseeing, we connect you with the soulful side of Kerala through these curated, exclusive journeys.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-white rounded-[2.5rem] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-2xl hover:border-emerald-100 transition-all duration-500 overflow-hidden"
            >
              {/* Image Container with Zoom */}
              <div className="relative h-48 w-full rounded-[2rem] overflow-hidden mb-6">
                <img 
                  src={exp.image} 
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                {/* Tag Badge */}
                <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/20 uppercase tracking-widest">
                  {exp.tag}
                </span>
              </div>

              {/* Text Content */}
              <div className="px-3 pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-4 bg-emerald-50 rounded-2xl group-hover:bg-amber-50 transition-colors">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-950 group-hover:text-emerald-800">{exp.title}</h3>
                    <p className="text-[11px] uppercase font-semibold text-emerald-600 tracking-wider">
                      {exp.subtitle}
                    </p>
                  </div>
                </div>
                
                <p className="text-slate-500 text-sm leading-relaxed text-pretty">
                  {exp.description}
                </p>
                
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueExperiences;