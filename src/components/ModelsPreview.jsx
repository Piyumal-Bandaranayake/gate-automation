"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const models = [
  {
    id: 1,
    name: 'Sliding Gates',
    description: 'Space-saving and secure, perfect for modern driveways with limited space.',
    image: '/images/models/model-1.png',
  },
  {
    id: 2,
    name: 'Swing Gates',
    description: 'Classic elegance meeting modern automation. Ideal for spacious entrances.',
    image: '/images/models/model-2.png',
  },
  {
    id: 3,
    name: 'Smart Access Gates',
    description: 'Integrated with AI facial recognition and mobile app control for ultimate security.',
    image: '/images/models/model-3.png',
  }
];

const ModelsPreview = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[60%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] -right-[10%] w-[30%] h-[50%] bg-blue-400/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-display text-text-primary mb-4"
          >
            Popular Gate Models
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-1.5 bg-primary mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {models.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full"
            >
              <div className="relative h-56 m-2 overflow-hidden rounded-[1.5rem]">
                <Image 
                  src={model.image} 
                  alt={model.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">{model.name}</h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed flex-grow">{model.description}</p>
                <a 
                  href={`https://wa.me/your-number?text=I'm interested in the ${model.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-[#00C853] text-white font-bold py-3 rounded-xl hover:bg-[#00B248] transition-all shadow-md active:scale-95"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>Inquiry on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/models"
            className="inline-flex items-center justify-center bg-primary text-white font-bold px-10 py-4 rounded-full hover:bg-primary/90 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-primary/20"
          >
            Explore More Models
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ModelsPreview;
