'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const milestones = [
  { year: '1998', event: 'Company Founded in Pune' },
  { year: '2003', event: 'First International Partnership' },
  { year: '2010', event: 'Expanded to Pan-India Operations' },
  { year: '2015', event: 'Factory Setup in Kondhwa' },
  { year: '2020', event: '500+ Industrial Clients' },
  { year: '2024', event: 'Industry Leader Recognition' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 bg-[#fdfcfa] overflow-hidden">
      {/* Large background number */}
      <div className="absolute top-0 right-0 text-[40vw] font-black text-[#1e3a5f]/[0.02] leading-none select-none pointer-events-none">
        27
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="text-[#c45a20] font-mono text-sm tracking-widest">01</div>
          <div className="h-px flex-1 bg-[#e8e4dc]" />
          <div className="text-[#6c757d] font-mono text-sm tracking-widest">ABOUT US</div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Main content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1e3a5f] leading-tight mb-8">
              BUILDING
              <br />
              <span className="text-[#c45a20]">INDUSTRIAL</span>
              <br />
              EXCELLENCE
            </h2>

            <div className="space-y-6 text-[#5a6872] text-lg leading-relaxed">
              <p>
                <span className="text-[#1e3a5f] font-semibold">AES Industrial Pvt. Ltd.</span> has been 
                the backbone of India&apos;s heavy industries since 1998. Based in Pune, we specialize 
                in providing world-class lifting equipment, material handling solutions, and 
                precision tools.
              </p>
              <p>
                We represent premium international brands and serve sectors including steel, power, 
                mining, oil & gas, infrastructure, automotive, and engineering—delivering excellence 
                that industries depend on.
              </p>
            </div>

            {/* Key differentiators */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              {[
                { label: 'CERTIFIED', value: 'ISO 9001:2015' },
                { label: 'COVERAGE', value: 'Pan-India' },
                { label: 'BRANDS', value: '10+ Premium' },
                { label: 'SUPPORT', value: '24/7 Technical' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="border-l-2 border-[#c45a20] pl-4"
                >
                  <div className="text-[#6c757d] text-xs tracking-widest font-mono mb-1">{item.label}</div>
                  <div className="text-[#1e3a5f] font-bold">{item.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute left-8 top-0 bottom-0 w-px bg-[#e8e4dc]" />
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="relative pl-20 pb-12 group"
              >
                {/* Dot */}
                <div className="absolute left-6 top-2 w-5 h-5 border-2 border-[#e8e4dc] bg-[#fdfcfa] group-hover:border-[#c45a20] transition-colors">
                  <div className="absolute inset-1 bg-[#c45a20] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                {/* Year */}
                <div className="text-[#c45a20] font-mono text-sm tracking-widest mb-2">
                  {milestone.year}
                </div>
                
                {/* Event */}
                <div className="text-[#1e3a5f] font-semibold text-lg group-hover:text-[#c45a20] transition-colors">
                  {milestone.event}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-24 border-t border-b border-[#e8e4dc] py-6 overflow-hidden"
        >
          <div className="animate-marquee flex whitespace-nowrap">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 mr-8">
                {['LIFTING', 'HANDLING', 'MAINTENANCE', 'SOLUTIONS', 'QUALITY', 'PRECISION'].map((word) => (
                  <span key={word} className="text-2xl font-black text-gray-200 tracking-widest flex items-center gap-8">
                    {word}
                    <span className="text-[#c45a20]">◆</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
