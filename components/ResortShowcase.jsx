// "use client"
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Star, MapPin, Coffee, Wifi, Wind, ArrowUpRight } from 'lucide-react';

// const ResortShowcase = () => {
//   const resorts = [
//     { name: "Luxe Glamp", location: "Munnar", image: "/resorts/luxeglamp.avif" },
//     { name: "Chandy’s Windy Wood", location: "Munnar", image: "/resorts/chandys.jpg" },
//     { name: "The Leaf Munnar", location: "Amalakandam", image: "/resorts/leaf.jpg" },
//     { name: "The Grand Cliff", location: "Mangulam", image: "/resorts/cliff.jpg" },
//     { name: "Parakkat Resorts", location: "Chithrapuram", image: "/resorts/palakkad.jpg" },
//     { name: "Dream Catcher", location: "Byson Valley", image: "/resorts/dream.jpg" },
//     { name: "Vibe Resorts", location: "Eatty City", image: "/resorts/vibe.jpg" },
//     { name: "Panoramic Gateway", location: "Anachal", image: "/resorts/Panorami.jpg" },
//   ];

//   const amenities = [
//     { icon: <Wifi size={14} />, label: "Free Wifi" },
//     { icon: <Coffee size={14} />, label: "Breakfast" },
//     { icon: <Wind size={14} />, label: "Mountain View" },
//   ];

//   return (
//     <section id='resorts' className="py-24 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between  mb-16 gap-6">
//           <div className="max-w-xl text-left">
//             <motion.div 
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               className="flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-3"
//             >
//               <div className="h-px w-8 bg-emerald-600" />
//               <span>Luxury Accommodations</span>
//             </motion.div>
//             <h2 className="text-4xl md:text-5xl font-black text-slate-900">
//               Best Resorts <br />
//               <span className="text-emerald-600 italic font-serif underline decoration-emerald-100 underline-offset-8">in Munnar</span>
//             </h2>
//           </div>
//           <p className="text-slate-500 max-w-sm text-sm leading-relaxed pb-2">
//             We have partnered with the most prestigious properties to ensure your stay is as breathtaking as the views.
//           </p>
//         </div>

//         {/* Resort Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {resorts.map((resort, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.05 }}
//               className="group relative flex flex-col bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500"
//             >
//               {/* Image with Dynamic Badge */}
//               <div className="relative h-64 overflow-hidden">
//                 <img 
//                   src={resort.image} 
//                   alt={resort.name}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
//                   <Star size={10} className="fill-amber-400 text-amber-400" />
//                   <span className="text-[10px] font-black text-slate-800">PREMIUM</span>
//                 </div>
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </div>

//               {/* Info Section */}
//               <div className="p-6">
//                 <div className="flex items-center gap-1 text-emerald-600 mb-2">
//                   <MapPin size={12} />
//                   <span className="text-[10px] font-bold uppercase tracking-widest">{resort.location}</span>
//                 </div>
//                 <h3 className="text-lg font-bold text-slate-900 leading-tight mb-4 group-hover:text-emerald-700 transition-colors">
//                   {resort.name}
//                 </h3>
                
//                 {/* Micro Amenities */}
//                 <div className="flex gap-3 pt-4 border-t border-slate-200">
//                   {amenities.map((item, i) => (
//                     <div key={i} className="text-slate-400 hover:text-emerald-600 transition-colors" title={item.label}>
//                       {item.icon}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ResortShowcase;

"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Coffee, Wifi, Wind, MessageSquare } from 'lucide-react';

const ResortShowcase = () => {
  const resorts = [
    { name: "Luxe Glamp", location: "Munnar", image: "/resorts/luxeglamp.avif" },
    { name: "Chandy’s Windy Wood", location: "Munnar", image: "/resorts/chandys.jpg" },
    { name: "The Leaf Munnar", location: "Amalakandam", image: "/resorts/leaf.jpg" },
    { name: "The Grand Cliff", location: "Mangulam", image: "/resorts/cliff.jpg" },
    { name: "Parakkat Resorts", location: "Chithrapuram", image: "/resorts/palakkad.jpg" },
    { name: "Dream Catcher", location: "Byson Valley", image: "/resorts/dream.jpg" },
    { name: "Vibe Resorts", location: "Eatty City", image: "/resorts/vibe.jpg" },
    { name: "Panoramic Gateway", location: "Anachal", image: "/resorts/Panorami.jpg" },
  ];

  const amenities = [
    { icon: <Wifi size={14} />, label: "Free Wifi" },
    { icon: <Coffee size={14} />, label: "Breakfast" },
    { icon: <Wind size={14} />, label: "Mountain View" },
  ];

  // Logic to handle the WhatsApp redirect
  const handleWhatsAppInquiry = (resortName) => {
    const phoneNumber = "9182816741080";
    const message = `Hi Aventura Kerala Holidays! %0A%0AI am interested in booking a stay at *${resortName}* in Munnar. %0A%0APlease let me know the availability and pricing.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id='resorts' className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between mb-16 gap-6">
          <div className="max-w-xl text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-3"
            >
              <div className="h-px w-8 bg-emerald-600" />
              <span>Luxury Accommodations</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Best Resorts <br />
              <span className="text-emerald-600 italic font-serif underline decoration-emerald-100 underline-offset-8">in Munnar</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm text-sm leading-relaxed md:self-end">
            We have partnered with the most prestigious properties to ensure your stay is as breathtaking as the views.
          </p>
        </div>

        {/* Resort Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {resorts.map((resort, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => handleWhatsAppInquiry(resort.name)}
              className="group relative flex flex-col bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image with Dynamic Badge */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={resort.image} 
                  alt={resort.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Floating Badge */}
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg z-10">
                  <Star size={10} className="fill-amber-400 text-amber-400" />
                  <span className="text-[10px] font-black text-slate-800 tracking-tighter">PREMIUM STAY</span>
                </div>

                {/* Hover Message Overlay */}
                <div className="absolute inset-0 bg-emerald-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <div className="bg-white text-emerald-900 font-bold px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <MessageSquare size={16} />
                      <span className="text-xs uppercase tracking-widest">Inquire Now</span>
                   </div>
                </div>
              </div>

              {/* Info Section */}
              <div className="p-8">
                <div className="flex items-center gap-1 text-emerald-600 mb-3">
                  <MapPin size={12} className="opacity-70" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">{resort.location}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 leading-tight mb-6 group-hover:text-emerald-700 transition-colors tracking-tight">
                  {resort.name}
                </h3>
                
                {/* Amenities & Action Row */}
                <div className="flex items-center justify-between pt-5 border-t border-slate-200/60">
                  <div className="flex gap-4">
                    {amenities.map((item, i) => (
                      <div key={i} className="text-slate-400 group-hover:text-emerald-500 transition-colors" title={item.label}>
                        {item.icon}
                      </div>
                    ))}
                  </div>
                  <div className="text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">
                     <Star size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResortShowcase;