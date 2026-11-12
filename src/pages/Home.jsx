import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  TrendingDown, 
  Truck, 
  CheckCircle2, 
  Zap, 
  Layers, 
  FileCheck, 
  PhoneCall,
  Flame,
  Droplets,
  Building2,
  Factory,
  Target,
  Eye,
  CheckCircle,
  FileText,
  HardHat,
  Shield,
  Globe
} from 'lucide-react';
import { 
  COMPANY_INFO, 
  PVC_PIPE_PRODUCTS, 
  ELECTRICAL_WIRE_PRODUCTS, 
  WHY_CHOOSE_US, 
  STATS, 
  TESTIMONIALS 
} from '../data/content';
import ProductCard from '../components/ProductCard';
import AnimatedCounter from '../components/AnimatedCounter';
import ClientReviewsCarousel from '../components/ClientReviewsCarousel';
import AwardsCarousel from '../components/AwardsCarousel';
import WireManAnimation from '../components/WireManAnimation';

export default function Home() {
  const iconMap = {
    ShieldCheck: <ShieldCheck className="w-8 h-8 text-[#FF8E01]" />,
    Award: <Award className="w-8 h-8 text-[#FF8E01]" />,
    TrendingDown: <TrendingDown className="w-8 h-8 text-[#FF8E01]" />,
    Truck: <Truck className="w-8 h-8 text-[#FF8E01]" />,
    CheckCircle2: <CheckCircle2 className="w-8 h-8 text-[#FF8E01]" />,
    Zap: <Zap className="w-8 h-8 text-[#FF8E01]" />
  };

  return (
    <div className="flex flex-col w-full bg-[#F5F7FA]">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[660px] lg:min-h-[780px] flex items-center bg-[#142B45] text-white overflow-hidden">
        {/* Background Image with Crisp Presentation and Right-Aligned Visual Focus */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-banner.jpg"
            alt="Industrial Electrical Wires and PVC Pipes"
            className="w-full h-full object-cover object-right transform scale-100 transition-transform duration-1000"
          />
          {/* Targeted gradient overlay: dark navy protection on left empty space while fully revealing pipes & wire spools on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1e31]/95 via-[#0d1e31]/75 to-transparent sm:via-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1e31]/90 via-transparent to-transparent md:hidden" />
        </div>

        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-20 lg:py-28">
          <div className="max-w-xl lg:max-w-2xl mr-auto text-left animate-slide-down-to-up">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FF8E01] animate-ping" />
              <span>Certified Industrial Manufacturer & Distributor</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] mb-6">
              Quality Wires & Pipes <br />
              <span className="text-[#FF8E01]">For Every Project.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-gray-200 mb-8 leading-relaxed font-normal max-w-xl">
              Empowering commercial builders, industrial plants, and residential projects with heavy-duty BIS-certified PVC conduits, lead-free CPVC/UPVC water systems, and 99.97% pure copper FR-LSH wiring.
            </p>

            {/* Prominent Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <Link
                to="/pvc-pipes"
                className="inline-flex items-center justify-center gap-2 bg-[#FF8E01] hover:bg-[#e57e00] text-white px-7 py-3.5 rounded-lg font-bold text-base shadow-lg shadow-[#FF8E01]/30 transition-all hover:scale-105"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm px-7 py-3.5 rounded-lg font-bold text-base transition-all hover:border-white"
              >
                <span>Contact Us</span>
                <PhoneCall className="w-4 h-4 text-[#FF8E01]" />
              </Link>
            </div>

            {/* Key Value Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 border-t border-white/15 max-w-xl">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#FF8E01]" />
                <span className="text-xs sm:text-sm font-semibold text-gray-200">ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-3">
                <Flame className="w-6 h-6 text-[#FF8E01]" />
                <span className="text-xs sm:text-sm font-semibold text-gray-200">FR-LSH Fire Safe</span>
              </div>
              <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                <Truck className="w-6 h-6 text-[#FF8E01]" />
                <span className="text-xs sm:text-sm font-semibold text-gray-200">Ready Stock Dispatch</span>
              </div>
            </div>

          </div>
        </div>

        {/* Animated Single-Color Straight Line Wire with Sparkles Connecting to Next Section */}
        <div className="absolute bottom-0 inset-x-0 h-10 pointer-events-none z-30 flex items-center justify-center">
          <div className="w-full relative flex items-center">
            
            {/* The Straight Wire in Single Consistent Safety Orange (#FF8E01) */}
            <div className="w-full h-[2.5px] bg-[#FF8E01] shadow-[0_0_10px_#FF8E01]" />

            {/* Fast moving current pulse in matching single orange */}
            <div className="absolute inset-0 overflow-hidden">
              <svg className="w-full h-full" preserveAspectRatio="none">
                <line
                  x1="0"
                  y1="50%"
                  x2="100%"
                  y2="50%"
                  stroke="#FF8E01"
                  strokeWidth="3"
                  className="animate-wire-straight-flow"
                />
              </svg>
            </div>

            {/* Sparkles along the straight wire line */}
            <div className="absolute left-[15%] top-1/2 -translate-y-1/2 -translate-x-1/2 animate-sparkle-1">
              <svg className="w-5 h-5 text-[#FF8E01]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>

            <div className="absolute left-[38%] top-1/2 -translate-y-1/2 -translate-x-1/2 animate-sparkle-2">
              <svg className="w-4 h-4 text-[#FF8E01]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>

            <div className="absolute left-[62%] top-1/2 -translate-y-1/2 -translate-x-1/2 animate-sparkle-3">
              <svg className="w-6 h-6 text-[#FF8E01]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>

            <div className="absolute left-[85%] top-1/2 -translate-y-1/2 -translate-x-1/2 animate-sparkle-4">
              <svg className="w-4 h-4 text-[#FF8E01]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS BANNER WITH COLOR CODED INCREASING COUNTERS */}
      <section className="bg-white border-b border-gray-200 py-12 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            
            {/* 1. BLUE: Years of Excellence */}
            <div className="text-center pt-4 md:pt-0 group">
              <div className="text-4xl sm:text-5xl font-black text-[#2563EB] tracking-tight transition-transform group-hover:scale-105">
                <AnimatedCounter targetValue={16} suffix="+" duration={1800} />
              </div>
              <div className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wider mt-2">
                Years of Excellence
              </div>
            </div>

            {/* 2. YELLOW / AMBER: Completed Projects */}
            <div className="text-center pt-4 md:pt-0 group">
              <div className="text-4xl sm:text-5xl font-black text-[#EAB308] tracking-tight transition-transform group-hover:scale-105">
                <AnimatedCounter targetValue={2500} suffix="+" duration={2200} />
              </div>
              <div className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wider mt-2">
                Completed Projects
              </div>
            </div>

            {/* 3. GREEN: Active Contractors & Dealers */}
            <div className="text-center pt-4 md:pt-0 group">
              <div className="text-4xl sm:text-5xl font-black text-[#16A34A] tracking-tight transition-transform group-hover:scale-105">
                <AnimatedCounter targetValue={1200} suffix="+" duration={2000} />
              </div>
              <div className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wider mt-2">
                Active Contractors & Dealers
              </div>
            </div>

            {/* 4. PRIMARY NAVY / ACCENT: BIS & ISO Certified */}
            <div className="text-center pt-4 md:pt-0 group">
              <div className="text-4xl sm:text-5xl font-black text-[#142B45] tracking-tight transition-transform group-hover:scale-105">
                <AnimatedCounter targetValue={100} suffix="%" duration={1600} />
              </div>
              <div className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wider mt-2">
                BIS & ISO Certified
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR MISSION & VISION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142B45] tracking-tight">
            Our Mission & Vision
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Setting the highest standards in safety, pure copper conductivity, and durable fluid infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card - Dynamic Color Transition on Hover */}
          <div className="bg-white hover:bg-[#142B45] border border-gray-200 hover:border-[#142B45] rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-2xl transition-all duration-300 relative overflow-hidden group hover:-translate-y-1.5 cursor-pointer">
            <div className="w-16 h-16 rounded-2xl bg-[#142B45] group-hover:bg-[#FF8E01] flex items-center justify-center text-[#FF8E01] group-hover:text-white mb-6 shadow-md transition-colors duration-300">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-[#142B45] group-hover:text-white mb-4 transition-colors duration-300">
              Our Mission
            </h3>
            <p className="text-gray-600 group-hover:text-gray-200 text-sm sm:text-base leading-relaxed mb-6 transition-colors duration-300">
              To equip construction engineers, electrical contractors, and plumbers with certified, uncompromisingly safe wires and conduits that protect lives, eliminate maintenance liabilities, and guarantee long-term infrastructure durability.
            </p>
            <div className="space-y-3 pt-4 border-t border-gray-100 group-hover:border-white/15 text-xs font-semibold text-gray-700 group-hover:text-gray-100 transition-colors duration-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#FF8E01] group-hover:text-[#FF8E01] shrink-0" />
                <span>Eliminate counterfeit & low-gauge wires from job sites</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#FF8E01] group-hover:text-[#FF8E01] shrink-0" />
                <span>Provide factory-direct transparency in bulk pricing</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#FF8E01] group-hover:text-[#FF8E01] shrink-0" />
                <span>Zero defect guarantee with ISO 9001:2015 batch tracing</span>
              </div>
            </div>
          </div>

          {/* Vision Card - Dynamic Color Transition on Hover */}
          <div className="bg-white hover:bg-[#142B45] border border-gray-200 hover:border-[#142B45] rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-2xl transition-all duration-300 relative overflow-hidden group hover:-translate-y-1.5 cursor-pointer">
            <div className="w-16 h-16 rounded-2xl bg-[#FF8E01] group-hover:bg-[#FF8E01] flex items-center justify-center text-white mb-6 shadow-md transition-colors duration-300">
              <Eye className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-[#142B45] group-hover:text-white mb-4 transition-colors duration-300">
              Our Vision
            </h3>
            <p className="text-gray-600 group-hover:text-gray-200 text-sm sm:text-base leading-relaxed mb-6 transition-colors duration-300">
              To be India's most dependable integrated electrical and plumbing supply partner, recognized for setting the benchmark in fire-retardant compounding, lead-free piping innovations, and contractor-centric technical support.
            </p>
            <div className="space-y-3 pt-4 border-t border-gray-100 group-hover:border-white/15 text-xs font-semibold text-gray-700 group-hover:text-gray-100 transition-colors duration-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#FF8E01] group-hover:text-[#FF8E01] shrink-0" />
                <span>Expand green, halogen-free, recyclable polymer formulations</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#FF8E01] group-hover:text-[#FF8E01] shrink-0" />
                <span>Zero delivery delays with digital warehouse synchronization</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#FF8E01] group-hover:text-[#FF8E01] shrink-0" />
                <span>Trusted supply partner for high-rise MEP infrastructures nationwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPANY OVERVIEW SECTION */}
      <section className="bg-white py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Visual Collage */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                  alt="Industrial Production"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Floating Highlight Box */}
              <div className="absolute -bottom-6 -right-6 sm:bottom-6 sm:right-6 bg-[#142B45] text-white p-6 rounded-xl shadow-xl max-w-xs border-l-4 border-[#FF8E01]">
                <div className="text-3xl font-black text-[#FF8E01]">16+ Years</div>
                <div className="text-sm font-medium text-gray-200 mt-1">Delivering industrial consistency across India</div>
              </div>
            </div>

            {/* Overview Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142B45] tracking-tight leading-tight mb-6">
                Engineered for Strength. <br />
                Trusted by Infrastructure Leaders.
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                Founded in 2008, <strong>{COMPANY_INFO.name}</strong> has emerged as a premier manufacturer and technical distributor of certified electrical wiring and fluid plumbing conduits. By combining virgin polymers, European extrusion technology, and electrolytic grade copper, we deliver products that outperform under high voltages and extreme pressures.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FF8E01]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF8E01]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#142B45]">Strict Bureau of Indian Standards (BIS) Adherence</h4>
                    <p className="text-xs text-gray-500">Certified for IS 694, IS 9537, IS 4985, and ASTM D 1785 tolerances.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FF8E01]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF8E01]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#142B45]">Direct Factory Pricing for MEP Contractors</h4>
                    <p className="text-xs text-gray-500">Transparent bulk volume discounts with credit terms for registered builders.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FF8E01]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF8E01]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#142B45]">Central 25,000 Sq. Ft. Warehouse</h4>
                    <p className="text-xs text-gray-500">Immediate fulfillment ensures zero construction downtime.</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-[#142B45] hover:bg-[#0d1e31] text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS SHOWCASE */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142B45] tracking-tight">
              Featured High-Performance Products
            </h2>
            <p className="text-gray-600 mt-2 text-sm max-w-xl">
              Inspect our most demanded electrical conduits, copper house wires, and pressure plumbing pipes.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-3">
            <Link
              to="/pvc-pipes"
              className="text-xs font-bold text-[#142B45] hover:text-[#FF8E01] underline underline-offset-4"
            >
              All Pipes →
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              to="/wires-cables"
              className="text-xs font-bold text-[#142B45] hover:text-[#FF8E01] underline underline-offset-4"
            >
              All Wires →
            </Link>
          </div>
        </div>

        {/* Featured Products Grid showing products in compact mode (image + title only) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard product={ELECTRICAL_WIRE_PRODUCTS[0]} type="wire" isCompact={true} />
          <ProductCard product={ELECTRICAL_WIRE_PRODUCTS[1]} type="wire" isCompact={true} />
          <ProductCard product={ELECTRICAL_WIRE_PRODUCTS[2]} type="wire" isCompact={true} />
          <ProductCard product={ELECTRICAL_WIRE_PRODUCTS[3]} type="wire" isCompact={true} />
          <ProductCard product={ELECTRICAL_WIRE_PRODUCTS[4]} type="wire" isCompact={true} />
          <ProductCard product={ELECTRICAL_WIRE_PRODUCTS[5]} type="wire" isCompact={true} />
          <ProductCard product={ELECTRICAL_WIRE_PRODUCTS[6]} type="wire" isCompact={true} />
          <ProductCard product={ELECTRICAL_WIRE_PRODUCTS[7]} type="wire" isCompact={true} />
          <ProductCard product={PVC_PIPE_PRODUCTS[0]} type="pvc" isCompact={true} />
        </div>
      </section>

      {/* 6. WHAT OUR CLIENTS ARE SAYING - SCROLLABLE CAROUSEL */}
      <ClientReviewsCarousel />

      {/* 7. OUR AWARDS & ACHIEVEMENTS CAROUSEL */}
      <AwardsCarousel />

      {/* 8. CONTACT ENQUIRY CALL-TO-ACTION SECTION */}
      <section className="bg-gradient-to-r from-[#FF8E01] to-[#e57e00] py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="bg-white/20 text-white text-xs font-bold uppercase px-3 py-1 rounded-full inline-block mb-3">
              Need Bulk Supply or Project Quotation?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Get an Immediate Price Quote on Your Bill of Quantities (BOQ)
            </h2>
            <p className="mt-3 text-white/90 text-sm sm:text-base">
              Speak directly with our technical sales engineers for customized batch pricing, specification compliance, and expedited dispatch.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
            <Link
              to="/contact"
              className="bg-[#142B45] hover:bg-[#0d1e31] text-white px-8 py-4 rounded-xl font-bold text-base text-center shadow-lg transition-transform hover:scale-105"
            >
              Submit Enquiry Form
            </Link>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="bg-white hover:bg-gray-100 text-[#142B45] px-8 py-4 rounded-xl font-bold text-base text-center shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-5 h-5 text-[#FF8E01]" />
              <span>Call Technical Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. CONTINUOUS WIRE MAN WALKING ANIMATION (BOTTOM OVERLAY, ZERO INTERFERENCE) */}
      <WireManAnimation />

    </div>
  );
}

