

"use client"
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { MapPin, Star, Clock, MessageCircle } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const tourData = [
  {
    id: 1,
    title: "Munnar",
    duration: "3D/2N",
    images: ["/packages/tea-garden-family-photoshoot-in-munnar-scaled.jpg", "/packages/3.jpg"],
    brief: "Explore misty tea gardens, rolling hills, and hidden waterfalls."
  },
  {
    id: 2,
    title: "Alleppey",
    duration: "2D/1N",
    images: ["/packages/alleppey-backwater-tour.jpg", "/packages/alleppey-kerala-india.jpg", "/packages/allepy.jpg"],
    brief: "Serene backwaters and luxury houseboat cruises for a peaceful escape."
  },
  {
    id: 3,
    title: "Thekkady",
    duration: "3D/2N",
    images: ["/packages/thekkady-1920-20230329172714447577.webp", "/packages/thekkady.jpg", "/packages/thekkady1920x1080-20230603101925523333.webp"],
    brief: "Boating in Periyar Lake, spice plantations, and elephant sightings."
  },
  {
    id: 4,
    title: "Varkala",
    duration: "3D/2N",
    images: ["/packages/1-varkala-cliff-varkala-kerala-attr-hero.jpg", "/packages/8a443104-4376-4a14-b59c-1ad2298afeae.jpg", "/packages/Varkala_beach_from_above.jpg"],
    brief: "Stunning cliff-side beaches, mineral springs, and bohemian vibes."
  },
  {
    id: 5,
    title: "Kochi", 
    duration: "2D/2N",
    images: ["/packages/backwater-tourism.jpg", "/packages/90811654cbcde74a82796556762047487558f782-780x988.jpg", "/packages/Kadamakudy%20Island%20by%20Tropiq%20Getaways.webp"],
    brief: "A blend of colonial history, Chinese fishing nets, and modern coastal life."
  },
  {
    id: 6,
    title: "Wayanad",
    duration: "4D/3N",
    images: [ "/packages/wayanad.jpg", "/packages/wayanad1.jpg", "/packages/wildlife-in-wayanad6358c80fd9737.jpg"],
    brief: "Lush forests, ancient Edakkal caves, and mist-clad mountain peaks."
  }
];

const PackageCard = ({ pkg }) => {
  const innerSwiperRef = useRef(null);

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "9182816741080";
    // Constructing a bold, clear message for your WhatsApp
    const message = `*New Inquiry: Aventura Kerala Holidays*%0A` +
                    `--------------------------%0A` +
                    `*Package:* ${pkg.title}%0A` +
                    `*Duration:* ${pkg.duration}%0A` +
                    `--------------------------%0A` +
                    `Hi, I'm interested in the ${pkg.title} package. Please share more details and the best pricing.`;

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.div 
      // Hover triggers autoplay for this specific card
      onMouseEnter={() => innerSwiperRef.current?.autoplay.start()}
      // Mouse leave stops it and resets to the first image
      onMouseLeave={() => {
        innerSwiperRef.current?.autoplay.stop();
        innerSwiperRef.current?.slideTo(0);
      }}
      // Redirect to WhatsApp on click
      onClick={handleWhatsAppRedirect}
      // Mobile Touch Support: Toggle autoplay on tap
      onTouchStart={() => innerSwiperRef.current?.autoplay.start()}
      className="relative h-[500px] rounded-[2.5rem] overflow-hidden group cursor-pointer border border-slate-100  transition-all duration-500"
    >
      {/* INNER SWIPER (The Image Loop) */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={800}
        loop={true}
        onSwiper={(swiper) => {
          innerSwiperRef.current = swiper;
          swiper.autoplay.stop(); // Initial state: No sliding
        }}
        autoplay={{ delay: 1200, disableOnInteraction: false }}
        className="h-full w-full"
      >
        {pkg.images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img 
              src={img} 
              alt={pkg.title} 
              className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" 
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay & Content */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-black/10 to-transparent z-10" />
      
      <div className="absolute top-6 left-6 right-6 flex justify-end items-center z-20">
        <span className="hidden bg-white/10 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-white/20 flex items-center gap-2">
          <Clock size={12} className="text-emerald-400" /> {pkg.duration}
        </span>
        <span className="bg-amber-400 text-amber-950 text-[10px] font-black px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
          <Star size={12} fill="currentColor" /> 4.9
        </span>
      </div>

      <div className="absolute bottom-6 left-6 right-6 z-20">
        <div className="p-6 rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/10 text-white transform transition-all duration-500 group-hover:-translate-y-2">
          <h3 className="text-2xl font-black mb-2 tracking-tight">{pkg.title}</h3>
          <p className="text-xs text-emerald-50/70 line-clamp-2 mb-4 leading-relaxed font-medium">
            {pkg.brief}
          </p>
          <div className="flex items-center gap-2 text-[10px] font-black uppercase text-emerald-400 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
            <MessageCircle size={16} fill="currentColor" className="text-emerald-400" /> 
            Book on WhatsApp
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Packages() {
  return (
    <section id='packages' className="py-20 bg-white overflow-hidden">

      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between  mb-12 gap-6">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-slate-900 font-bold uppercase tracking-widest text-xs  "
            >
              Explore These Gems
            </motion.span>
            <h2 className="text-4xl text-emerald-600 italic font-serif underline decoration-emerald-100 underline-offset-8 font-bold ">
              Top Tour Packages
            </h2>
          </div>
          
        </div>
        
        {/* PARENT SWIPER (Main 3-Card Slider) */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          pagination={{ clickable: true, dynamicBullets: true }}
          // RESPONSIVE BREAKPOINTS
          breakpoints={{
            320: { slidesPerView: 1 }, // Mobile: 1 Card
            768: { slidesPerView: 2 }, // Tablet: 2 Cards
            1024: { slidesPerView: 3 } // Desktop: 3 Cards
          }}
          className="pb-16 main-packages-slider"
        >
          {tourData.map((pkg) => (
            <SwiperSlide key={pkg.id}>
              <PackageCard pkg={pkg} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .main-packages-slider .swiper-pagination-bullet-active {
          background: #065f46 !important;
          width: 20px !important;
          border-radius: 4px !important;
        }
      `}</style>
    </section>
  );
}

