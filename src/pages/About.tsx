import { Shield, Trophy, Users, Star } from "lucide-react";
import { motion } from "motion/react";
import { SEO } from "../components/SEO";

export function About() {
  return (
    <>
      <SEO 
        title="About Us" 
        description="Redefining the luxury automotive experience for the modern collector and enthusiast."
      />
      <div className="pt-12 pb-24">
      {/* Header section with background */}
      <div className="relative h-[400px] mb-16 px-4">
        <div className="absolute inset-0 bg-slate-900 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=3538&auto=format&fit=crop" 
            alt="Dealership Showroom" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative h-full max-w-7xl mx-auto flex flex-col justify-center items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 max-w-2xl"
          >
            Redefining the luxury automotive experience for the modern collector and enthusiast.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">Built on Passion, Driven by Excellence.</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Founded in 2026, CarQube was built on a simple premise: acquiring a luxury or exotic vehicle should be as thrilling and refined as driving one. 
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We curate only the finest examples of automotive engineering, putting them through rigorous inspections to guarantee unmatched quality. Whether you are seeking a weekend supercar or a premium daily driver, our team provides an honest, transparent, and pressure-free environment.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=3540&auto=format&fit=crop" 
              alt="Team at dealership" 
              className="rounded-3xl shadow-2xl object-cover w-full h-[400px]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Value Props */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { tag: "Quality", icon: <Shield className="w-6 h-6"/>, desc: "Rigorous 100+ point mechanical and cosmetic inspections on every vehicle." },
            { tag: "Expertise", icon: <Trophy className="w-6 h-6"/>, desc: "A team of dedicated professionals with decades of premium automotive experience." },
            { tag: "Community", icon: <Users className="w-6 h-6"/>, desc: "Exclusive events, rallies, and networking for our cherished clientele." },
            { tag: "Service", icon: <Star className="w-6 h-6"/>, desc: "End-to-end concierge service handling everything from financing to transport." }
          ].map((val, i) => (
            <motion.div 
              key={val.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
                {val.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{val.tag}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Gallery */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-10 text-center">Inside CarQube</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=3538&auto=format&fit=crop" alt="Showroom" className="w-full h-48 object-cover rounded-2xl shadow-sm hover:opacity-90 transition-opacity" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=3540&auto=format&fit=crop" alt="Luxury car detail" className="w-full h-48 object-cover rounded-2xl shadow-sm hover:opacity-90 transition-opacity" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=3540&auto=format&fit=crop" alt="Drive out" className="w-full h-48 object-cover rounded-2xl shadow-sm hover:opacity-90 transition-opacity" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=3538&auto=format&fit=crop" alt="Performance car" className="w-full h-48 object-cover rounded-2xl shadow-sm hover:opacity-90 transition-opacity" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
