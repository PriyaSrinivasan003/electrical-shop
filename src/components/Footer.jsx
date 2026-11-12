import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronRight, 
  ShieldCheck, 
  CheckCircle2, 
  FileText 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import VRLLogo from './VRLLogo';

export default function Footer() {
  return (
    <footer className="bg-[#142B45] text-gray-300 pt-16 pb-8 border-t-4 border-[#FF8E01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Company Profile */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Link to="/">
                <VRLLogo variant="dark" className="h-12 w-auto" />
              </Link>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              Leading manufacturer & master distributor of heavy-duty PVC electrical conduits, UPVC & CPVC plumbing pipes, and high-conductivity copper building wires. Built for contractors who never compromise on safety.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              {COMPANY_INFO.certifications.map((cert) => (
                <span 
                  key={cert} 
                  className="bg-white/10 text-gray-200 border border-white/15 px-2.5 py-1 rounded"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-base font-bold tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-2 h-4 bg-[#FF8E01] rounded-sm"></span>
              Explore Pages
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-[#FF8E01] transition-colors flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FF8E01]" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FF8E01] transition-colors flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FF8E01]" /> About Company
                </Link>
              </li>
              <li>
                <Link to="/pvc-pipes" className="hover:text-[#FF8E01] transition-colors flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FF8E01]" /> PVC & Plumbing Pipes
                </Link>
              </li>
              <li>
                <Link to="/wires-cables" className="hover:text-[#FF8E01] transition-colors flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FF8E01]" /> Wires & Power Cables
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FF8E01] transition-colors flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-[#FF8E01]" /> Contact & Quotations
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Offerings */}
          <div>
            <h3 className="text-white text-base font-bold tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-2 h-4 bg-[#FF8E01] rounded-sm"></span>
              Product Range
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8E01] shrink-0" />
                <span>FR-LSH House Wires</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8E01] shrink-0" />
                <span>Rigid PVC Electrical Conduits</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8E01] shrink-0" />
                <span>Lead-Free UPVC Cold Water Pipes</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8E01] shrink-0" />
                <span>Hot & Cold CPVC Pro Pipes</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8E01] shrink-0" />
                <span>XLPE Armoured LT/HT Cables</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8E01] shrink-0" />
                <span>SWR Drainage & Precision Fittings</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Workshop */}
          <div>
            <h3 className="text-white text-base font-bold tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-2 h-4 bg-[#FF8E01] rounded-sm"></span>
              Direct Contact
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF8E01] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FF8E01] shrink-0" />
                <div>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white block">
                    {COMPANY_INFO.phone}
                  </a>
                  <a href={`tel:${COMPANY_INFO.altPhone}`} className="hover:text-white text-xs text-gray-400">
                    {COMPANY_INFO.altPhone}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FF8E01] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#FF8E01] shrink-0" />
                <span className="text-xs text-gray-400">{COMPANY_INFO.workingHours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved. Inspired by industrial corporate excellence.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Quality Policy</span>
            <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-white cursor-pointer">Privacy Statement</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

