'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const brands = [
  { name: 'HYSTER', category: 'Material Handling' },
  { name: 'EGAMASTER', category: 'Hand Tools' },
  { name: 'TRACTEL', category: 'Lifting Equipment' },
  { name: 'TM', category: 'Industrial Tools' },
  { name: 'PRONAL', category: 'Lifting Bags' },
  { name: 'POWERRAM', category: 'Hydraulic Equipment' },
  { name: 'MEGA', category: 'Workshop Tools' },
  { name: 'KUKKO', category: 'Pullers & Extractors' },
  { name: 'BOERKEY', category: 'Heavy Duty Rollers' },
  { name: 'BOLT BREAKER', category: 'Industrial Tools' },
  { name: 'FORZA', category: 'Pullers & Tools' },
];

export default function Brands() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="brands" className="relative py-16 md:py-32 bg-[#f5f3ef] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 steel-mesh opacity-30" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section header */}
        <div className="flex items-center gap-4 mb-8 md:mb-16">
          <div className="text-[#c45a20] font-mono text-sm tracking-widest">04</div>
          <div className="h-px flex-1 bg-[#e8e4dc]" />
          <div className="text-[#6c757d] font-mono text-sm tracking-widest">PARTNERS</div>
        </div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#1e3a5f] leading-tight mb-6">
            GLOBAL BRANDS.
            <br />
            <span className="text-[#c45a20]">LOCAL EXPERTISE.</span>
          </h2>
          <p className="text-[#5a6872] text-lg max-w-2xl mx-auto">
            Official representatives of world-leading industrial equipment manufacturers.
          </p>
        </motion.div>

        {/* Brands grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index }}
              className="group relative bg-[#fdfcfa] border border-[#e8e4dc] p-8 hover:border-[#c45a20] hover:bg-[#c45a20]/5 transition-all duration-300"
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#c45a20] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#c45a20] opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Brand name */}
              <div className="text-2xl md:text-3xl font-black text-[#1e3a5f] group-hover:text-[#c45a20] transition-colors mb-2">
                {brand.name}
              </div>

              {/* Category */}
              <div className="text-[#5a6872] text-sm">
                {brand.category}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scrolling text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-10 md:mt-20 border-t border-b border-[#e8e4dc] py-6 overflow-hidden"
        >
          <div className="animate-marquee flex whitespace-nowrap">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 mr-12">
                {brands.map((brand) => (
                  <span key={brand.name} className="text-xl font-black text-gray-600 tracking-wider flex items-center gap-12">
                    {brand.name}
                    <span className="text-[#c45a20] text-sm">●</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-8 md:mt-16 text-center"
        >
          <p className="text-[#6c757d] mb-6 text-sm">
            Looking for a specific brand or product? We source from various international manufacturers.
          </p>
          <a
            href="#contact"
            className="inline-block border-2 border-[#c45a20] text-[#c45a20] px-8 py-4 font-bold tracking-widest text-sm hover:bg-[#c45a20] hover:text-white transition-colors"
          >
            REQUEST QUOTE
          </a>
        </motion.div>
      </div>
    </section>
  );
}
