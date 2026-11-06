'use client';

import { Mail, MapPin, Send, Linkedin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Section } from './AboutSection';

export default function ContactSection() {
  return (
    <Section id="contact" label="Let's Connect" heading="Get In Touch">
      <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-center mb-12">
        Interested in working together? Feel free to reach out.
      </p>

      <div className="max-w-3xl mx-auto">
        {/* Contact Cards — 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { icon: MessageCircle, label: 'Phone / WhatsApp', value: '+20 101 258 1428', href: 'https://wa.me/201012581428', iconColor: 'text-emerald-400', iconBg: 'bg-emerald-500/15' },
            { icon: Mail, label: 'Email', value: 'aymanfaried17@gmail.com', href: 'mailto:aymanfaried17@gmail.com', iconColor: 'text-purple-400', iconBg: 'bg-purple-500/15' },
            { icon: Linkedin, label: 'LinkedIn', value: 'in/ayman-faried', href: 'https://www.linkedin.com/in/ayman-faried-0a8405347/', iconColor: 'text-blue-400', iconBg: 'bg-blue-500/15' },
            { icon: MapPin, label: 'Location', value: 'Cairo, Egypt', href: undefined, iconColor: 'text-amber-400', iconBg: 'bg-amber-500/15' },
          ].map((item, i) => {
            const Icon = item.icon;
            const content = (
              <div
                className="group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:bg-white/[0.03] card-hover"
                style={{ background: 'rgba(15,17,21,0.6)', border: '1px solid rgba(255,255,255,0.05)' }}
              >
                <div className={`flex-shrink-0 w-11 h-11 rounded-full ${item.iconBg} ${item.iconColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">{item.label}</p>
                  <p className="text-white text-sm font-medium">{item.value}</p>
                </div>
              </div>
            );
            return item.href ? (
              <a key={i} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>{content}</a>
            ) : (
              <div key={i}>{content}</div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href="mailto:aymanfaried17@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-sm font-medium rounded-full hover:bg-slate-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
          >
            <Send size={16} />
            Send Me an Email
          </a>
        </div>

        {/* Social Links — Facebook replaces Twitter */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <a
            href="https://www.linkedin.com/in/ayman-faried-0a8405347/" aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-200"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://instagram.com/aymanfaried17" aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-pink-400 hover:bg-pink-500/10 transition-all duration-200"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://web.facebook.com/ayman.faried" aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-500 hover:bg-blue-600/10 transition-all duration-200"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <Facebook size={18} />
          </a>
        </div>
      </div>
    </Section>
  );
}
