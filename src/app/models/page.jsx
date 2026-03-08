"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const models = [
  {
    id: 1,
    name: 'Elite Sliding Gate',
    description: 'Ultra-smooth sliding mechanism with silent motor and advanced safety sensors. Perfect for modern residential properties.',
    image: '/images/models/model-1.png',
  },
  {
    id: 2,
    name: 'Modern Swing Gate',
    description: 'Elegant double-leaf swing gate with integrated smart home compatibility and high-security locks.',
    image: '/images/models/model-2.png',
  },
  {
    id: 3,
    name: 'Industrial Heavy-Duty',
    description: 'High-security automated gate designed for commercial and industrial use. Built to withstand heavy traffic.',
    image: '/images/models/model-3.png',
  },
  {
    id: 4,
    name: 'Solar-Powered Smart Gate',
    description: 'Eco-friendly automation powered by high-efficiency solar panels. Works perfectly even in remote locations.',
    image: '/images/models/model-1.png', // Reusing for now
  },
  {
    id: 5,
    name: 'Vertical Pivot Gate',
    description: 'Space-saving vertical opening gate. Ideal for narrow driveways where sliding or swinging is not possible.',
    image: '/images/models/model-2.png', // Reusing for now
  },
  {
    id: 6,
    name: 'Telescopic Sliding Gate',
    description: 'Multi-panel sliding design that requires less track space. Innovative solution for limited frontage.',
    image: '/images/models/model-3.png', // Reusing for now
  }
];

const ModelsPage = () => {
  const handleQuote = (modelName) => {
    const message = encodeURIComponent(`I am interested in the ${modelName} gate model.`);
    window.open(`https://wa.me/your-number?text=${message}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Header Section */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[400px] flex items-center">
        {/* Background Image with Parallax effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ 
            backgroundImage: "url('/images/models-hero.png')",
            backgroundAttachment: 'fixed'
          }}
        />
        {/* Darker Overlay for readability */}
        <div className="absolute inset-0 bg-slate-900/60 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold font-display text-white mb-6 uppercase tracking-tighter"
          >
            Explore <span className="text-primary italic-none">Models</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-200 max-w-3xl mx-auto"
          >
            Find the perfect automation solution for your property. From sleek residential designs to heavy-duty industrial systems.
          </motion.p>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {models.map((model, index) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col h-full"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image 
                    src={model.image} 
                    alt={model.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h2 className="text-2xl font-bold text-text-primary mb-4 font-display">{model.name}</h2>
                  <p className="text-text-muted mb-8 leading-relaxed flex-grow">{model.description}</p>
                  <button 
                    onClick={() => handleQuote(model.name)}
                    className="flex items-center justify-center space-x-3 w-full bg-whatsapp text-white font-bold py-4 rounded-xl hover:bg-whatsapp/90 transition-all shadow-md shadow-whatsapp/10"
                  >
                    <FaWhatsapp className="text-xl" />
                    <span>Get Quote on WhatsApp</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
            
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 relative z-10">Don't see what you're looking for?</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">
                We offer custom automation solutions tailored to your specific architectural requirements. Contact our design team today.
            </p>
            <Link 
                href="https://wa.me/your-number"
                className="inline-flex items-center space-x-3 bg-white text-slate-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-slate-100 transition-all relative z-10 shadow-xl"
            >
                Start Custom Design
            </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ModelsPage;
