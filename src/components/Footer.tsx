'use client';

import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Industries', href: '#industries' },
  { name: 'Brands', href: '#brands' },
  { name: 'Contact', href: '#contact' },
];

const products = [
  'Lifting Equipment',
  'Material Handling',
  'Bearing Tools',
  'Hand Tools',
  'Special Tools',
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e3a5f] text-white">
      {/* Top hazard stripe */}
      <div className="h-2 hazard-stripes" />

      {/* Main footer */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="w-14 h-14 border-2 border-[#c45a20] flex items-center justify-center">
                  <span className="text-[#c45a20] font-black text-xl tracking-tighter">AES</span>
                  <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#c45a20]" />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#c45a20]" />
                </div>
              </div>
              <div>
                <div className="font-black text-lg tracking-wide">INDUSTRIAL</div>
                <div className="text-white/60 text-[10px] tracking-[0.3em] font-mono">PVT. LTD.</div>
              </div>
            </a>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Your specialist partner for industrial maintenance, lifting, and handling solutions since 1998.
            </p>
            <div className="text-white/50 text-xs font-mono">
              CIN: U31901PN1998PTC012807
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#c45a20] font-mono text-xs tracking-widest mb-6">NAVIGATION</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group text-sm"
                  >
                    <span className="w-0 h-px bg-[#c45a20] group-hover:w-4 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[#c45a20] font-mono text-xs tracking-widest mb-6">PRODUCTS</h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <a
                    href="#products"
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group text-sm"
                  >
                    <span className="w-0 h-px bg-[#c45a20] group-hover:w-4 transition-all" />
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#c45a20] font-mono text-xs tracking-widest mb-6">CONTACT</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#c45a20] mt-1 shrink-0" />
                <p className="text-white/70 text-sm">
                  403, Spring Plaza, NIBM,<br />
                  Undri Road, Pune-411048
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#c45a20] shrink-0" />
                <div>
                  <a href="tel:+919823031535" className="text-white/70 hover:text-white text-sm block">
                    +91 98230 31535
                  </a>
                  <a href="tel:+919766328233" className="text-white/70 hover:text-white text-sm block">
                    +91 97663 28233
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#c45a20] shrink-0" />
                <a href="mailto:info@aesindustrial.in" className="text-white/70 hover:text-white text-sm">
                  info@aesindustrial.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-xs font-mono">
              © {currentYear} AES INDUSTRIAL PVT. LTD. ALL RIGHTS RESERVED.
            </p>
            <a
              href="#home"
              className="flex items-center gap-2 text-[#c45a20] text-xs font-mono tracking-widest group"
            >
              BACK TO TOP
              <ArrowUpRight size={14} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
