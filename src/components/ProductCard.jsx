import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, CheckCircle2, Zap } from 'lucide-react';

/**
 * ProductCard Component:
 * - If isCompact=true (Home page):
 *   - Normal state: Displays clean product visual and title.
 *   - Hover state: An animated smooth overlay rises up revealing key technical specs,
 *     category tag, features preview, and a quick "VIEW SPECIFICATIONS →" action link.
 *   - Clicking navigates directly to the related product page with the product ID anchor.
 * - If on Product listing pages (WiresCables / PvcPipes):
 *   - Clean, elegant product card showing category badge, product visual, title,
 *     and technical specification preview (without the red "READ MORE" button).
 */
export default function ProductCard({ product, type = "pvc", isCompact = false }) {
  const targetPage = type === "wire" 
    ? `/wires-cables#${product.id}` 
    : `/pvc-pipes#${product.id}`;

  // 1. HOME PAGE COMPACT MODE WITH HOVER DETAILS OVERLAY
  if (isCompact) {
    const previewSpecs = product.specs ? product.specs.slice(0, 3) : [];
    const previewFeature = product.features && product.features.length > 0 ? product.features[0] : null;

    return (
      <Link
        to={targetPage}
        className="relative bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-1.5 text-center"
      >
        {/* Product Image Section */}
        <div className="relative h-64 sm:h-72 p-6 bg-white flex items-center justify-center overflow-hidden border-b border-gray-100">
          <img 
            src={product.image} 
            alt={product.name}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />

          {/* Hover Details Overlay (slides up smoothly on hover) */}
          <div className="absolute inset-0 bg-[#142B45]/95 backdrop-blur-xs text-white p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0 text-left z-20">
            <div>
              {/* Category / Badge */}
              <div className="flex items-center justify-between mb-2">
                <span className="inline-block bg-[#FF8E01] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs">
                  {product.category || (type === 'wire' ? 'Wires & Cables' : 'PVC Conduit Pipe')}
                </span>
                <span className="text-[10px] font-bold text-gray-300 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF8E01]" />
                  <span>BIS Certified</span>
                </span>
              </div>

              {/* Product Title inside Overlay */}
              <h4 className="text-sm font-bold text-white leading-snug line-clamp-2 mb-3">
                {product.name}
              </h4>

              {/* Quick Specs List */}
              {previewSpecs.length > 0 && (
                <div className="space-y-1.5 border-t border-white/15 pt-2 text-xs">
                  {previewSpecs.map((spec, i) => (
                    <div key={i} className="flex justify-between items-center text-[11px]">
                      <span className="text-gray-300 font-medium truncate pr-2">{spec.label}:</span>
                      <span className="font-bold text-[#FF8E01] shrink-0 text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Key Highlight Feature */}
              {previewFeature && (
                <div className="mt-3 text-[11px] text-gray-200 line-clamp-2 italic border-t border-white/10 pt-2 flex items-start gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#FF8E01] shrink-0 mt-0.5" />
                  <span>{previewFeature}</span>
                </div>
              )}
            </div>

            {/* Quick Link Footer */}
            <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs font-bold text-[#FF8E01] group-hover:text-white transition-colors">
              <span>View Full Technical Specs</span>
              <ArrowRight className="w-4 h-4 text-[#FF8E01] transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Product Title Bar (Always visible in standard view) */}
        <div className="p-4 sm:p-5 flex items-center justify-center min-h-[76px] bg-white">
          <h3 className="text-sm sm:text-base font-bold text-[#142B45] group-hover:text-[#FF8E01] transition-colors leading-snug line-clamp-2">
            {product.name}
          </h3>
        </div>
      </Link>
    );
  }

  // 2. PRODUCT PAGE DETAILED MODE: Clean card layout with specifications table (without the red "READ MORE" button)
  return (
    <div 
      id={product.id}
      className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group scroll-mt-28"
    >
      <div>
        {/* Top Category Pill Tag */}
        <div className="p-4 pb-2">
          <span className="inline-block bg-[#E5AA38] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
            {product.category || (type === "wire" ? "Multistrand Cables, Wires & Cables" : "Electrical PVC Conduit Pipe")}
          </span>
        </div>

        {/* Clean Product Visual Container */}
        <div className="relative h-60 sm:h-64 p-4 flex items-center justify-center bg-white overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        {/* Product Name Title */}
        <div className="px-5 pt-3 pb-3 text-center">
          <h3 className="text-base sm:text-lg font-bold text-[#142B45] leading-snug min-h-[48px] flex items-center justify-center">
            {product.name}
          </h3>
        </div>

        {/* Specifications Table Preview */}
        {product.specs && (
          <div className="px-5 py-4 border-t border-gray-100 bg-gray-50/60 text-xs text-gray-700 space-y-2">
            {product.specs.slice(0, 3).map((spec, i) => (
              <div key={i} className="flex justify-between items-center text-[11px]">
                <span className="text-gray-500 font-medium">{spec.label}:</span>
                <span className="font-bold text-[#142B45] text-right">{spec.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
