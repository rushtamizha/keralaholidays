"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Anjali Sharma",
      location: "Mumbai",
      text: "Our honeymoon in Munnar was magical. Aventura handled every detail, from the rose-petal decor to the private plantation trek. Truly God's own country experience!",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=anjali"
    },
    {
      name: "David Miller",
      location: "London, UK",
      text: "The houseboat in Alleppey was the highlight of our India trip. Clean, luxury amenities, and the most delicious local karimeen fry I've ever had.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=david"
    },
    {
      name: "Rahul & Megha",
      location: "Bangalore",
      text: "Excellent cab service. Our driver was more like a guide—knew all the hidden viewpoints in Wayanad. Highly recommended for families.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=rahul"
    },
    {
      name: "Sneha Reddy",
      location: "Hyderabad",
      text: "Aventura's team is incredibly responsive. We had to change our itinerary last minute due to weather, and they fixed everything in an hour!",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=sneha"
    }
  ];

  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section id='testimonials' className="py-24 bg-white overflow-hidden relative">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
          >
            <Star size={12} className="fill-emerald-500 text-emerald-500" />
            Guest Experiences
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
            Loved by <span className="text-emerald-600 italic font-serif underline decoration-emerald-100 underline-offset-8">Travelers</span>
          </h2>
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="flex relative py-10">
        <motion.div 
          className="flex gap-8 px-4"
          animate={{ x: [0, -1800] }}
          transition={{ 
            duration: 50, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {duplicatedReviews.map((review, idx) => (
            <div 
              key={idx}
              className="w-[350px] md:w-[450px] shrink-0 bg-white border border-slate-100 p-10 rounded-[3rem] shadow-[0_10px_50px_rgba(0,0,0,0.04)] group hover:shadow-2xl hover:border-emerald-100 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote size={40} className="text-slate-100 group-hover:text-emerald-50 transition-colors" />
              </div>

              <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium italic">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-slate-50 pt-8">
                <div className="relative">
                  <img 
                    src={review.image} 
                    alt={review.name}
                    className="w-14 h-14 rounded-2xl object-cover transition-all duration-500 shadow-sm"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-1 border-2 border-white">
                    <CheckCircle2 size={10} />
                  </div>
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-base">{review.name}</h4>
                  <p className="text-slate-400 text-[10px] uppercase font-black tracking-widest">
                    {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Side Fades for White Background */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-20" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-20" />
      </div>

      <div className="text-center mt-12 relative z-10">
        <p className="text-slate-400 text-sm font-semibold tracking-tight">
          Rated <span className="text-slate-900">4.9/5</span> based on 2,500+ authentic guest stories
        </p>
      </div>
    </section>
  );
};

export default Testimonials;