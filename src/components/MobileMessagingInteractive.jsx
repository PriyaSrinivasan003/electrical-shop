import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Check, CheckCheck, MessageSquare, PhoneCall } from 'lucide-react';

/**
 * MobileMessagingInteractive:
 * - Stylish 2D smartphone illustration
 * - Entering smooth slide & float animation
 * - Message typing effect inside the phone screen
 * - Message bubbles pop up sequentially
 * - Send button click animation with bubble flying out
 * - Delivered / success checkmark animation
 */
export default function MobileMessagingInteractive({ 
  onTriggerSend,
  isFormSubmitting = false,
  isFormSuccess = false
}) {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello VRL Wires and Cables! Looking for 2.5mm FR-LSH wires & conduits.", from: 'user', time: '10:41 AM' },
    { id: 2, text: "Hi there! Our PEENYA central warehouse has ready stock available.", from: 'sparky', time: '10:42 AM' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [outgoingText, setOutgoingText] = useState("Can you share today's bulk discount quotation?");
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  // Sync with form submission when user submits the contact form
  useEffect(() => {
    if (isFormSuccess && !sentSuccess) {
      handleSendAnimation();
    }
  }, [isFormSuccess]);

  const handleSendAnimation = () => {
    if (isSending || sentSuccess) return;
    setIsSending(true);

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { id: Date.now(), text: outgoingText || "Official inquiry submitted!", from: 'user', time: 'Just now' }
      ]);
      setIsSending(false);
      setSentSuccess(true);
      if (onTriggerSend) onTriggerSend();

      // Sparky auto-reply simulation
      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [
            ...prev,
            { id: Date.now() + 1, text: "Received! Engineering team is preparing your BOQ estimation. ⚡", from: 'sparky', time: 'Just now' }
          ]);
        }, 1800);
      }, 800);
    }, 600);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative w-full max-w-[340px] sm:max-w-[360px] mx-auto bg-gradient-to-b from-[#142B45] to-[#0A1625] p-4 rounded-[42px] shadow-2xl border-4 border-[#1E3A5F] shadow-[#142B45]/30 select-none"
    >
      {/* Smartphone Speaker & Notch */}
      <div className="absolute top-3 inset-x-0 flex items-center justify-center gap-2 z-20 pointer-events-none">
        <div className="w-16 h-4 bg-[#09131F] rounded-full flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1E293B] mr-2" />
          <div className="w-6 h-1.5 rounded-full bg-[#1E293B]" />
        </div>
      </div>

      {/* Outer Phone Shell Highlight */}
      <div className="absolute inset-1 rounded-[38px] border border-white/10 pointer-events-none" />

      {/* Screen Container */}
      <div className="relative bg-[#F8FAFC] rounded-[34px] overflow-hidden flex flex-col h-[460px] pt-8 pb-3 px-3 shadow-inner">
        {/* App Header */}
        <div className="flex items-center justify-between pb-2.5 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="relative w-9 h-9 rounded-full bg-[#142B45] flex items-center justify-center text-white font-bold text-xs border-2 border-[#FF8E01]">
              ⚡
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#142B45] flex items-center gap-1">
                <span>Sparky • Technical Desk</span>
              </div>
              <span className="text-[10px] text-emerald-600 font-semibold block">Online & Replying</span>
            </div>
          </div>
          <a
            href="tel:+919876543210"
            className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-[#142B45] hover:bg-[#FF8E01] hover:text-white transition-colors"
            title="Call Technical Support"
          >
            <PhoneCall className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Chat Message Stream */}
        <div className="flex-1 overflow-y-auto py-3 space-y-2.5 scrollbar-thin scrollbar-thumb-gray-200">
          <AnimatePresence initial={false}>
            {messages.map((m) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 12, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={`flex flex-col ${m.from === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] px-3.5 py-2 rounded-2xl text-xs leading-relaxed shadow-xs relative ${
                    m.from === 'user'
                      ? 'bg-[#142B45] text-white rounded-tr-xs'
                      : 'bg-white text-gray-800 border border-gray-200 rounded-tl-xs'
                  }`}
                >
                  <p>{m.text}</p>
                  <div
                    className={`flex items-center justify-end gap-1 text-[9px] mt-1 ${
                      m.from === 'user' ? 'text-gray-300' : 'text-gray-400'
                    }`}
                  >
                    <span>{m.time}</span>
                    {m.from === 'user' && <CheckCheck className="w-3 h-3 text-sky-400" />}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing Indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-1 bg-white border border-gray-200 px-3 py-2 rounded-2xl w-fit shadow-xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" />
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:0.2s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:0.4s]" />
            </motion.div>
          )}
        </div>

        {/* Input Bar & Animated Send Button */}
        <div className="pt-2 border-t border-gray-200 bg-[#F8FAFC]">
          <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-full p-1 pl-3.5 shadow-sm focus-within:border-[#142B45] focus-within:ring-2 focus-within:ring-[#142B45]/15 transition-all">
            <input
              type="text"
              value={outgoingText}
              onChange={(e) => setOutgoingText(e.target.value)}
              placeholder="Type message to VRL Wires and Cables..."
              className="w-full text-xs text-gray-800 bg-transparent focus:outline-none"
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSendAnimation();
              }}
            />
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={handleSendAnimation}
              disabled={isSending}
              className="w-8 h-8 rounded-full bg-[#FF8E01] hover:bg-[#e57e00] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#FF8E01]/30 transition-colors disabled:opacity-50"
              title="Click to send test message"
            >
              {isSending ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                />
              ) : sentSuccess ? (
                <Check className="w-4 h-4" />
              ) : (
                <Send className="w-3.5 h-3.5 -rotate-12 translate-x-0.5" />
              )}
            </motion.button>
          </div>
          <div className="flex items-center justify-between text-[10px] text-gray-500 mt-2 px-2">
            <span>⚡ Interactive Mobile Demo</span>
            <span className="text-emerald-600 font-semibold">2h Response Time</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

