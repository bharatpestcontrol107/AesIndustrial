'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const industries = [
  { id: '01', name: 'STEEL', fullName: 'Steel Industry', description: 'Heavy machinery & maintenance for steel plants', image: 'https://images.unsplash.com/photo-1613970351372-9804e380bd09?w=800&q=80' },
  { id: '02', name: 'POWER', fullName: 'Power Sector', description: 'Equipment for power generation facilities', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80' },
  { id: '03', name: 'MINING', fullName: 'Mining Operations', description: 'Rugged solutions for mining environments', image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&q=80' },
  { id: '04', name: 'OIL & GAS', fullName: 'Oil & Gas', description: 'Safety-certified petroleum industry tools', image: 'https://images.unsplash.com/photo-1633829131104-e2134f75c6e5?w=800&q=80' },
  { id: '05', name: 'INFRA', fullName: 'Infrastructure', description: 'Construction & development equipment', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80' },
  { id: '06', name: 'AUTO', fullName: 'Automotive', description: 'Precision tools for manufacturing', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80' },
  { id: '07', name: 'ENGG', fullName: 'Engineering', description: 'Solutions for fabrication works', image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80' },
];

export default function Industries() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="industries" className="relative py-32 bg-[#fdfcfa] overflow-hidden">
      {/* Diagonal stripes background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, #1e3a5f 35px, #1e3a5f 36px)',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="text-[#c45a20] font-mono text-sm tracking-widest">03</div>
          <div className="h-px flex-1 bg-[#e8e4dc]" />
          <div className="text-[#6c757d] font-mono text-sm tracking-widest">INDUSTRIES</div>
        </div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1e3a5f] leading-tight">
            POWERING INDIA&apos;S
            <br />
            <span className="text-[#c45a20]">HEAVY INDUSTRIES</span>
          </h2>
        </motion.div>

        {/* Industries list - Horizontal scroll on mobile, grid on desktop */}
        <div className="relative">
          {/* Desktop grid */}
          <div className="hidden lg:grid lg:grid-cols-7 gap-1">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index }}
                className="group relative bg-[#f5f3ef] border border-[#e8e4dc] hover:border-[#c45a20] transition-all duration-500 aspect-3/4 overflow-hidden"
              >
                {/* Number */}
                <div className="absolute top-4 left-4 text-[#c45a20] font-mono text-xs">
                  {industry.id}
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  {/* Brand/industry image */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-40 transition-opacity duration-300">
                    <Image
                      src={industry.image}
                      alt={`${industry.fullName}`}
                      width={320}
                      height={240}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Short name - visible by default */}
                  <div className="text-2xl font-black text-[#1e3a5f] tracking-tight group-hover:opacity-0 transition-opacity duration-300">
                    {industry.name}
                  </div>

                  {/* Full info - visible on hover */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-t from-[#c45a20]/90 to-transparent">
                    <div className="text-lg font-bold text-white mb-1">{industry.fullName}</div>
                    <div className="text-white/80 text-xs leading-relaxed">{industry.description}</div>
                  </div>
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#c45a20] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </div>

          {/* Mobile horizontal scroll */}
          <div className="lg:hidden overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-4" style={{ width: 'max-content' }}>
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 * index }}
                  className="relative bg-[#f5f3ef] border border-[#e8e4dc] w-48 shrink-0 overflow-hidden"
                >
                  <div className="absolute top-4 left-4 text-[#c45a20] font-mono text-xs z-10">{industry.id}</div>
                  <div className="relative h-32 w-full opacity-40">
                    <Image
                      src={industry.image}
                      alt={`${industry.fullName}`}
                      width={192}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-xl font-black text-[#1e3a5f] mb-2">{industry.name}</div>
                    <div className="text-[#6c757d] text-xs">{industry.fullName}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-16 border-t border-[#e8e4dc]"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '7+', label: 'Industries Served' },
              { value: '500+', label: 'Completed Projects' },
              { value: '100%', label: 'Quality Commitment' },
              { value: '24/7', label: 'Technical Support' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-black text-[#1e3a5f] mb-2">
                  {stat.value.includes('+') ? (
                    <>
                      {stat.value.replace('+', '')}
                      <span className="text-[#c45a20]">+</span>
                    </>
                  ) : stat.value.includes('%') ? (
                    <>
                      {stat.value.replace('%', '')}
                      <span className="text-[#c45a20]">%</span>
                    </>
                  ) : (
                    stat.value
                  )}
                </div>
                <div className="text-[#6c757d] text-xs tracking-widest font-mono uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
