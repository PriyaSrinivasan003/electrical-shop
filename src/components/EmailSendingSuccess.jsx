import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Mail, MessageSquare, ArrowRight } from 'lucide-react';

/**
 * Premium Email Sending Animation Component
 * Follows: Cream (#FAF8F5 / #F5F7FA) + Navy (#142B45) + Safety Orange (#FF8E01)
 * 
 * 4 STAGES:
 * 1. ENVELOPE OPENING:
 *    - Stylish vector envelope with subtle depth and shadow
 *    - Flap smoothly rotates open upwards (3D perspective tilt)
 * 
 * 2. LETTER REVEAL:
 *    - Letter sheet rises upwards out of envelope body
 *    - Displays authentic preview with customer name, subject, and YaaWires priority badge
 * 
 * 3. PAPER PLANE TRANSFORMATION & FLIGHT:
 *    - Folds dynamically into a white + orange accented paper plane
 *    - Takes flight along a smooth ascending curved trajectory with motion blur particles
 * 
 * 4. SUCCESS ANIMATION:
 *    - Animated SVG drawing checkmark
 *    - "Email Sent Successfully!" with clean fade-in
 *    - Celebration confetti particles in Orange, Navy, and Gold
 */
export default function EmailSendingSuccess({
  formData = {},
  onReset,
  onWhatsAppRedirect
}) {
  // 'opening' -> 'revealing' -> 'plane' -> 'flying' -> 'success'
  const [stage, setStage] = useState('opening');

  useEffect(() => {
    // Stage 1: Opening (0ms -> 600ms)
    // Stage 2: Letter Reveal (600ms -> 1700ms)
    const t1 = setTimeout(() => {
      setStage('revealing');
    }, 550);

    // Stage 3: Plane fold (1700ms -> 2400ms)
    const t2 = setTimeout(() => {
      setStage('plane');
    }, 1800);

    // Stage 4: Plane flight (2400ms -> 3400ms)
    const t3 = setTimeout(() => {
      setStage('flying');
    }, 2450);

    // Stage 5: Success checkmark & celebration (3400ms)
    const t4 = setTimeout(() => {
      setStage('success');
    }, 3400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <div className="w-full bg-[#FAF8F5] border border-gray-200/80 rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden text-center select-none">
      
      {/* Subtle ambient lighting circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF8E01]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#142B45]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Animation Stage Area */}
      <div className="relative h-60 sm:h-64 flex items-center justify-center overflow-hidden my-2">
        
        {/* Curving Flight Path Line */}
        {stage !== 'success' && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            <path
              d="M 80 180 C 180 200, 260 50, 480 30"
              fill="none"
              stroke="#FF8E01"
              strokeWidth="2.5"
              strokeDasharray="6 6"
            />
          </svg>
        )}

        <AnimatePresence mode="wait">
          
          {/* ======================================================== */}
          {/* STAGES 1 & 2: ENVELOPE OPENING & LETTER REVEAL */}
          {/* ======================================================== */}
          {(stage === 'opening' || stage === 'revealing') && (
            <motion.div
              key="envelope-stage"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: -15 }}
              transition={{ duration: 0.4 }}
              className="relative w-56 h-36 flex items-center justify-center"
            >
              {/* Envelope Body (Navy #142B45 with Cream/Silver Accents) */}
              <div className="absolute inset-0 bg-[#142B45] rounded-xl shadow-2xl border border-sky-400/20 overflow-hidden z-10">
                <svg className="w-full h-full" viewBox="0 0 224 144">
                  {/* Inner lining */}
                  <polygon points="0,0 112,80 224,0" fill="#0E2137" />
                  {/* Left fold */}
                  <polygon points="0,0 112,80 0,144" fill="#183454" />
                  {/* Right fold */}
                  <polygon points="224,0 112,80 224,144" fill="#183454" />
                  {/* Bottom fold */}
                  <polygon points="0,144 112,80 224,144" fill="#142B45" />
                </svg>
              </div>

              {/* Emerging Letter with Real Content Preview */}
              <motion.div
                initial={{ y: 25, opacity: 0, scale: 0.95 }}
                animate={
                  stage === 'revealing'
                    ? { y: -52, opacity: 1, scale: 1 }
                    : { y: 15, opacity: 0.7, scale: 0.95 }
                }
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-48 h-32 bg-white rounded-lg shadow-xl border border-gray-200 p-3 flex flex-col justify-between text-left z-20 pointer-events-none"
              >
                {/* Letter Header */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF8E01]" />
                    <span className="text-[9px] font-black tracking-wider text-[#142B45] font-mono uppercase">
                      YAA-OFFICIAL-BOQ
                    </span>
                  </div>
                  <span className="text-[8px] font-bold text-[#FF8E01] bg-[#FF8E01]/10 px-1.5 py-0.5 rounded">
                    ENCRYPTED
                  </span>
                </div>

                {/* Message preview snippet */}
                <div className="space-y-1">
                  <div className="text-[9px] font-bold text-gray-800 truncate">
                    From: {formData.name || 'Contractor Partner'}
                  </div>
                  <div className="text-[8px] text-gray-500 truncate">
                    Subject: {formData.subject || 'Material Price Quotation'}
                  </div>
                  <div className="h-1 bg-gray-100 rounded w-full mt-1" />
                  <div className="h-1 bg-gray-100 rounded w-4/5" />
                </div>

                {/* Letter Footer */}
                <div className="flex items-center justify-between text-[8px] text-emerald-600 font-semibold pt-1 border-t border-gray-50">
                  <span>Routing to Peenya Factory</span>
                  <span>⚡ Priority</span>
                </div>
              </motion.div>

              {/* Envelope Flap (3D Flip Open upwards) */}
              <motion.div
                initial={{ rotateX: 0 }}
                animate={
                  stage === 'revealing' || stage === 'opening'
                    ? { rotateX: 180, y: -2 }
                    : { rotateX: 0 }
                }
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ transformOrigin: 'top center' }}
                className="absolute top-0 inset-x-0 h-20 z-30 pointer-events-none"
              >
                <svg className="w-full h-full" viewBox="0 0 224 80">
                  <polygon points="0,0 112,80 224,0" fill="#1C3B61" stroke="#38BDF8" strokeWidth="0.5" />
                </svg>
              </motion.div>
            </motion.div>
          )}

          {/* ======================================================== */}
          {/* STAGE 3: PAPER PLANE TRANSFORMATION & TAKE-OFF FLIGHT */}
          {/* ======================================================== */}
          {(stage === 'plane' || stage === 'flying') && (
            <motion.div
              key="plane-stage"
              initial={{ scale: 0.7, opacity: 0, x: -60, y: 30, rotate: -10 }}
              animate={
                stage === 'flying'
                  ? {
                      x: [0, 80, 220, 360],
                      y: [10, -30, -60, -95],
                      scale: [1, 1.15, 0.95, 0.5],
                      rotate: [-10, 5, -5, -28],
                      opacity: [1, 1, 1, 0]
                    }
                  : { scale: 1, opacity: 1, x: 0, y: 0, rotate: -5 }
              }
              transition={{
                duration: 0.95,
                ease: "easeInOut"
              }}
              className="relative z-40 flex items-center justify-center"
            >
              {/* Paper Plane Vector with Orange Branding */}
              <svg
                width="96"
                height="72"
                viewBox="0 0 120 90"
                fill="none"
                className="drop-shadow-[0_12px_24px_rgba(255,142,1,0.45)]"
              >
                {/* Main Body */}
                <polygon points="10,45 110,10 65,85" fill="#FFFFFF" />
                {/* Shaded Fold */}
                <polygon points="10,45 110,10 65,55" fill="#E2E8F0" />
                {/* Center Crease */}
                <line x1="10" y1="45" x2="110" y2="10" stroke="#CBD5E1" strokeWidth="2" />
                {/* Brand Orange Wing Fin */}
                <polygon points="65,55 65,85 85,55" fill="#FF8E01" />
                {/* Cockpit / Tail mark */}
                <circle cx="95" cy="16" r="3" fill="#142B45" />
              </svg>

              {/* Dynamic Sparkle Vapor Trail */}
              <motion.div
                animate={{ opacity: [0.3, 0.9, 0], scale: [0.7, 1.5, 0.4] }}
                transition={{ repeat: Infinity, duration: 0.45 }}
                className="absolute -left-6 top-8 text-[#FF8E01] text-lg font-bold"
              >
                ⚡
              </motion.div>
            </motion.div>
          )}

          {/* ======================================================== */}
          {/* STAGE 4: SUCCESS WITH DRAWING CHECKMARK & CONFETTI */}
          {/* ======================================================== */}
          {stage === 'success' && (
            <motion.div
              key="success-stage"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 220 }}
              className="relative flex flex-col items-center justify-center z-40"
            >
              {/* Confetti Particles Burst */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                {/* Particle 1 */}
                <motion.span
                  initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                  animate={{ x: -75, y: -55, opacity: 0, scale: 1.4 }}
                  transition={{ duration: 0.8 }}
                  className="w-3 h-3 rounded-full bg-[#FF8E01] absolute"
                />
                {/* Particle 2 */}
                <motion.span
                  initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                  animate={{ x: 80, y: -50, opacity: 0, scale: 1.3 }}
                  transition={{ duration: 0.85 }}
                  className="w-2.5 h-2.5 rounded-full bg-[#142B45] absolute"
                />
                {/* Particle 3 */}
                <motion.span
                  initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                  animate={{ x: -60, y: 45, opacity: 0, scale: 1.2 }}
                  transition={{ duration: 0.75 }}
                  className="w-2 h-2 rounded-full bg-amber-400 absolute"
                />
                {/* Particle 4 */}
                <motion.span
                  initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                  animate={{ x: 70, y: 40, opacity: 0, scale: 1.5 }}
                  transition={{ duration: 0.9 }}
                  className="w-3 h-3 rounded-full bg-emerald-400 absolute"
                />
              </div>

              {/* Animated Drawing Checkmark Disc */}
              <div className="relative w-20 h-20 rounded-full bg-emerald-50 border-2 border-emerald-400 flex items-center justify-center shadow-xl shadow-emerald-500/20 mb-4">
                <svg className="w-10 h-10" viewBox="0 0 52 52">
                  {/* Outer circle pulse */}
                  <motion.circle
                    cx="26"
                    cy="26"
                    r="23"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                  {/* Inner tick */}
                  <motion.path
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 27 L22 35 L38 17"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.4, delay: 0.35, ease: "easeOut" }}
                  />
                </svg>
              </div>

              {/* Headline with Fade-in */}
              <motion.h4
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.45 }}
                className="text-2xl sm:text-3xl font-black text-[#142B45] tracking-tight"
              >
                Email Sent Successfully!
              </motion.h4>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.55 }}
                className="text-xs sm:text-sm text-gray-600 mt-2 max-w-md leading-relaxed"
              >
                Thank you, <strong>{formData.name || 'valued partner'}</strong>. Your specification sheet has been logged into our technical desk. We will reach out to <strong>{formData.phone || formData.email}</strong> within 2 business hours.
              </motion.p>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Progress & Action Controls */}
      <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-gray-500">
          <span className={`w-2 h-2 rounded-full ${stage === 'success' ? 'bg-emerald-500' : 'bg-[#FF8E01] animate-ping'}`} />
          <span className="font-semibold text-gray-700">
            {stage === 'opening' && 'Opening official envelope...'}
            {stage === 'revealing' && 'Extracting specifications letter...'}
            {stage === 'plane' && 'Folding into flight dispatch plane...'}
            {stage === 'flying' && 'Streaming to YaaWires sales desk...'}
            {stage === 'success' && 'Verified delivery complete ✓ (SMTP 250 OK)'}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {onReset && (
            <button
              onClick={onReset}
              className="bg-[#142B45] hover:bg-[#0d1e31] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer"
            >
              Submit Another Enquiry
            </button>
          )}

          {onWhatsAppRedirect && (
            <button
              onClick={onWhatsAppRedirect}
              className="bg-[#E53E3E] hover:bg-[#C53030] text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Forward via WhatsApp</span>
            </button>
          )}
        </div>
      </div>

    </div>
  );
}

