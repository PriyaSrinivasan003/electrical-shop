import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Building2,
  FileCheck2,
  Home as HomeIcon,
  ChevronRight,
  ShieldAlert,
  Headphones,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import EmailSendingSuccess from '../components/EmailSendingSuccess';

export default function Contact() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialProduct = searchParams.get('product') || '';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: initialProduct ? `Enquiry for ${initialProduct}` : '',
    message: initialProduct ? `Hello, I would like to request bulk pricing, MOQ, and technical catalog for ${initialProduct}.` : '',
    projectType: 'Commercial / Contractor'
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    if (initialProduct) {
      setFormData(prev => ({
        ...prev,
        subject: `Enquiry for ${initialProduct}`,
        message: `Hello, I would like to request bulk pricing, MOQ, and technical catalog for ${initialProduct}.`
      }));
    }
  }, [initialProduct]);

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Full name is required';
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      errors.phone = 'Please enter a valid phone number (8-15 digits)';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      errors.message = 'Please provide details of your enquiry';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitError(null);
    if (!validate()) return;

    setSubmitting(true);
    // Simulate API dispatch with network latency
    setTimeout(() => {
      // Allow testing failure if user enters 'error@...' email
      if (formData.email.trim().toLowerCase().includes('error@')) {
        setSubmitting(false);
        setSubmitError('Unable to send inquiry to server. Please verify your connection or try again.');
      } else {
        setSubmitting(false);
        setIsSubmitted(true);
      }
    }, 850);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello YaaWires team, my name is ${formData.name || 'a contractor'}.\n` +
      `Phone: ${formData.phone || 'N/A'}\n` +
      `Project Type: ${formData.projectType}\n` +
      `Subject: ${formData.subject || 'General Enquiry'}\n` +
      `Message: ${formData.message || 'Please provide quotation.'}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="flex flex-col w-full bg-[#F5F7FA]">
      
      {/* 1. INDUSTRIAL CONTACT HERO BANNER WITH CENTERED TITLE & BREADCRUMB */}
      <section className="relative w-full bg-[#0d1e31] overflow-hidden min-h-[260px] sm:min-h-[320px] md:min-h-[380px] flex items-center justify-center">
        <img
          src="/images/contact-banner-clean.jpg"
          alt="YaaWires Industrial Pipes and Electrical Products"
          className="w-full h-full object-cover object-center absolute inset-0"
        />

        {/* Centered Contact Title and Home Link */}
        <div className="relative z-10 text-center px-4 py-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight drop-shadow-md mb-3">
            Contact <span className="text-[#FF8E01]">Us</span>
          </h1>

          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-gray-300">
            <Link 
              to="/" 
              className="flex items-center gap-1.5 text-gray-200 hover:text-[#FF8E01] transition-colors py-1 px-2.5 rounded hover:bg-black/30 backdrop-blur-xs"
              title="Return to Home Page"
            >
              <HomeIcon className="w-4 h-4 text-[#FF8E01]" />
              <span>Home</span>
            </Link>
            <span className="text-[#FF8E01] font-bold">&gt;</span>
            <span className="text-[#FF8E01] font-bold">Contact Us</span>
          </div>
        </div>
      </section>

      {/* 2. CONTEXT & ASSISTANCE BAR */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF8E01]/10 flex items-center justify-center text-[#FF8E01]">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-[#142B45]">Have a Question or Urgent BOQ Requirement?</h2>
              <p className="text-xs text-gray-500">We respond to contractor and builder inquiries within 2 business hours.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link 
              to="/" 
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-[#142B45] hover:text-[#FF8E01] bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <HomeIcon className="w-3.5 h-3.5 text-[#FF8E01]" />
              <span>Back to Home</span>
            </Link>
            <a 
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white bg-[#142B45] hover:bg-[#0d1e31] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF8E01]" />
              <span>Call Direct</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & ENQUIRY FORM */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Cards */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#142B45] mb-6 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#FF8E01]" />
                Headquarters & Factory Outlet
              </h3>

              <div className="space-y-5 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F5F7FA] border border-gray-200 flex items-center justify-center shrink-0 text-[#142B45]">
                    <MapPin className="w-5 h-5 text-[#FF8E01]" />
                  </div>
                  <div>
                    <span className="block font-bold text-[#142B45]">Registered Address:</span>
                    <p className="text-gray-600 mt-0.5 leading-relaxed">{COMPANY_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F5F7FA] border border-gray-200 flex items-center justify-center shrink-0 text-[#142B45]">
                    <Phone className="w-5 h-5 text-[#FF8E01]" />
                  </div>
                  <div>
                    <span className="block font-bold text-[#142B45]">Phone Numbers:</span>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-gray-600 hover:text-[#FF8E01] block">
                      {COMPANY_INFO.phone} (Main Technical Desk)
                    </a>
                    <a href={`tel:${COMPANY_INFO.altPhone}`} className="text-gray-600 hover:text-[#FF8E01] block">
                      {COMPANY_INFO.altPhone} (Dispatches)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F5F7FA] border border-gray-200 flex items-center justify-center shrink-0 text-[#142B45]">
                    <Mail className="w-5 h-5 text-[#FF8E01]" />
                  </div>
                  <div>
                    <span className="block font-bold text-[#142B45]">Email Enquiries:</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-600 hover:text-[#FF8E01] block">
                      {COMPANY_INFO.email}
                    </a>
                    <a href={`mailto:${COMPANY_INFO.supportEmail}`} className="text-gray-600 hover:text-[#FF8E01] text-xs">
                      {COMPANY_INFO.supportEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F5F7FA] border border-gray-200 flex items-center justify-center shrink-0 text-[#142B45]">
                    <Clock className="w-5 h-5 text-[#FF8E01]" />
                  </div>
                  <div>
                    <span className="block font-bold text-[#142B45]">Working Hours:</span>
                    <span className="text-gray-600 block">{COMPANY_INFO.workingHours}</span>
                    <span className="text-xs text-green-600 font-semibold">Sundays: Emergency Dispatch on Prior Notice</span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Help Button */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20YaaWires,%20I%20have%20an%20urgent%20material%20enquiry.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#E53E3E] hover:bg-[#C53030] text-white py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <MessageSquare className="w-5 h-5" />
                  Chat on WhatsApp for Fast Quote
                </a>
              </div>
            </div>

            {/* Quick Contractor Assurance */}
            <div className="bg-[#142B45] text-white rounded-2xl p-6 border-l-4 border-[#FF8E01]">
              <div className="flex items-center gap-2 text-[#FF8E01] font-bold text-sm mb-1">
                <FileCheck2 className="w-5 h-5" />
                BOQ Upload & Estimation
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Have a large bill of quantities? Email your Excel or PDF sheet to <strong>sales@yaawires.com</strong> for line-item quotation within 4 hours.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Enquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-black text-[#142B45] mb-2">Send Us an Enquiry</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-6">
                Fill out the required specifications below. Our engineering desk will respond with batch availability and competitive pricing.
              </p>

              {isSubmitted ? (
                <EmailSendingSuccess
                  formData={formData}
                  onReset={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      subject: '',
                      message: '',
                      projectType: 'Commercial / Contractor'
                    });
                  }}
                  onWhatsAppRedirect={handleWhatsAppRedirect}
                />
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kumar"
                        className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
                          formErrors.name 
                            ? 'border-red-400 focus:ring-red-400 bg-red-50/30' 
                            : 'border-gray-300 focus:border-[#142B45] focus:ring-[#142B45]/20'
                        }`}
                      />
                      {formErrors.name && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {formErrors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
                          formErrors.phone 
                            ? 'border-red-400 focus:ring-red-400 bg-red-50/30' 
                            : 'border-gray-300 focus:border-[#142B45] focus:ring-[#142B45]/20'
                        }`}
                      />
                      {formErrors.phone && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {formErrors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. name@company.com"
                        className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
                          formErrors.email 
                            ? 'border-red-400 focus:ring-red-400 bg-red-50/30' 
                            : 'border-gray-300 focus:border-[#142B45] focus:ring-[#142B45]/20'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {formErrors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        I am a...
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-sm focus:outline-none focus:border-[#142B45] focus:ring-2 focus:ring-[#142B45]/20"
                      >
                        <option value="Commercial / Contractor">Electrical / MEP Contractor</option>
                        <option value="Plumbing Professional">Plumbing Contractor / Engineer</option>
                        <option value="Builder / Developer">Real Estate Builder / Developer</option>
                        <option value="Industrial Procurement">Factory / Industrial Facility</option>
                        <option value="Retail Dealer">Hardware Store / Retail Reseller</option>
                        <option value="Homeowner">Individual Homeowner</option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Enquiry Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Bulk quote for 2.5 sq mm FR-LSH wire & 25mm PVC conduits"
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
                        formErrors.subject 
                          ? 'border-red-400 focus:ring-red-400 bg-red-50/30' 
                          : 'border-gray-300 focus:border-[#142B45] focus:ring-[#142B45]/20'
                      }`}
                    />
                    {formErrors.subject && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {formErrors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Specifications & Details *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify sizes, quantities required, delivery site location, and expected delivery date..."
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
                        formErrors.message 
                          ? 'border-red-400 focus:ring-red-400 bg-red-50/30' 
                          : 'border-gray-300 focus:border-[#142B45] focus:ring-[#142B45]/20'
                      }`}
                    />
                    {formErrors.message && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {formErrors.message}
                      </p>
                    )}
                  </div>

                  {/* API Submission Error Banner */}
                  {submitError && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-300 text-red-800 text-xs flex items-center justify-between gap-2 animate-bounce">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                        <span>{submitError}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSubmitError(null)}
                        className="text-red-700 font-bold hover:underline cursor-pointer"
                      >
                        Dismiss
                      </button>
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex-1 bg-[#142B45] hover:bg-[#0d1e31] text-white py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-70 cursor-pointer active:scale-98"
                    >
                      {submitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Routing Through Dispatch Pipeline...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#FF8E01]" />
                          <span>Submit Official Enquiry</span>
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsAppRedirect}
                      className="bg-[#E53E3E] hover:bg-[#C53030] text-white py-3.5 px-6 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer active:scale-98"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Forward to WhatsApp</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* 3. GOOGLE MAPS INTEGRATION */}
      <section className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-black text-[#142B45]">Visit Our Central Industrial Depot</h3>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">Conveniently located in Peenya Industrial Area with direct heavy vehicle container dock access.</p>
          </div>

          <div className="w-full h-96 rounded-2xl overflow-hidden border border-gray-300 shadow-md">
            <iframe
              title="YaaWires Factory & Warehouse Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9737194689626!2d77.51475767507758!3d13.037343987284055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d1000000001%3A0x86e80b2a5e8c1b44!2sPeenya%20Industrial%20Area%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED CONTRACTOR QUESTIONS (FAQ) */}
      <section className="bg-[#F5F7FA] py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#142B45]">Ordering & Delivery Essentials</h3>
            <p className="text-gray-600 text-sm mt-2">Answers to common questions regarding quotes, bulk dispatches, and quality certifications.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
              <h4 className="font-bold text-[#142B45] text-base mb-2">How fast do you dispatch bulk wire and pipe orders?</h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Standard items (house wires, PVC conduit pipes, UPVC pipes) are dispatched from our Peenya central warehouse within 24 to 48 hours. Custom cable cuts and drum lengths take 3 to 5 business days.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
              <h4 className="font-bold text-[#142B45] text-base mb-2">Do you provide Manufacturer Test Certificates (MTC)?</h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Yes. Every batch dispatch is accompanied by an official Bureau of Indian Standards (BIS) and ISO 9001:2015 test report detailing conductor resistance, flammability index, and hydrostatic bursting results.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
              <h4 className="font-bold text-[#142B45] text-base mb-2">Can we upload our project BOQ (Bill of Quantities)?</h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Certainly. You can submit your requirements in the form above, or email your Excel/PDF spreadsheet directly to <strong>sales@yaawires.com</strong> or send it via WhatsApp.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
              <h4 className="font-bold text-[#142B45] text-base mb-2">Are contractor credit facilities available?</h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Registered MEP contractors, commercial builders, and institutional projects with ongoing purchase orders can apply for 15-day to 30-day corporate credit terms post KYC verification.
              </p>
            </div>
          </div>

          {/* Quick Redirection to Home button at bottom */}
          <div className="text-center mt-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-[#142B45] hover:bg-[#0d1e31] text-white px-6 py-3 rounded-lg text-sm font-bold shadow-sm transition-all"
            >
              <HomeIcon className="w-4 h-4 text-[#FF8E01]" />
              <span>Return to Home Page</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

