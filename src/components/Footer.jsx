import React from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="bg-primary w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
              GA
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              Gate <span className="text-primary">Automation</span>
            </h3>
          </Link>
          <p className="max-w-xs leading-relaxed">
            Leading provider of smart, secure, and intelligent gate automation systems for residential and commercial properties.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><FaTwitter size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="/models" className="hover:text-primary transition-colors">Gate Models</Link></li>
            <li><Link href="/gallery" className="hover:text-primary transition-colors">Project Gallery</Link></li>
            <li><Link href="/#features" className="hover:text-primary transition-colors">Key Features</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-6 text-lg">Contact Details</h4>
          <ul className="space-y-4">
            <li>12 Harington road,<br />Feltham, London TW14 9AB</li>
            <li>Phone: 07300960920</li>
          </ul>
        </div>

        {/* WhatsApp Link */}
        <div>
          <h4 className="text-white font-semibold mb-6 text-lg">Support</h4>
          <p className="mb-6">Need quick help? Chat with our experts on WhatsApp.</p>
          <a
            href="https://wa.me/447449891198"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-whatsapp text-white px-6 py-3 rounded-xl font-semibold hover:bg-whatsapp/90 transition-all"
          >
            <FaWhatsapp className="text-xl" />
            <span>Chat Now</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-slate-800 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} Gate Automation. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
