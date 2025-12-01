'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-32 bg-[#f5f3ef] overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#c45a20]/5" />
      <div className="absolute inset-0 steel-mesh opacity-30" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="text-[#c45a20] font-mono text-sm tracking-widest">05</div>
          <div className="h-px flex-1 bg-[#e8e4dc]" />
          <div className="text-[#6c757d] font-mono text-sm tracking-widest">CONTACT</div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1e3a5f] leading-tight mb-8">
              LET&apos;S WORK
              <br />
              <span className="text-[#c45a20]">TOGETHER</span>
            </h2>

            <p className="text-[#5a6872] text-lg mb-12 max-w-md">
              Ready to discuss your industrial equipment requirements? Our team is here to help.
            </p>

            {/* Addresses */}
            <div className="space-y-8">
              {/* Registered Office */}
              <div className="border-l-2 border-[#c45a20] pl-6">
                <div className="text-[#c45a20] text-xs font-mono tracking-widest mb-3">REGISTERED OFFICE</div>
                <div className="text-[#1e3a5f] font-semibold mb-2">AES Industrial Pvt. Ltd.</div>
                <div className="text-[#5a6872] text-sm leading-relaxed">
                  403, Spring Plaza, Plot No. 62,<br />
                  Survey No. 25/5A, NIBM, Undri Road,<br />
                  Pune - 411048
                </div>
                <div className="text-[#6c757d] text-xs font-mono mt-3">
                  CIN: U31901PN1998PTC012807
                </div>
              </div>

              {/* Factory */}
              <div className="border-l-2 border-[#e8e4dc] pl-6 hover:border-[#c45a20] transition-colors">
                <div className="text-[#6c757d] text-xs font-mono tracking-widest mb-3">FACTORY</div>
                <div className="text-[#1e3a5f] font-semibold mb-2">Manufacturing Unit</div>
                <div className="text-[#5a6872] text-sm leading-relaxed">
                  Survey No: 32/5A1, Kondhwa Pisoli Road,<br />
                  Opp. Elica PB India Ltd.,<br />
                  Pune - 411060
                </div>
              </div>

              {/* Contact details */}
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#e8e4dc]">
                <div>
                  <div className="flex items-center gap-2 text-[#c45a20] mb-2">
                    <Phone size={14} />
                    <span className="text-xs font-mono tracking-widest">PHONE</span>
                  </div>
                  <a href="tel:+919823031535" className="text-[#1e3a5f] hover:text-[#c45a20] transition-colors block">
                    +91 98230 31535
                  </a>
                  <a href="tel:+919766328233" className="text-[#1e3a5f] hover:text-[#c45a20] transition-colors block">
                    +91 97663 28233
                  </a>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[#c45a20] mb-2">
                    <Mail size={14} />
                    <span className="text-xs font-mono tracking-widest">EMAIL</span>
                  </div>
                  <a href="mailto:info@aesindustrial.in" className="text-[#1e3a5f] hover:text-[#c45a20] transition-colors">
                    info@aesindustrial.in
                  </a>
                </div>
              </div>

              {/* Business hours */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#e8e4dc]">
                <Clock size={18} className="text-[#c45a20]" />
                <div>
                  <div className="text-[#1e3a5f] font-semibold">Monday - Saturday</div>
                  <div className="text-[#5a6872] text-sm">9:00 AM - 6:00 PM</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-[#fdfcfa] p-8 shadow-lg border border-[#e8e4dc]">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#6c757d] text-xs font-mono tracking-widest mb-2">NAME *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-[#e8e4dc] py-3 text-[#1e3a5f] focus:border-[#c45a20] outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-[#6c757d] text-xs font-mono tracking-widest mb-2">EMAIL *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-[#e8e4dc] py-3 text-[#1e3a5f] focus:border-[#c45a20] outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#6c757d] text-xs font-mono tracking-widest mb-2">PHONE *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-[#e8e4dc] py-3 text-[#1e3a5f] focus:border-[#c45a20] outline-none transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-[#6c757d] text-xs font-mono tracking-widest mb-2">COMPANY</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-[#e8e4dc] py-3 text-[#1e3a5f] focus:border-[#c45a20] outline-none transition-colors"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#6c757d] text-xs font-mono tracking-widest mb-2">MESSAGE *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b-2 border-[#e8e4dc] py-3 text-[#1e3a5f] focus:border-[#c45a20] outline-none transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#c45a20] text-white py-5 font-bold tracking-widest text-sm flex items-center justify-center gap-3 group"
              >
                SEND MESSAGE
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
