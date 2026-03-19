// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { Award, ShieldCheck, Map, Users, Star } from "lucide-react";
// import Image from "next/image";

// const AboutFeatures = () => {
//   const stats = [
//     { icon: <Users size={20} />, label: "Happy Travelers", value: "10k+" },
//     { icon: <Star size={20} />, label: "Expert Guides", value: "50+" },
//     { icon: <Award size={20} />, label: "Years Experience", value: "12+" },
//   ];

//   return (
//     // ADDED: overflow-hidden to prevent the blur circles from creating horizontal scroll
//     <section
//       id="about"
//       className="py-24 px-6 bg-slate-50 w-full overflow-hidden"
//     >
//       <div className="max-w-6xl mx-auto">
//         <div className="grid lg:grid-cols-12 gap-16 items-center">
//           {/* Left Side: Text Content */}
//           <div className="lg:col-span-7">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//             >
//               <h4 className="text-emerald-600 font-bold uppercase tracking-[0.3em] text-xs mb-4">
//                 Welcome To
//               </h4>
//               <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
//                 Aventura Kerala <br />
//                 <span className="text-emerald-600 italic font-serif underline decoration-emerald-100 underline-offset-8">
//                   Holidays
//                 </span>
//               </h2>
//               <p className="text-slate-600 text-lg leading-relaxed mb-8">
//                 At Aventura, we believe travel is more than just visiting places
//                 – it’s about
//                 <span className="text-emerald-700 font-semibold">
//                   {" "}
//                   creating memories
//                 </span>{" "}
//                 that last a lifetime. Based in the heart of Kerala, we offer
//                 authentic, affordable, and unforgettable experiences tailored
//                 with local expertise.
//               </p>

//               {/* Icon Features */}
//               <div className="grid sm:grid-cols-2 gap-6 mb-10">
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-white shadow-md rounded-2xl text-emerald-600">
//                     <ShieldCheck size={24} />
//                   </div>
//                   <div>
//                     <h5 className="font-bold text-slate-800">
//                       Local Expertise
//                     </h5>
//                     <p className="text-sm text-slate-500 text-pretty">
//                       Deep roots in Kerala for truly authentic vibes.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-white shadow-md rounded-2xl text-emerald-600">
//                     <Map size={24} />
//                   </div>
//                   <div>
//                     <h5 className="font-bold text-slate-800">Tailored Trips</h5>
//                     <p className="text-sm text-slate-500">
//                       Every itinerary is unique to your comfort and care.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Right Side: Visual Card */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="lg:col-span-5 relative"
//           >
//             {/* The Image Container */}
//             <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
//               <Image
//                 src="/angent.jpg"
//                 alt="Kerala Culture"
//                 fill
//                 sizes="(max-width: 768px) 100vw, 50vw"
//                 priority={true} 
//                 className="object-cover transition-transform duration-700 hover:scale-105"
//               />
//               {/* Floating Stat Card */}
//               <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md p-6 rounded-[2rem] shadow-xl border border-white/50">
//                 <div className="flex justify-between items-center text-center">
//                   {stats.map((stat, idx) => (
//                     <div key={idx} className="flex flex-col items-center">
//                       <div className="text-emerald-700 mb-1">{stat.icon}</div>
//                       <span className="text-xl font-black text-slate-900">
//                         {stat.value}
//                       </span>
//                       <span className="text-[10px] uppercase font-bold text-slate-400 tracking-tighter">
//                         {stat.label}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Decorative Background Elements - These are usually the cause of X-axis scroll */}
//             <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl -z-10" />
//             <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-amber-100/40 rounded-full blur-2xl -z-10" />
//           </motion.div>
//         </div>

//         {/* Section Divider */}
//         <div className="mt-24 text-center">
//           <h3 className="text-2xl font-bold text-slate-800 flex items-center justify-center gap-4">
//             <span className="h-px w-12 bg-emerald-200" />
//             Explore These Gems
//             <span className="h-px w-12 bg-emerald-200" />
//           </h3>
//           <p className="text-slate-400 mt-2 font-medium">
//             Top Tour Packages Curated for You
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutFeatures;


"use client";
import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Map, Users, Star } from "lucide-react";
import Image from "next/image";

const AboutFeatures = () => {
  const stats = [
    { icon: <Users size={20} />, label: "Happy Travelers", value: "10k+" },
    { icon: <Star size={20} />, label: "Expert Guides", value: "50+" },
    { icon: <Award size={20} />, label: "Years Experience", value: "12+" },
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 bg-slate-50 w-full overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Text Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-emerald-600 font-bold uppercase tracking-[0.3em] text-xs mb-4">
                Welcome To
              </h4>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                Aventura Kerala <br />
                <span className="text-emerald-600 italic font-serif underline decoration-emerald-100 underline-offset-8">
                  Holidays
                </span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                At Aventura, we believe travel is more than just visiting places
                – it’s about
                <span className="text-emerald-700 font-semibold">
                  {" "}creating memories
                </span>{" "}
                that last a lifetime. Based in the heart of Kerala, we offer
                authentic, affordable, and unforgettable experiences tailored
                with local expertise.
              </p>

              {/* Icon Features */}
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white shadow-md rounded-2xl text-emerald-600 shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800">
                      Local Expertise
                    </h5>
                    <p className="text-sm text-slate-500 text-pretty">
                      Deep roots in Kerala for truly authentic vibes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white shadow-md rounded-2xl text-emerald-600 shrink-0">
                    <Map size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800">Tailored Trips</h5>
                    <p className="text-sm text-slate-500">
                      Every itinerary is unique to your comfort and care.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            {/* FIX: The immediate parent of a 'fill' image MUST have a height.
               Added h-[400px] md:h-[500px] to ensure visibility.
            */}
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white h-[450px] md:h-[550px] w-full">
              <Image
                src="/angent.jpg" // Ensure this exists in your public folder as /angent.jpg
                alt="Kerala Culture"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
              
              {/* Floating Stat Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-[2rem] shadow-xl border border-white/50">
                <div className="flex justify-between items-center text-center">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="text-emerald-700 mb-1">{stat.icon}</div>
                      <span className="text-xl font-black text-slate-900">
                        {stat.value}
                      </span>
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-tighter">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-amber-100/40 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>

        {/* Section Divider */}
        <div className="mt-24 text-center">
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="h-px w-12 bg-emerald-200" />
            <h3 className="text-2xl font-bold text-slate-800">
              Explore These Gems
            </h3>
            <span className="h-px w-12 bg-emerald-200" />
          </div>
          <p className="text-slate-400 font-medium uppercase tracking-widest text-[10px]">
            Top Tour Packages Curated for You
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutFeatures;