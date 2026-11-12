import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Droplets, 
  ShieldCheck, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Filter,
  FileText,
  PhoneCall
} from 'lucide-react';
import { PVC_PIPE_PRODUCTS, COMPANY_INFO } from '../data/content';
import ProductCard from '../components/ProductCard';

export default function PvcPipes() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "PVC Pipes",
    "UPVC Pipes",
    "CPVC Pipes",
    "PVC Fittings",
    "Plumbing Accessories"
  ];

  const filteredProducts = selectedCategory === "All"
    ? PVC_PIPE_PRODUCTS
    : PVC_PIPE_PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="flex flex-col w-full bg-[#F5F7FA]">
      
      {/* 1. HERO BANNER WITH BRANDED PIPES & CONSTRUCTION SITE BACKGROUND */}
      <section className="relative text-white py-20 lg:py-28 overflow-hidden bg-[#142B45]">
        {/* User-Uploaded Branded Pipes Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/pvc-pipes-hero-bg.jpg"
            alt="Industrial PVC Pipes and Construction Site"
            className="w-full h-full object-cover object-right sm:object-center transform scale-100 transition-transform duration-1000"
          />
          {/* Targeted high-contrast overlay: dark navy on the left to keep typography razor-sharp while showcasing the stacked pipes and building on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1e31]/95 via-[#0d1e31]/75 to-transparent sm:via-[#0d1e31]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1e31]/90 via-transparent to-transparent md:hidden" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-left">
            <span className="bg-[#FF8E01] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded inline-block mb-3.5 shadow-md">
              Plumbing & Conduit Systems
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-4 drop-shadow-md text-white">
              Heavy Duty PVC, UPVC & CPVC Pipes
            </h1>
            <p className="text-gray-100 text-sm sm:text-base leading-relaxed drop-shadow font-normal max-w-xl">
              Precision-extruded pipes engineered to withstand severe hydrostatic pressures, boiling water temperatures up to 93°C, and structural concrete casting stress.
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
            Showing {filteredProducts.length} Product Lines
          </h2>
          <span className="text-xs text-gray-500">IS 9537 / ASTM D 1785 / IS 15778 Compliant</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} type="pvc" />
          ))}
        </div>
      </section>

      {/* 4. TECHNICAL COMPARISON GUIDE */}
      <section className="bg-white py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#142B45]">Which Pipe Type Fits Your Application?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-6 bg-[#F5F7FA]">
              <div className="text-lg font-bold text-[#142B45] mb-2">PVC Electrical Conduits</div>
              <p className="text-xs text-gray-600 mb-4">Formulated for impact strength and flame self-extinguishing properties.</p>
              <ul className="text-xs text-gray-700 space-y-2">
                <li>• <strong>Application:</strong> Slab casting, wall chases, surface conduit wiring</li>
                <li>• <strong>Temp Range:</strong> -5°C to 60°C</li>
                <li>• <strong>Key Benefit:</strong> Dielectric strength prevents electrical leakage</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 bg-[#F5F7FA]">
              <div className="text-lg font-bold text-[#142B45] mb-2">UPVC Cold Potable Lines</div>
              <p className="text-xs text-gray-600 mb-4">100% lead-free formulation certified for drinking water distribution.</p>
              <ul className="text-xs text-gray-700 space-y-2">
                <li>• <strong>Application:</strong> Residential plumbing, overhead tank risers, tube wells</li>
                <li>• <strong>Temp Range:</strong> 0°C to 60°C</li>
                <li>• <strong>Key Benefit:</strong> Mirror smooth inner finish prevents lime scaling</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 bg-[#F5F7FA]">
              <div className="text-lg font-bold text-[#142B45] mb-2">CPVC Hot & Cold Pro</div>
              <p className="text-xs text-gray-600 mb-4">Chlorinated molecular structure capable of handling boiling water without warping.</p>
              <ul className="text-xs text-gray-700 space-y-2">
                <li>• <strong>Application:</strong> Solar water lines, geysers, industrial steam & acid lines</li>
                <li>• <strong>Temp Range:</strong> Up to 93°C (200°F)</li>
                <li>• <strong>Key Benefit:</strong> Thermal insulation maintains water temperature</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="bg-[#142B45] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-white">Need Custom Pipe Sizing or Bulk Bundles?</h3>
            <p className="text-gray-300 text-sm mt-1">Our sales engineering team provides instant BOQ volume estimates and delivery schedules.</p>
          </div>
          <div className="flex gap-4">
            <Link
              to="/contact"
              className="bg-[#FF8E01] hover:bg-[#e57e00] text-white px-6 py-3 rounded-lg text-sm font-bold transition-colors"
            >
              Get Pipe Quote
            </Link>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20YaaWires,%20I%20need%20a%20quote%20for%20PVC/UPVC/CPVC%20pipes.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg text-sm font-bold transition-colors border border-white/20"
            >
              WhatsApp Price List
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

