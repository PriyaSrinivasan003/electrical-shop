import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Flame, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Filter,
  FileSpreadsheet,
  PhoneCall
} from 'lucide-react';
import { ELECTRICAL_WIRE_PRODUCTS, COMPANY_INFO } from '../data/content';
import ProductCard from '../components/ProductCard';

export default function WiresCables() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "House Wiring Cables",
    "Flexible Wires",
    "Industrial Cables",
    "Power Cables",
    "Electrical Accessories"
  ];

  const filteredProducts = selectedCategory === "All"
    ? ELECTRICAL_WIRE_PRODUCTS
    : ELECTRICAL_WIRE_PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="flex flex-col w-full bg-[#F5F7FA]">
      
      {/* 1. HERO BANNER WITH GLOWING FIBER OPTIC / WIRE NETWORK BACKGROUND */}
      <section className="bg-[#080d14] text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/wires-head-bg.jpg"
            alt="Glowing Electrical Wires and Cable Network"
            className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse transition-transform duration-1000"
          />
          {/* Targeted multi-tone gradient overlay: dark left panel for text contrast, allowing the glowing orange filaments to shine on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080d14] via-[#080d14]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080d14]/90 via-transparent to-transparent md:hidden" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-left">
            <span className="bg-[#FF8E01] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded inline-block mb-3 shadow-md">
              Power & Transmission Cables
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-4 drop-shadow-md">
              Electrical Wires & High-Grade Cables
            </h1>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed drop-shadow">
              Manufactured with 99.97% pure electrolytic grade copper. Flame retardant low smoke (FR-LSH) compound ensures minimum voltage drops and superior human fire safety.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY PILL FILTER */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1 shrink-0 mr-2">
              <Filter className="w-3.5 h-3.5 text-[#FF8E01]" /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#142B45] text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCT SHOWCASE GRID */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl sm:text-2xl font-black text-[#142B45]">
            Showing {filteredProducts.length} Product Series
          </h2>
          <span className="text-xs text-gray-500">IS 694 / IS 7098 / IEC 60227 Standards</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} type="wire" />
          ))}
        </div>
      </section>

      {/* 4. COPPER PURITY & SAFETY SPECIFICATIONS */}
      <section className="bg-white py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#142B45] mb-4">
                Why 99.97% Pure Electrolytic Copper Matters
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Many sub-standard wires in the market use scrap recycled copper containing iron and oxygen impurities that create resistive hot-spots, high electricity bills, and electrical short-circuit fires.
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-gray-700">
                <div className="p-4 bg-[#F5F7FA] rounded-lg border-l-4 border-[#FF8E01]">
                  <h4 className="font-bold text-[#142B45] mb-1">Zero Voltage Drop Across Long Runs</h4>
                  <p className="text-gray-600">Pure annealed copper provides 100% IACS electrical conductivity, keeping sensitive electronics safe.</p>
                </div>

                <div className="p-4 bg-[#F5F7FA] rounded-lg border-l-4 border-[#142B45]">
                  <h4 className="font-bold text-[#142B45] mb-1">FR-LSH Anti-Smoke Compound</h4>
                  <p className="text-gray-600">Releases negligible acidic gas and clear smoke during accidental fire incidents to ensure escape route visibility.</p>
                </div>

                <div className="p-4 bg-[#F5F7FA] rounded-lg border-l-4 border-green-600">
                  <h4 className="font-bold text-[#142B45] mb-1">Anti-Termite & Anti-Rodent Sheath</h4>
                  <p className="text-gray-600">Non-toxic repelling compounds compounded into the outer PVC sheath prevent rodent bite damage inside wall cavities.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#142B45] text-white rounded-2xl p-8 relative overflow-hidden">
              <h4 className="text-xl font-bold mb-4 text-[#FF8E01]">Available Coil Lengths & Drum Packings</h4>
              <p className="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed">
                Whether you need standard retail 90-meter boxes or 500-meter continuous wooden project drums for industrial cable trays, we have ready dispatch inventory.
              </p>

              <div className="space-y-3 text-xs mb-8">
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-gray-300">House Wires:</span>
                  <span className="font-bold">90m, 180m Box Coils</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-gray-300">Flexible Multi-Cores:</span>
                  <span className="font-bold">100m Bundles / 500m Reels</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-gray-300">Armoured Power Cables:</span>
                  <span className="font-bold">Cut to Length or 500m/1000m Wooden Drums</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-gray-300">Solar DC Cables:</span>
                  <span className="font-bold">500m / 1000m Heavy Wooden Spools</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="w-full bg-[#FF8E01] hover:bg-[#e57e00] text-white py-3 rounded-lg text-xs sm:text-sm font-bold text-center block transition-colors"
              >
                Inquire For Drum Lengths & Copper Rates
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

