"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare,
  CheckCircle2,
  Send
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    destination: '',
    adults: '',
    children: '0',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Business details
    const phoneNumber = "9182816741080"; 
    
    // Construct WhatsApp message with bolding and line breaks
    const text = `*New Inquiry: Aventura Kerala Holidays*%0A%0A` +
                 `*Name:* ${formData.fullName}%0A` +
                 `*Phone:* ${formData.phone}%0A` +
                 `*Destination:* ${formData.destination}%0A` +
                 `*Travelers:* ${formData.adults} Adults, ${formData.children} Children%0A` +
                 `*Date:* ${formData.date}%0A` +
                 `*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen pt-32 pb-20 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header Section */}
          <div className="mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4"
            >
              <div className="h-px w-10 bg-emerald-600" />
              <span>Get in Touch</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight">
              Plan Your <span className="text-emerald-800/50 italic font-serif">Dream Trip</span>
            </h1>
          </div>

          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Form Section */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-7"
            >
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-emerald-50 rounded-[3rem] border border-emerald-100">
                  <CheckCircle2 size={64} className="text-emerald-600 mb-6" />
                  <h2 className="text-3xl font-black text-slate-900 mb-4">Opening WhatsApp...</h2>
                  <p className="text-slate-600 max-w-sm italic">
                    We are forwarding your details to our travel expert. Please send the pre-filled message in the WhatsApp window.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)} 
                    className="mt-6 text-emerald-700 font-bold text-sm underline"
                  >
                    Edit Information
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-600 ml-4">Full Name *</label>
                      <input 
                         required name="fullName" value={formData.fullName} onChange={handleChange}
                         type="text" placeholder="e.g. John Doe" 
                         className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:bg-white transition-all outline-none" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-600 ml-4">Phone Number</label>
                      <input 
                         name="phone" value={formData.phone} onChange={handleChange}
                         type="tel" placeholder="+91 00000 00000" 
                         className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:bg-white transition-all outline-none" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-600 ml-4">Destination *</label>
                    <div className="relative">
                      <select 
                        required name="destination" value={formData.destination} onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:bg-white transition-all appearance-none outline-none"
                      >
                        <option value="">Select a Destination</option>
                        <option value="Munnar">Munnar - Tea Gardens</option>
                        <option value="Alleppey">Alleppey - Backwaters</option>
                        <option value="Wayanad">Wayanad - Wildlife</option>
                        <option value="Thekkady">Thekkady - Spice Plantations</option>
                        <option value="Custom">Custom Multi-City Tour</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-600 ml-4">Adults *</label>
                      <input 
                        required name="adults" value={formData.adults} onChange={handleChange}
                        type="number" min="1" placeholder="2" 
                        className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-600 ml-4">Children</label>
                      <input 
                        name="children" value={formData.children} onChange={handleChange}
                        type="number" min="0" placeholder="0" 
                        className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none" 
                      />
                    </div>
                    <div className="space-y-2 col-span-2 md:col-span-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-600 ml-4">Travel Date *</label>
                      <input 
                        required name="date" value={formData.date} onChange={handleChange}
                        type="date" 
                        className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-600 ml-4">Message *</label>
                    <textarea 
                      required name="message" value={formData.message} onChange={handleChange}
                      rows="4" placeholder="Tell us about your requirements..." 
                      className="w-full bg-slate-50 border border-slate-100 px-6 py-6 rounded-[2rem] focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:bg-white transition-all outline-none"
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full bg-emerald-900 text-white font-bold py-5 rounded-full flex items-center justify-center gap-3 hover:bg-emerald-800 transition-all active:scale-[0.98] shadow-xl shadow-emerald-900/10">
                    Send Inquiry via WhatsApp <MessageSquare size={18} />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-5 space-y-10"
            >
              <div className="bg-slate-900 p-10 rounded-[3rem] text-white space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl" />
                
                <div>
                  <h3 className="text-2xl font-black mb-4 tracking-tight">Contact Us</h3>
                  <p className="text-slate-400 text-sm italic">Call us or WhatsApp now to get your personalized itinerary.</p>
                </div>

                <div className="space-y-6">
                  <a href="tel:+9182816741080" className="flex items-center gap-5 group">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                      <Phone size={20} className="text-emerald-400 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Phone Number</p>
                      <p className="font-bold text-lg">+91 82816741080</p>
                    </div>
                  </a>

                  <a href="mailto:aventurakeralaholidays@gmail.com" className="flex items-center gap-5 group">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                      <Mail size={20} className="text-emerald-400 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Send Email</p>
                      <p className="font-bold text-sm">aventurakeralaholidays@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="p-10 border border-slate-100 rounded-[3rem] space-y-6">
                <div className="flex items-center gap-3 text-emerald-600">
                  <MapPin size={24} />
                  <h4 className="font-black uppercase tracking-widest text-xs">Our Location</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed italic font-medium">
                  Bysonvally tea company, Pottankad post<br />
                  <span className="text-slate-400">Land mark: Opposite to Marry Matha Church</span><br />
                  Munnar - 685612, Kerala
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}