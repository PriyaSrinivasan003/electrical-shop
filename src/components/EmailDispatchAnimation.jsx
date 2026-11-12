import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle2, Send, Sparkles, ArrowRight } from 'lucide-react';

/**
 * EmailDispatchAnimation:
 * - Premium animated envelope illustration
 * - Envelope opens smoothly on trigger
 * - Letter emerges from the envelope
 * - Letter transforms into a dynamic paper plane
 * - Paper plane takes off and flies across the screen along curved path
 * - Successful delivery animation with checkmark burst
 */
export default function EmailDispatchAnimation({ 
  isFormSubmitting = false, 
  isFormSuccess = false,
  onReset
}) {
  const [animationStage, setAnimationStage] = useState('idle'); // 'idle' | 'opening' | 'plane' | 'flying' | 'delivered'

  // Sync with actual form submission states
  React.useEffect(() => {
    if (isFormSubmitting) {
      triggerSequence();
    }
  }, [isFormSubmitting]);

  const triggerSequence = () => {
    setAnimationStage('opening');
    setTimeout(() => {
      setAnimationStage('plane');
      setTimeout(() => {
        setAnimationStage('flying');
        setTimeout(() => {
          setAnimationStage('delivered');
        }, 1100);
      }, 700);
    }, 800);
  };

  const handleManualTrigger = () => {
    if (animationStage !== 'idle' && animationStage !== 'delivered') return;
    triggerSequence();
  };

  return (
    <div className="relative w-full max-w-md mx-auto bg-gradient-to-br from-[#142B45] to-[#0A1625] border border-white/10 rounded-3xl p-6 text-white shadow-xl overflow-hidden select-none">
      {/* Background soft ambient glow */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-[#FF8E01]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-44 h-44 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#FF8E01]/20 border border-[#FF8E01]/40 flex items-center justify-center text-[#FF8E01]">
            <Mail className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-white block">Official Dispatch Pipeline</span>
            <span className="text-[10px] text-gray-400">Direct encrypted transmission</span>
          </div>
        </div>

        <button
          onClick={handleManualTrigger}
          className="text-[11px] font-bold text-[#FF8E01] hover:text-white bg-white/5 hover:bg-[#FF8E01]/20 border border-[#FF8E01]/30 px-3 py-1 rounded-full transition-all"
        >
          {animationStage === 'delivered' ? 'Replay' : 'Test Flight'}
        </button>
      </div>

      {/* Main Stage: Envelope to Paper Plane Flight */}
      <div className="relative h-48 flex items-center justify-center my-4 overflow-hidden">
        {/* Curving Flight Path Line (Dotted) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          <path
            d="M 60 140 C 140 160, 200 40, 360 60"
            fill="none"
            stroke="#FF8E01"
            strokeWidth="2"
            strokeDasharray="6 4"
          />
        </svg>

        <AnimatePresence mode="wait">
          {/* STAGE 1: ENVELOPE (Idle or Opening) */}
          {(animationStage === 'idle' || animationStage === 'opening') && (
            <motion.div
              key="envelope"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-44 h-32 flex items-center justify-center"
            >
              {/* Envelope Back Body */}
              <div className="absolute inset-0 bg-[#1E3A5F] rounded-xl shadow-xl border border-sky-400/30 overflow-hidden">
                {/* Diagonal lines */}
                <svg className="w-full h-full" viewBox="0 0 176 128">
                  <polygon points="0,0 88,64 176,0" fill="#183150" />
                  <polygon points="0,128 88,64 176,128" fill="#142B45" />
                  <polygon points="0,0 88,64 0,128" fill="#1B3557" />
                  <polygon points="176,0 88,64 176,128" fill="#1B3557" />
                </svg>
              </div>

              {/* Emerging Letter Sheet */}
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={
                  animationStage === 'opening'
                    ? { y: -38, opacity: 1, scale: 1.05 }
                    : { y: 10, opacity: 0.6 }
                }
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute w-36 h-24 bg-white rounded-lg shadow-lg border border-gray-200 p-2.5 flex flex-col justify-between z-10"
              >
                <div className="flex items-center justify-between border-b border-gray-100 pb-1">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#FF8E01]" />
                    <span className="text-[8px] font-black font-mono text-[#142B45]">VRL-BOQ-QUOTE</span>
                  </div>
                  <span className="text-[7px] text-gray-400">PRIORITY</span>
                </div>
                <div className="space-y-1">
                  <div className="h-1.5 bg-gray-200 rounded w-full" />
                  <div className="h-1.5 bg-gray-200 rounded w-4/5" />
                  <div className="h-1.5 bg-sky-200 rounded w-3/5" />
                </div>
                <div className="text-[7px] font-bold text-[#FF8E01]">STATUS: READY FOR DISPATCH</div>
              </motion.div>

              {/* Top Flap (Opens upwards when animation starts) */}
              <motion.div
                initial={{ rotateX: 0 }}
                animate={animationStage === 'opening' ? { rotateX: 180, y: -20 } : { rotateX: 0 }}
                transition={{ duration: 0.5 }}
                style={{ transformOrigin: 'top center' }}
                className="absolute top-0 inset-x-0 h-16 z-20 pointer-events-none"
              >
                <svg className="w-full h-full" viewBox="0 0 176 64">
                  <polygon points="0,0 88,64 176,0" fill="#254A77" stroke="#38BDF8" strokeWidth="0.5" />
                </svg>
              </motion.div>
            </motion.div>
          )}

          {/* STAGE 2: PAPER PLANE (Transforming and Flying) */}
          {(animationStage === 'plane' || animationStage === 'flying') && (
            <motion.div
              key="paperplane"
              initial={{ x: -60, y: 30, scale: 0.8, rotate: -15 }}
              animate={
                animationStage === 'flying'
                  ? {
                      x: [0, 80, 200, 320],
                      y: [20, -30, -50, -80],
                      scale: [1, 1.1, 0.9, 0.5],
                      rotate: [-15, 5, -5, -25],
                      opacity: [1, 1, 1, 0]
                    }
                  : { x: 0, y: 0, scale: 1, rotate: -10, opacity: 1 }
              }
              transition={{ duration: 1.1, ease: "easeInOut" }}
              className="relative z-30 flex items-center justify-center"
            >
              {/* Paper Plane Vector */}
              <svg width="84" height="64" viewBox="0 0 120 90" fill="none" className="drop-shadow-[0_10px_20px_rgba(255,142,1,0.4)]">
                {/* Main body */}
                <polygon points="10,45 110,10 65,85" fill="#FFFFFF" />
                {/* Left wing shade */}
                <polygon points="10,45 110,10 65,55" fill="#E2E8F0" />
                {/* Center crease */}
                <line x1="10" y1="45" x2="110" y2="10" stroke="#CBD5E1" strokeWidth="2" />
                {/* Bottom wing flap */}
                <polygon points="65,55 65,85 85,55" fill="#FF8E01" />
              </svg>

              {/* Sparkle jet-trail particles */}
              <motion.div
                animate={{ opacity: [0.4, 0.9, 0], scale: [0.8, 1.4, 0.5] }}
                transition={{ repeat: Infinity, duration: 0.5 }}
                className="absolute -left-4 top-6 text-[#FF8E01]"
              >
                ✨
              </motion.div>
            </motion.div>
          )}

          {/* STAGE 3: DELIVERED SUCCESS ANIMATION */}
          {animationStage === 'delivered' && (
            <motion.div
              key="delivered"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              className="flex flex-col items-center justify-center text-center p-4 bg-emerald-950/40 border border-emerald-500/40 rounded-2xl w-full max-w-xs shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 mb-2 shadow-lg shadow-emerald-500/30">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-base font-bold text-white">Email Dispatched Successfully!</h4>
              <p className="text-xs text-emerald-300 mt-0.5">
                Delivered straight to VRL Wires and Cables sales desk inbox.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Progress Footer Step Bar */}
      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-300">
        <span className="flex items-center gap-1.5">
          <span className={`w-2 h-2 rounded-full ${animationStage === 'delivered' ? 'bg-emerald-400' : 'bg-[#FF8E01] animate-ping'}`} />
          <span className="font-semibold">
            {animationStage === 'idle' && 'Ready for your submission'}
            {animationStage === 'opening' && 'Extracting specifications...'}
            {animationStage === 'plane' && 'Folding into flight payload...'}
            {animationStage === 'flying' && 'Streaming to factory server...'}
            {animationStage === 'delivered' && 'Verified delivery complete ✓'}
          </span>
        </span>
        <span className="font-mono text-[10px] text-gray-400">SMTP: 250 OK</span>
      </div>
    </div>
  );
}

