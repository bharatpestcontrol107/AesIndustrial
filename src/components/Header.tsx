'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Menu, X } from 'lucide-react';

const navItems = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'PRODUCTS', href: '#products' },
  { name: 'INDUSTRIES', href: '#industries' },
  { name: 'BRANDS', href: '#brands' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-[#1e3a5f] text-white text-xs py-1.5 relative overflow-hidden">
        <div className="absolute inset-0 hazard-stripes opacity-10" />
        <div className="container mx-auto px-4 flex justify-between items-center relative z-10">
          <div className="flex items-center gap-6">
            <a href="tel:+919823031535" className="flex items-center gap-1.5 hover:text-[#c45a20] transition-colors font-mono">
              <Phone size={11} />
              +91 98230 31535
            </a>
            <a href="tel:+919766328233" className="flex items-center gap-1.5 hover:text-[#c45a20] transition-colors font-mono">
              <Phone size={11} />
              +91 97663 28233
            </a>
            <a href="mailto:info@aesindustrial.in" className="hidden sm:flex items-center gap-1.5 hover:text-[#c45a20] transition-colors font-mono">
              <Mail size={11} />
              info@aesindustrial.in
            </a>
          </div>
          <div className="font-mono tracking-wider">
            EST. 1998 • PUNE, INDIA
          </div>
        </div>
      </div>

      {/* Main header */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#faf8f5]/95 backdrop-blur-sm shadow-md' : 'bg-[#faf8f5]'
        }`}
      >
        {/* Decorative top line */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#c45a20] to-transparent" />
        
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-4 group">
              <div className="relative">
                <div className="w-14 h-14 border-2 border-[#c45a20] flex items-center justify-center relative">
                  <span className="text-[#c45a20] font-black text-xl tracking-tighter">AES</span>
                  {/* Corner accents */}
                  <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#c45a20]" />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#c45a20]" />
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="text-[#1e3a5f] font-black text-lg tracking-wide">INDUSTRIAL</div>
                <div className="text-[#6c757d] text-[10px] tracking-[0.3em] font-mono">PVT. LTD.</div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-5 py-2 text-xs font-bold tracking-[0.2em] text-[#5a6872] hover:text-[#1e3a5f] transition-colors group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c45a20] origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Number prefix */}
                  <span className="absolute -top-1 left-1 text-[8px] text-[#c45a20] font-mono opacity-50">
                    0{index + 1}
                  </span>
                </a>
              ))}
            </nav>

            {/* CTA + Mobile Menu */}
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="hidden md:block relative bg-[#c45a20] text-white px-6 py-3 text-xs font-bold tracking-[0.15em] overflow-hidden group"
              >
                <span className="relative z-10">GET QUOTE</span>
                <div className="absolute inset-0 bg-[#1e3a5f] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold tracking-[0.15em] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                  GET QUOTE
                </span>
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-12 h-12 border border-[#e8e4dc] flex items-center justify-center text-[#1e3a5f] hover:border-[#c45a20] hover:text-[#c45a20] transition-colors"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#faf8f5] border-t border-[#e8e4dc]"
            >
              <nav className="container mx-auto px-4 py-6 flex flex-col">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-4 py-4 border-b border-[#e8e4dc] text-[#5a6872] hover:text-[#c45a20] transition-colors"
                  >
                    <span className="text-[#c45a20] font-mono text-xs">0{index + 1}</span>
                    <span className="font-bold tracking-[0.2em] text-sm">{item.name}</span>
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-6 bg-[#c45a20] text-white py-4 text-center font-bold tracking-[0.15em] text-sm"
                >
                  GET QUOTE
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
