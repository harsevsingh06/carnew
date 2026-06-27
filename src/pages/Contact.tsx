import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { motion } from "motion/react";
import { SEO } from "../components/SEO";

export function Contact() {
  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Have an inquiry about a vehicle, financing, or consignment? Our expert team is ready to assist you."
      />
      <div className="relative h-[300px] mb-12">
        <div className="absolute inset-0 bg-slate-900 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=3538&auto=format&fit=crop" 
            alt="Contact Banner" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Have an inquiry about a vehicle, financing, or consignment? Our expert team is ready to assist you.
          </motion.p>
        </div>
      </div>

      <div className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-10"
        >
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Visit Our Showroom</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Address</h4>
                  <p className="text-slate-600 mt-1">1234 Luxury Lane,<br />Motor City, MC 90210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Phone</h4>
                  <p className="text-slate-600 mt-1">1-800-CARQUBE<br />(1-800-227-7823)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Email</h4>
                  <p className="text-slate-600 mt-1">sales@carqube.example.com<br />support@carqube.example.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Hours of Operation</h4>
                  <p className="text-slate-600 mt-1">Mon - Fri: 9:00 AM - 7:00 PM<br />Saturday: 10:00 AM - 5:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">First Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Last Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all" placeholder="Doe" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-900">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all" placeholder="john@example.com" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-900">Interested In</label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all bg-white">
                <option>Purchasing a Vehicle</option>
                <option>Selling/Trading a Vehicle</option>
                <option>Financing Options</option>
                <option>General Inquiry</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-900">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all resize-none" placeholder="Tell us how we can help..."></textarea>
            </div>

            <button type="submit" className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-red-600 transition-colors flex justify-center items-center gap-2 shadow-lg">
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
      </div>
    </>
  );
}
