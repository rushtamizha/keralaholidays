"use client"
"use client"
import React from 'react';
import { motion } from 'framer-motion';

const ImageMarquee = () => {
  const gallery = [
    { url: "/packages/tea-garden-family-photoshoot-in-munnar-scaled.jpg", label: "Munnar Hills" },
    { url: "/packages/alleppey-backwater-tour.jpg", label: "Alleppey Backwaters" },
    { url: "/packages/wildlife-in-wayanad6358c80fd9737.jpg", label: "Wayanad Forests" },
    { url: "/packages/thekkadi-wildlife.jpg", label: "Traditional Houseboats" },
    { url: "/packages/Varkala_beach_from_above.jpg", label: "Varkala Cliffs" },
    { url: "/packages/kochi-heritage.jpg", label: "Kochi Heritage" },
  ];

  // Duplicating for seamless infinite loop
  const loopGallery = [...gallery, ...gallery];

  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="flex relative">
        <motion.div 
          className="flex gap-4"
          animate={{ x: [0, -1920] }} // Adjust based on total width of images
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {loopGallery.map((item, idx) => (
            <div 
              key={idx} 
              className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] shrink-0 overflow-hidden rounded-[2.5rem] group"
            >
              {/* Image */}
              <img 
                src={item.url} 
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Glass Label Overlay (Premium Touch) */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-2xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white font-bold text-sm tracking-widest uppercase">
                    {item.label}
                  </p>
                </div>
              </div>

              {/* Subtle Darkening Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating CTA (Optional Overlap) */}
      <div className="text-center mt-12">
        <h3 className="text-slate-300 font-medium tracking-[0.4em] text-[10px] uppercase">
          Infinite Beauty • Infinite Memories
        </h3>
      </div>
    </section>
  );
};

export default ImageMarquee;