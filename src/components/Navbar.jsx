import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  Menu, 
  X, 
  Zap, 
  ArrowRight,
  Clock
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'PVC Pipes', path: '/pvc-pipes' },
    { name: 'Wires & Cables', path: '/wires-cables' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full shadow-md bg-white">
      {/* Top Corporate Bar */}
      <div className="bg-[#142B45] text-gray-200 text-xs py-2 px-4 border-b border-blue-950/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <span className="flex items-center gap-1.5 hover:text-[#FF8E01] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#FF8E01]" />
              <a href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phone}</a>
            </span>
            <span className="flex items-center gap-1.5 hover:text-[#FF8E01] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#FF8E01]" />
              <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-gray-300">
              <Clock className="w-3.5 h-3.5 text-[#FF8E01]" />
              {COMPANY_INFO.workingHours}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="bg-[#FF8E01]/20 text-[#FF8E01] px-2.5 py-0.5 rounded text-[11px] font-semibold border border-[#FF8E01]/30">
              ISO 9001:2015 & BIS Certified
            </span>
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20YaaWires,%20I%20want%20to%20enquire%20about%20your%20products.`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#25D366] hover:underline font-semibold flex items-center gap-1"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar (Logo on the Left, Nav Titles in Center/Right) */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-22">
            
            {/* Logo Left-Aligned */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-3.5 group py-2" onClick={() => setMobileMenuOpen(false)}>
                <div className="w-13 h-13 rounded-xl bg-[#142B45] flex items-center justify-center text-white shadow-md group-hover:bg-[#FF8E01] transition-all duration-300 transform group-hover:scale-105">
                  <Zap className="w-7 h-7 text-[#FF8E01] group-hover:text-white transition-colors" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#142B45] leading-none">
                    YAA<span className="text-[#FF8E01]">WIRES</span>
                  </span>
                  <span className="text-[10px] sm:text-[11px] uppercase font-extrabold tracking-[0.2em] text-gray-500 mt-1">
                    & INDUSTRIAL PIPES
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links (Center-Right) */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-[15px] font-semibold transition-all duration-200 py-2 relative whitespace-nowrap ${
                      active
                        ? 'text-[#FF8E01] font-bold'
                        : 'text-gray-700 hover:text-[#142B45]'
                    }`}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF8E01] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Request a Quote CTA Button (Right) */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#FF8E01] hover:bg-[#e57e00] text-white px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 whitespace-nowrap"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-700 hover:text-[#142B45] hover:bg-gray-100 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    active
                      ? 'bg-[#142B45] text-white font-semibold'
                      : 'text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-gray-100">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block bg-[#FF8E01] text-white py-3 rounded-lg font-semibold hover:bg-[#e57e00]"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
