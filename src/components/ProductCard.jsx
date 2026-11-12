import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  X, 
  PhoneCall, 
  FileText, 
  Layers, 
  Sparkles,
  Maximize2
} from 'lucide-react';

/**
 * ProductCard Component:
 * - If isCompact=true (Home page):
 *   - Normal state: Displays clean product visual and title.
 *   - Hover state: An animated smooth overlay rises up revealing key technical specs,
 *     category tag, features preview, and a quick "VIEW SPECIFICATIONS →" action link.
 *   - Clicking navigates directly to the related product page with the product ID anchor.
 * - If on Product listing pages (WiresCables / PvcPipes):
 *   - Clicking ANYWHERE on the card opens a rich, interactive Product Details Modal Popup.
 *   - Modal includes full technical specification sheet, compliance badges, engineered feature
 *     breakdown, high-res visual preview, and an instant "Request Quote / Enquiry" button.
 */
export default function ProductCard({ product, type = "pvc", isCompact = false }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // 2. PRODUCT PAGE DETAILED MODE: Interactive Card with Full Product Details Modal on Click
  return (
    <>
      <div 
        id={product.id}
        onClick={() => setIsModalOpen(true)}
        className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group scroll-mt-28 cursor-pointer hover:-translate-y-1 relative"
      >
        <div>
          {/* Top Category Pill Tag & Quick Inspect Hint */}
          <div className="p-4 pb-2 flex items-center justify-between">
            <span className="inline-block bg-[#E5AA38] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
              {product.category || (type === "wire" ? "Multistrand Cables, Wires & Cables" : "Electrical PVC Conduit Pipe")}
            </span>
            <span className="text-[11px] font-bold text-gray-400 group-hover:text-[#FF8E01] flex items-center gap-1 transition-colors">
              <Maximize2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Click Details</span>
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
            <h3 className="text-base sm:text-lg font-bold text-[#142B45] group-hover:text-[#FF8E01] transition-colors leading-snug min-h-[48px] flex items-center justify-center">
              {product.name}
            </h3>
          </div>

          {/* Specifications Table Preview */}
          {product.specs && (
            <div className="px-5 py-4 border-t border-gray-100 bg-gray-50/70 text-xs text-gray-700 space-y-2">
              {product.specs.slice(0, 3).map((spec, i) => (
                <div key={i} className="flex justify-between items-center text-[11px]">
                  <span className="text-gray-500 font-medium">{spec.label}:</span>
                  <span className="font-bold text-[#142B45] text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* View Specs Footer Pill */}
        <div className="px-5 py-2.5 bg-gray-100/70 border-t border-gray-200 text-center text-xs font-bold text-[#142B45] group-hover:bg-[#142B45] group-hover:text-white transition-colors flex items-center justify-center gap-1.5">
          <span>Click to View Full Specifications</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#FF8E01]" />
        </div>
      </div>

      {/* 3. PRODUCT DETAILS POPUP MODAL */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 relative animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-gray-100 flex items-center justify-between z-30">
              <div className="flex items-center gap-2">
                <span className="bg-[#FF8E01] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                  {product.category || (type === "wire" ? "Wires & Cables" : "PVC Conduit")}
                </span>
                <span className="text-xs font-bold text-gray-400">|</span>
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  ISO &amp; BIS Certified
                </span>
              </div>
              
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Product Visual & Headline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="h-64 sm:h-72 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 flex items-center justify-center border border-gray-200/80">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain filter drop-shadow-md"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-black text-[#142B45] leading-tight mb-3">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {product.description || "Manufactured to rigorous national and international quality standards with 100% verified virgin compounds, extreme fire retardance, and maximum electrical durability."}
                  </p>
                  
                  {product.tag && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#142B45]/5 text-[#142B45] text-xs font-bold border border-[#142B45]/10">
                      <Sparkles className="w-4 h-4 text-[#FF8E01]" />
                      <span>{product.tag}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Technical Specifications Sheet */}
              {product.specs && (
                <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-gray-200/80">
                  <h4 className="text-sm font-black text-[#142B45] uppercase tracking-wider mb-4 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#FF8E01]" />
                    Complete Technical Specifications
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {product.specs.map((spec, i) => (
                      <div key={i} className="flex justify-between items-center py-2 px-3 bg-white rounded-lg border border-gray-200/60 shadow-xs">
                        <span className="text-gray-500 font-semibold">{spec.label}:</span>
                        <span className="font-bold text-[#142B45] text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Features & Performance Advantages */}
              {product.features && (
                <div>
                  <h4 className="text-sm font-black text-[#142B45] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#FF8E01]" />
                    Engineered Highlights &amp; Safety Compliance
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-200/60">
                        <CheckCircle2 className="w-4 h-4 text-[#FF8E01] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Modal Actions Footer */}
            <div className="sticky bottom-0 bg-white/95 backdrop-blur-md px-6 py-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-gray-500 text-center sm:text-left">
                Direct factory pricing &amp; manufacturer test certificates available.
              </div>
              <div className="flex gap-2.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 text-xs font-bold transition-colors cursor-pointer w-full sm:w-auto text-center"
                >
                  Close
                </button>
                <Link
                  to={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="bg-[#FF8E01] hover:bg-[#e57e00] text-white px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md transition-all hover:scale-105 flex items-center justify-center gap-1.5 w-full sm:w-auto text-center"
                >
                  <span>Request Quote for this Product</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
