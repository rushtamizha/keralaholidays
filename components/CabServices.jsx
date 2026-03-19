"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Car, 
  ChevronRight, 
  CircleDollarSign, 
  ShieldCheck, 
  MapPin, 
  Info,
  Smartphone
} from 'lucide-react';

const CabServices = () => {
  const cabs = [
    {
      id: 1,
      route: "Munnar Sightseeing",
      vehicle: "Premium Sedan",
      price: "2000.00", // Adjusted for realistic premium pricing
      note: "*Toll, Parking, Hill Station charges Extra",
      image: "/cabs/seden.jpg",
      features: "4 Seats • AC • Music"
    },
    {
      id: 2,
      route: "Kochi Airport Drop/Pick",
      vehicle: "Tavera / MUV",
      price: "2500.00",
      note: "*Toll, Parking, Hill Station charges Extra",
      image: "/cabs/tavera.jpg",
      features: "7 Seats • AC • Large Boot"
    },
    {
      id: 3,
      route: "Madurai Airport Transfer",
      vehicle: "Innova Crysta",
      price: "4500.00",
      note: "*Toll, Parking, Hill Station charges Extra",
      image: "/cabs/innova.jpg",
      features: "6 Seats • Luxury Interior • AC"
    }
  ];

  const handleBooking = (cab) => {
    const phoneNumber = "919000000000"; 
    const message = `*Taxi Booking Inquiry*%0a--------------------------%0a*Route:* ${cab.route}%0a*Vehicle:* ${cab.vehicle}%0a*Rate:* ₹${cab.price}%0a--------------------------%0aPlease confirm availability.`;
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id='cabs' className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between  mb-16 gap-6">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-[0.2em] text-xs mb-3"
            >
              <ShieldCheck size={16} />
              <span>Verified Kerala Cab Services</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Safe Rides, <br />
              <span className="text-emerald-600 italic font-serif underline decoration-emerald-100 underline-offset-8">Clear Fares</span>
            </h2>
          </div>
          
          
        </div>

        {/* Cabs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cabs.map((cab, index) => (
            <motion.div
              key={cab.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-[2.5rem] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-2xl hover:border-emerald-100 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full rounded-[2rem] overflow-hidden mb-6">
                <img 
                  src={cab.image} 
                  alt={cab.vehicle}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-emerald-800 uppercase tracking-tighter shadow-sm">
                  {cab.features}
                </div>
              </div>

              {/* Details */}
              <div className="px-4 pb-4">
                <div className="flex items-center gap-2 text-emerald-600 mb-2">
                  <MapPin size={14} />
                  <span className="text-[10px] font-black uppercase tracking-[0.1em]">{cab.route}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{cab.vehicle}</h3>
                
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-sm font-bold text-slate-400">₹</span>
                  <span className="text-3xl font-black text-slate-900">{cab.price}</span>
                  <span className="text-xs font-medium text-slate-400">/ trip</span>
                </div>

                <div className="flex items-start gap-2 p-3 bg-amber-50 rounded-xl mb-6">
                  <Info size={14} className="text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-[10px] leading-tight text-amber-800/80 font-medium italic">
                    {cab.note}
                  </p>
                </div>

                <button 
                  onClick={() => handleBooking(cab)}
                  className="w-full bg-slate-900 group-hover:bg-emerald-800 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all active:scale-95"
                >
                  <Car size={18} />
                  Book a Taxi
                  <Smartphone size={16} className="opacity-50 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CabServices;