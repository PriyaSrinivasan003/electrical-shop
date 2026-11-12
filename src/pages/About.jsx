import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Target, 
  Eye, 
  ShieldCheck, 
  Award, 
  Users, 
  CheckCircle, 
  Factory, 
  ArrowRight, 
  Flame, 
  Wrench, 
  Clock,
  FileText,
  HardHat,
  Shield,
  Globe
} from 'lucide-react';
import { COMPANY_INFO, STATS } from '../data/content';

export default function About() {
  const values = [
    {
      title: "Uncompromising Safety",
      description: "We refuse to cut corners. Every wire core is 99.97% pure copper and every pipe batch is formulated with lead-free, non-toxic stabilizers to protect human life.",
      icon: <ShieldCheck className="w-6 h-6 text-[#FF8E01]" />
    },
    {
      title: "Manufacturing Precision",
      description: "Equipped with computer-controlled extruders and inline laser dimension calipers to guarantee zero thickness deviation across every meter.",
      icon: <Factory className="w-6 h-6 text-[#FF8E01]" />
    },
    {
      title: "Integrity & Direct Pricing",
      description: "Transparent price sheets, honest weight and length measures, and reliable technical advisory without deceptive marketing claims.",
      icon: <Award className="w-6 h-6 text-[#FF8E01]" />
    },
    {
      title: "Contractor Partnership",
      description: "We don't just sell products; we work alongside MEP contractors, site engineers, and plumbing experts to ensure flawless project delivery.",
      icon: <Users className="w-6 h-6 text-[#FF8E01]" />
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#F5F7FA]">
      
      {/* 1. HERO BANNER */}
      <section className="bg-[#142B45] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80"
            alt="Manufacturing Facility"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight max-w-3xl mx-auto leading-tight">
            About {COMPANY_INFO.name}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Delivering the foundational infrastructure for India's modern commercial high-rises, industrial complexes, and residential townships.
          </p>
        </div>
      </section>

      {/* 2. COMPANY INTRODUCTION & BACKGROUND */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142B45] leading-tight mb-6">
              Sixteen Years of Engineering Superior Electrical & Fluid Systems
            </h2>
            <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>
                Established in 2008 in the industrial heart of Bengaluru, <strong>{COMPANY_INFO.name}</strong> started with a single manufacturing goal: eliminate the dangerous market compromises of substandard copper wires and fragile recycled PVC conduits that cause electrical fires and plumbing leaks.
              </p>
              <p>
                Over the past 16 years, our operations have grown into an advanced multi-line manufacturing and master distribution ecosystem. We service over 1,200 commercial builders, MEP consultants, industrial plants, and licensed electrical contractors across South India and beyond.
              </p>
              <p>
                From heavy-duty ASTM Schedule 80 UPVC plumbing lines to flame-retardant FR-LSH house wires and 33kV armoured transmission cables, our inventory represents the apex of structural durability and electrical safety.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <div className="text-2xl font-black text-[#142B45]">25,000+</div>
                <div className="text-xs text-gray-500 font-semibold uppercase mt-0.5">Sq Ft Warehouse</div>
              </div>
              <div>
                <div className="text-2xl font-black text-[#FF8E01]">100%</div>
                <div className="text-xs text-gray-500 font-semibold uppercase mt-0.5">Tested Copper & Resin</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-2xl font-black text-[#142B45]">24-48h</div>
                <div className="text-xs text-gray-500 font-semibold uppercase mt-0.5">Dispatch Window</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                alt="Plumbing Manufacturing Precision"
                className="w-full h-[450px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#142B45] text-white p-6 rounded-xl shadow-xl max-w-xs border-b-4 border-[#FF8E01] hidden sm:block">
              <div className="flex items-center gap-2 text-[#FF8E01] font-bold text-sm mb-1">
                <Flame className="w-4 h-4" /> Zero Compromise
              </div>
              <p className="text-xs text-gray-300">
                Triple-extrusion lines ensuring uniform wall thickness and anti-burst hydrostatic resistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="bg-white py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission Card */}
            <div className="bg-[#F5F7FA] border border-gray-200 rounded-2xl p-8 relative overflow-hidden group hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-xl bg-[#142B45] flex items-center justify-center text-[#FF8E01] mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-[#142B45] mb-4">Our Mission</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                To equip construction engineers, electrical contractors, and plumbers with certified, uncompromisingly safe wires and conduits that protect lives, eliminate maintenance liabilities, and guarantee long-term infrastructure durability.
              </p>
              <div className="mt-6 flex flex-col gap-2 text-xs font-semibold text-gray-700">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF8E01]" /> Eliminate counterfeit & low-gauge wires from job sites
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF8E01]" /> Provide factory-direct transparency in bulk pricing
                </span>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-[#F5F7FA] border border-gray-200 rounded-2xl p-8 relative overflow-hidden group hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-xl bg-[#FF8E01] flex items-center justify-center text-white mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-[#142B45] mb-4">Our Vision</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                To be India's most dependable integrated electrical and plumbing supply partner, recognized for setting the benchmark in fire retardant compounding, lead-free piping innovations, and contractor-centric technical support.
              </p>
              <div className="mt-6 flex flex-col gap-2 text-xs font-semibold text-gray-700">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF8E01]" /> Expand green, halogen-free, recyclable polymer formulations
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF8E01]" /> Zero delivery delays with digital inventory synchronization
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. COMPANY CORE VALUES */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142B45]">Our Core Values</h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            These four pillars drive our engineering decisions, customer relationships, and quality control routines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-[#FF8E01]/10 flex items-center justify-center mb-4">
                {v.icon}
              </div>
              <h3 className="text-lg font-bold text-[#142B45] mb-2">{v.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. LEADERSHIP / FOUNDER SPOTLIGHT (BRICK WALL EMBED) */}
      <section className="relative py-24 overflow-hidden border-t border-gray-200">
        {/* Real Brick Wall Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/brick-wall.jpg"
            alt="Industrial Brick Texture"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle vignette/warm light overlay matching the spotlight */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* Leadership Name Plate on Brick Wall */}
          <div className="inline-block bg-white/95 backdrop-blur-md px-10 sm:px-16 py-8 rounded-2xl shadow-2xl border-2 border-white/80 hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#142B45] tracking-tight mb-2">
              Er. G. GOPINATH
            </h3>
            <div className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#E53E3E] mt-1">
              FOUNDER & CEO
            </div>
            <div className="w-16 h-1 bg-[#FF8E01] mx-auto mt-4 rounded-full" />
            <p className="text-xs sm:text-sm text-gray-600 mt-4 max-w-lg mx-auto leading-relaxed font-medium">
              Leading the company with over two decades of engineering excellence, strict Bureau of Indian Standards (BIS) compliance, and a vision for durable, safe electrical & plumbing infrastructures.
            </p>
          </div>
        </div>
      </section>

      {/* 6. PRODUCT QUALITY & CUSTOMER COMMITMENT */}
      <section className="bg-[#142B45] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-6">
                Rigorous 7-Stage Testing on Every Production Run
              </h2>
              <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
                Before any coil of wire or bundle of pipes leaves our warehouse, it undergoes exhaustive electrical conductivity, spark testing, flammability rating, and hydrostatic bursting tests in accordance with national laboratory protocols.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#FF8E01] shrink-0 font-bold text-sm">1</div>
                  <span className="text-sm font-medium text-gray-200">High-Voltage Spark Tester: Detects microscopic pinhole insulation breaches</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#FF8E01] shrink-0 font-bold text-sm">2</div>
                  <span className="text-sm font-medium text-gray-200">Oxygen Index Chamber: Certifies flammability rating &gt; 32% (Self-extinguishing)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#FF8E01] shrink-0 font-bold text-sm">3</div>
                  <span className="text-sm font-medium text-gray-200">Hydrostatic Pressure Testing: Sustained water pressure up to 28 kg/cm²</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#FF8E01] shrink-0 font-bold text-sm">4</div>
                  <span className="text-sm font-medium text-gray-200">Conductor Resistance Kelvin Bridge: Guarantees 99.97% pure copper conductivity</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xs">
              <h3 className="text-xl font-bold text-white mb-4">Our Customer Commitment</h3>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF8E01] shrink-0 mt-0.5" />
                  <span><strong>Complete Transparency:</strong> Manufacturer test certificates (MTC) supplied with every commercial dispatch.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF8E01] shrink-0 mt-0.5" />
                  <span><strong>Guaranteed On-Site Delivery:</strong> Fleet logistics that match your pouring and slab casting schedules.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF8E01] shrink-0 mt-0.5" />
                  <span><strong>Full Replacement Guarantee:</strong> Zero-hassle replacement in the rare event of transit damage or manufacturing deviation.</span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-[#FF8E01] hover:bg-[#e57e00] text-white py-3 px-6 rounded-lg text-sm font-bold text-center transition-colors"
                >
                  Consult Our Technical Team
                </Link>
                <Link
                  to="/wires-cables"
                  className="bg-white/10 hover:bg-white/20 text-white py-3 px-6 rounded-lg text-sm font-bold text-center transition-colors"
                >
                  Browse Catalog
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US SECTION (PLACED BELOW TESTING & COMMITMENT) */}
      <section className="bg-[#FAF8F5] text-[#142B45] pt-24 pb-28 relative overflow-hidden border-t border-gray-200">
        {/* Subtle architectural dot blueprint pattern */}
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#142B45_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-widest uppercase text-[#142B45] mb-4">
              WHY CHOOSE US
            </h2>
            <p className="text-gray-600 text-base sm:text-lg font-medium leading-relaxed">
              We offer unmatched product quality, certified manufacturing processes, on-time delivery.
            </p>
          </div>

          {/* 4 Feature Columns with Navy / Blue Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-14">
            
            {/* Card 1: 27 Year Experience */}
            <div className="bg-[#142B45] text-white rounded-xl shadow-xl p-8 flex flex-col items-center text-center hover:-translate-y-2 hover:bg-[#0f2136] transition-all duration-300 border border-blue-900/40">
              <div className="w-16 h-16 mb-6 flex items-center justify-center text-[#FF8E01]">
                <FileText className="w-12 h-12 stroke-[1.5]" />
              </div>
              <h3 className="font-extrabold text-sm uppercase tracking-wider text-white mb-4">
                27 YEAR EXPERIENCE
              </h3>
              <p className="text-gray-300 text-xs sm:text-[13px] leading-relaxed">
                Delivering trusted manufacturing expertise with consistent quality and reliable results always guaranteed.
              </p>
            </div>

            {/* Card 2: Professional Team */}
            <div className="bg-[#142B45] text-white rounded-xl shadow-xl p-8 flex flex-col items-center text-center hover:-translate-y-2 hover:bg-[#0f2136] transition-all duration-300 border border-blue-900/40">
              <div className="w-16 h-16 mb-6 flex items-center justify-center text-[#FF8E01]">
                <HardHat className="w-12 h-12 stroke-[1.5]" />
              </div>
              <h3 className="font-extrabold text-sm uppercase tracking-wider text-white mb-4">
                PROFESSIONAL TEAM
              </h3>
              <p className="text-gray-300 text-xs sm:text-[13px] leading-relaxed">
                Dedicated professionals ensuring precision, efficiency, and excellence in every project.
              </p>
            </div>

            {/* Card 3: Safety is Top Priority */}
            <div className="bg-[#142B45] text-white rounded-xl shadow-xl p-8 flex flex-col items-center text-center hover:-translate-y-2 hover:bg-[#0f2136] transition-all duration-300 border border-blue-900/40">
              <div className="w-16 h-16 mb-6 flex items-center justify-center text-[#FF8E01]">
                <Shield className="w-12 h-12 stroke-[1.5]" />
              </div>
              <h3 className="font-extrabold text-sm uppercase tracking-wider text-white mb-4">
                SAFETY IS TOP PRIORITY
              </h3>
              <p className="text-gray-300 text-xs sm:text-[13px] leading-relaxed">
                Strict safety standards followed to protect people, processes, and products daily now.
              </p>
            </div>

            {/* Card 4: Large Scale */}
            <div className="bg-[#142B45] text-white rounded-xl shadow-xl p-8 flex flex-col items-center text-center hover:-translate-y-2 hover:bg-[#0f2136] transition-all duration-300 border border-blue-900/40">
              <div className="w-16 h-16 mb-6 flex items-center justify-center text-[#FF8E01]">
                <Globe className="w-12 h-12 stroke-[1.5]" />
              </div>
              <h3 className="font-extrabold text-sm uppercase tracking-wider text-white mb-4">
                LARGE SCALE
              </h3>
              <p className="text-gray-300 text-xs sm:text-[13px] leading-relaxed">
                Strong networks and robust infrastructure enabling fast delivery and dependable service always.
              </p>
            </div>

          </div>

          {/* Contact Button */}
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#FF8E01] hover:bg-[#e57e00] text-white px-8 py-3.5 rounded-lg font-extrabold text-xs uppercase tracking-widest shadow-md hover:shadow-lg transition-all"
            >
              <span>CONTACT OUR TEAM</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}

