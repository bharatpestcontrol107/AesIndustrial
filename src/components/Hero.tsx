'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown, Zap } from 'lucide-react';

const stats = [
  { number: '27', suffix: '+', label: 'YEARS' },
  { number: '500', suffix: '+', label: 'CLIENTS' },
  { number: '8', suffix: '', label: 'INDUSTRIES' },
  { number: '1000', suffix: '+', label: 'PRODUCTS' },
];

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen bg-gradient-to-br from-[#faf8f5] to-[#f0ebe3] overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 steel-mesh" />
      
      {/* Large decorative text */}
      <motion.div 
        style={{ y }}
        className="absolute top-1/2 left-0 right-0 -translate-y-1/2 overflow-hidden pointer-events-none select-none"
      >
        <div className="text-[20vw] font-black text-[#1e3a5f]/[0.03] whitespace-nowrap tracking-tighter">
          INDUSTRIAL • SOLUTIONS •
        </div>
      </motion.div>

      {/* Vertical lines decoration */}
      <div className="absolute inset-0 flex justify-between px-[10%] pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-px h-full bg-gradient-to-b from-transparent via-[#e8e4dc]/50 to-transparent" />
        ))}
      </div>

      {/* Main content */}
      <motion.div style={{ opacity }} className="relative z-10 container mx-auto px-4 min-h-screen flex flex-col justify-center py-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left content */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-px bg-[#c45a20]" />
              <span className="text-[#c45a20] text-xs font-bold tracking-[0.3em] font-mono">SINCE 1998</span>
            </motion.div>

            {/* Main heading - Brutalist style */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#1e3a5f] leading-[0.9] tracking-tight">
                <span className="block">HEAVY</span>
                <span className="block text-transparent" style={{ WebkitTextStroke: '2px #c45a20' }}>DUTY</span>
                <span className="block">INDUSTRIAL</span>
                <span className="block text-[#c45a20]">SOLUTIONS</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-[#5a6872] text-lg max-w-xl mb-10 leading-relaxed"
            >
              Specialists in lifting equipment, material handling, bearing management tools, 
              and industrial maintenance solutions for India&apos;s heavy industries.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#products" className="group inline-block">
                <span className="relative z-10 flex items-center gap-2 px-8 py-4 font-bold tracking-widest text-sm text-white bg-[#c45a20] rounded-md shadow-sm transition-transform duration-300 transform group-hover:-translate-y-1 group-hover:shadow-md">
                  EXPLORE PRODUCTS
                  <Zap size={16} className="ml-2 transition-transform transform group-hover:rotate-12" />
                </span>
              </a>
              <a
                href="#contact"
                className="group border-2 border-[#1e3a5f] text-[#1e3a5f] px-8 py-4 font-bold tracking-[0.1em] text-sm hover:border-[#c45a20] hover:text-[#c45a20] transition-colors"
              >
                CONTACT US
              </a>
            </motion.div>
          </div>

          {/* Right side - Stats */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="grid grid-cols-2 gap-1"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="relative bg-[#fdfcfa] border border-[#e8e4dc] p-8 group hover:border-[#c45a20]/50 transition-colors shadow-sm"
                >
                  {/* Corner accent */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#c45a20] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#c45a20] opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="text-4xl md:text-5xl font-black text-[#1e3a5f] mb-2">
                    {stat.number}
                    <span className="text-[#c45a20]">{stat.suffix}</span>
                  </div>
                  <div className="text-[#6c757d] text-xs tracking-[0.2em] font-mono">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#6c757d] text-xs tracking-[0.3em] font-mono">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} className="text-[#c45a20]" />
        </motion.div>
      </motion.div>

      {/* Bottom hazard stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-1 hazard-stripes" />
    </section>
  );
}
