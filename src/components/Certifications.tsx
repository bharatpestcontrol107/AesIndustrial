
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, FileCheck, Shield, BadgeCheck, CheckCircle } from 'lucide-react';

const certifications = [
  {
    icon: Award,
    title: 'ISO 9001:2015',
    description: 'Quality Management System',
    code: 'QMS-2015',
  },
  {
    icon: Shield,
    title: 'Safety Certified',
    description: 'Industrial Safety Compliant',
    code: 'ISC-001',
  },
  {
    icon: FileCheck,
    title: 'Authorized Dealer',
    description: 'Official Brand Representative',
    code: 'ABR-INT',
  },
  {
    icon: BadgeCheck,
    title: 'Industry Approved',
    description: 'Corporate Trusted Vendor',
    code: 'CTV-PRO',
  },
];

const clients = [
  { name: 'Tata Steel', sector: 'Steel' },
  { name: 'JSW Steel', sector: 'Steel' },
  { name: 'NTPC', sector: 'Power' },
  { name: 'Reliance Industries', sector: 'Oil & Gas' },
  { name: 'Vedanta', sector: 'Mining' },
  { name: 'Hindalco', sector: 'Metals' },
  { name: 'L&T', sector: 'Engineering' },
  { name: 'Adani Group', sector: 'Infrastructure' },
  { name: 'BPCL', sector: 'Oil & Gas' },
  { name: 'HPCL', sector: 'Oil & Gas' },
  { name: 'IOCL', sector: 'Oil & Gas' },
  { name: 'Coal India', sector: 'Mining' },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-32 bg-[#fdfcfa] relative overflow-hidden">
      {/* Industrial Background Pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #c45a20 1px, transparent 1px),
              linear-gradient(#c45a20 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Diagonal Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-[#c45a20] via-[#b87333] to-[#c45a20]" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-16 bg-[#c45a20]" />
            <span className="text-[#c45a20] font-mono text-sm tracking-[0.3em] uppercase">
              Trust & Compliance
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-[#1e3a5f] leading-none">
            CERTIFICATIONS
            <span className="block text-[#6c757d] text-3xl md:text-4xl mt-2 font-light">
              & ACCREDITATIONS
            </span>
          </h2>
        </motion.div>

        {/* Certifications Grid - Industrial Card Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1 mb-24 bg-[#e8e4dc]">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 * index }}
              className="group relative bg-[#fdfcfa] p-8 hover:bg-[#f5f3ef] transition-all duration-500"
            >
              {/* Corner Bracket */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#c45a20] opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#c45a20] opacity-50 group-hover:opacity-100 transition-opacity" />

              {/* Code Label */}
              <span className="absolute top-4 right-4 text-[10px] font-mono text-[#6c757d] tracking-wider">
                {cert.code}
              </span>

              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 border border-[#c45a20]/30 flex items-center justify-center group-hover:border-[#c45a20] transition-colors">
                  <cert.icon className="w-7 h-7 text-[#c45a20]" />
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-[#c45a20]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-[#1e3a5f] mb-2 group-hover:text-[#c45a20] transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm text-[#6c757d]">{cert.description}</p>

              {/* Check Mark */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <CheckCircle className="w-5 h-5 text-[#27ae60]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clients Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-3xl font-bold text-[#1e3a5f] mb-2">
                INDUSTRY PARTNERS
              </h3>
              <p className="text-[#6c757d]">Trusted by India&apos;s leading corporations</p>
            </div>
            <div className="hidden md:block text-right">
              <span className="text-5xl font-black text-[#c45a20]">12+</span>
              <p className="text-sm text-[#6c757d]">Major Clients</p>
            </div>
          </div>
        </motion.div>

        {/* Scrolling Client List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="relative overflow-hidden"
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-[#fdfcfa] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-[#fdfcfa] to-transparent z-10" />

          <motion.div
            animate={{ x: [0, -1600] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="flex gap-4"
          >
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="shrink-0 group"
              >
                <div className="px-8 py-6 bg-[#f5f3ef] border border-[#e8e4dc] hover:border-[#c45a20]/50 transition-all duration-300">
                  <span className="text-[#1e3a5f] font-semibold whitespace-nowrap block group-hover:text-[#c45a20] transition-colors">
                    {client.name}
                  </span>
                  <span className="text-xs text-[#6c757d] font-mono uppercase tracking-wider">
                    {client.sector}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 border border-[#e8e4dc]">
            <Shield className="w-5 h-5 text-[#27ae60]" />
            <span className="text-[#6c757d] text-sm">
              All products backed by manufacturer warranty and technical support
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
