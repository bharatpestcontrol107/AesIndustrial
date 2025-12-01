'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  {
    id: '01',
    name: 'LIFTING EQUIPMENT',
    shortName: 'LIFT',
    description: 'Industrial lifting solutions for heavy-duty operations including hoists, cranes, and lifting systems.',
    items: ['Electric Chain Hoists', 'Manual Hoists', 'Wire Rope Winches', 'Jib Cranes', 'Lifting Clamps', 'Lifting Magnets'],
  },
  {
    id: '02',
    name: 'MATERIAL HANDLING',
    shortName: 'HANDLE',
    description: 'Complete material movement solutions for efficient warehouse and factory operations.',
    items: ['Pallet Trucks', 'Stackers', 'Drum Handling', 'Forklift Attachments', 'Lift Tables', 'Conveyors'],
  },
  {
    id: '03',
    name: 'BEARING TOOLS',
    shortName: 'BEAR',
    description: 'Precision tools for bearing installation, maintenance, and monitoring.',
    items: ['Bearing Heaters', 'Bearing Pullers', 'Fitting Tools', 'Alignment Tools', 'Lubrication', 'Monitoring'],
  },
  {
    id: '04',
    name: 'HAND TOOLS',
    shortName: 'HAND',
    description: 'Premium quality hand tools for industrial maintenance and operations.',
    items: ['Non-Sparking Tools', 'Insulated Tools', 'Torque Wrenches', 'Socket Sets', 'Pliers', 'Screwdrivers'],
  },
  {
    id: '05',
    name: 'SPECIAL TOOLS',
    shortName: 'SPEC',
    description: 'Specialized equipment for specific industrial applications.',
    items: ['Hydraulic Tools', 'Pneumatic Tools', 'Cutting Equipment', 'Pulling Tools', 'Pressing Tools', 'Safety Gear'],
  },
];

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section id="products" className="relative py-32 bg-[#f5f3ef] overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 steel-mesh opacity-50" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="text-[#c45a20] font-mono text-sm tracking-widest">02</div>
          <div className="h-px flex-1 bg-[#e8e4dc]" />
          <div className="text-[#6c757d] font-mono text-sm tracking-widest">PRODUCTS</div>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left - Category list */}
          <div className="lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-3xl md:text-4xl font-black text-[#1e3a5f] mb-12"
            >
              COMPREHENSIVE
              <br />
              <span className="text-[#c45a20]">PRODUCT RANGE</span>
            </motion.h2>

            <div className="space-y-2">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  onClick={() => setActiveCategory(category)}
                  className={`w-full text-left p-6 border transition-all duration-300 group ${
                    activeCategory.id === category.id
                      ? 'border-[#c45a20] bg-[#c45a20]/10'
                      : 'border-[#e8e4dc] bg-[#fdfcfa] hover:border-[#d4cfc5]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-xs ${
                        activeCategory.id === category.id ? 'text-[#c45a20]' : 'text-[#6c757d]'
                      }`}>
                        {category.id}
                      </span>
                      <span className={`font-bold tracking-wide text-sm ${
                        activeCategory.id === category.id ? 'text-[#1e3a5f]' : 'text-[#5a6872]'
                      }`}>
                        {category.name}
                      </span>
                    </div>
                    <ArrowUpRight 
                      size={18} 
                      className={`transition-all ${
                        activeCategory.id === category.id 
                          ? 'text-[#c45a20] rotate-0' 
                          : 'text-gray-400 -rotate-45'
                      }`}
                    />
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right - Active category details */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              {/* Large category number */}
              <div className="relative mb-8">
                <span className="text-[15vw] lg:text-[12vw] font-black text-[#1e3a5f]/5 leading-none">
                  {activeCategory.shortName}
                </span>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#c45a20] to-transparent" />
              </div>

              {/* Description */}
              <p className="text-[#5a6872] text-lg mb-10 max-w-xl">
                {activeCategory.description}
              </p>

              {/* Products grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {activeCategory.items.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group border border-[#e8e4dc] bg-[#fdfcfa] p-4 hover:border-[#c45a20]/50 hover:bg-[#c45a20]/5 transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-[#1e3a5f] text-sm font-medium group-hover:text-[#c45a20] transition-colors">
                        {item}
                      </span>
                      <ArrowUpRight size={14} className="text-gray-400 group-hover:text-[#c45a20] transition-colors" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href="#contact"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="inline-flex items-center gap-3 mt-10 text-[#c45a20] font-bold tracking-widest text-sm group"
              >
                <span>REQUEST CATALOG</span>
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
