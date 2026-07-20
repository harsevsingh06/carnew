import Hero from "../components/Hero/Hero";
import {
  Camera,
  Star,
  ChevronRight,
  Shield,
  Zap,
  DollarSign,
  Heart,
  GitCompare,
  Gauge,
  Fuel,
  Settings,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { featuredCars, photos, blogPosts } from "../data";

export function Home() {
  return (
    <>
      <SEO 
        title="Discover Premium Cars and Automotive Insights" 
        description="Explore very expensive cars, top 20 luxury cars, top expensive car brands, luxury SUVs, Toyota and Volvo and expert automotive insights at CarQube."
      >
        <script type="application/ld+json">
          {JSON.stringify(featuredCars.map(car => ({
            "@context": "https://schema.org/", 
            "@type": "Product", 
            "name": car.name,
            "image": car.image,
            "description": `The ${car.name} is a high-performance vehicle designed for speed, precision, and driving excitement. It features ${car.specs.join(', ')}.`,
            "brand": {
              "@type": "Brand",
              "name": "CarQube"
            },
            "sku": "",
            "offers": {
              "@type": "Offer",
              "url": "https://carnew-eight.vercel.app/",
              "priceCurrency": "INR",
              "price": "5000000",
              "priceValidUntil": "2026-06-26",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            }
          })))}
        </script>
      </SEO>
      {/* Hero Section */}
     <Hero />
     <section className="relative -mt-20 z-20">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-2 lg:grid-cols-4 rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden">

      <div className="text-center py-10">
        <h3 className="text-4xl font-black text-red-600">
          500+
        </h3>

        <p className="mt-2 text-slate-600 font-medium">
          Premium Cars
        </p>
      </div>

      <div className="text-center py-10 border-l border-slate-200">
        <h3 className="text-4xl font-black text-red-600">
          10K+
        </h3>

        <p className="mt-2 text-slate-600 font-medium">
          Happy Customers
        </p>
      </div>

      <div className="text-center py-10 border-l border-slate-200">
        <h3 className="text-4xl font-black text-red-600">
          15+
        </h3>

        <p className="mt-2 text-slate-600 font-medium">
          Luxury Brands
        </p>
      </div>

      <div className="text-center py-10 border-l border-slate-200">
        <h3 className="text-4xl font-black text-red-600">
          24/7
        </h3>

        <p className="mt-2 text-slate-600 font-medium">
          Customer Support
        </p>
      </div>

    </div>

  </div>
</section>

      {/* Featured Cars Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="flex justify-between items-end mb-14">

      <div>
        <p className="text-red-600 font-semibold uppercase tracking-[4px] mb-3">
          Premium Collection
        </p>

        <h2 className="text-5xl font-black text-slate-900">
          Featured Cars
        </h2>

        <p className="text-slate-600 mt-3 text-lg">
          Discover the world's most exclusive luxury and performance vehicles.
        </p>
      </div>

      <Link
        to="/products"
        className="hidden md:flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition"
      >
        View Inventory
        <ChevronRight size={18} />
      </Link>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {featuredCars.map((car, i) => (

        <motion.div
          key={car.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group"
        >

          <div className="relative overflow-hidden h-72">

            <img
              src={car.image}
              alt={car.name}
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute top-5 left-5 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
              New
            </div>

            <div className="absolute top-5 right-5 bg-white rounded-full px-4 py-2 font-bold shadow-lg">
              {car.price}
            </div>

          </div>

          <div className="p-7">

            <h3 className="text-2xl font-bold text-slate-900">
              {car.name}
            </h3>

            <div className="grid grid-cols-3 gap-4 mt-6">

              <div className="bg-slate-100 rounded-xl py-4 flex flex-col items-center">

                <Gauge className="text-red-600 mb-2" />

                <span className="text-xs text-slate-500">
                  Power
                </span>

                <span className="font-bold">
                  700 HP
                </span>

              </div>

              <div className="bg-slate-100 rounded-xl py-4 flex flex-col items-center">

                <Fuel className="text-red-600 mb-2" />

                <span className="text-xs text-slate-500">
                  Fuel
                </span>

                <span className="font-bold">
                  Hybrid
                </span>

              </div>

              <div className="bg-slate-100 rounded-xl py-4 flex flex-col items-center">

                <Settings className="text-red-600 mb-2" />

                <span className="text-xs text-slate-500">
                  Gearbox
                </span>

                <span className="font-bold">
                  Auto
                </span>

              </div>

            </div>

            <div className="flex justify-between mt-7 text-slate-500">

              <button className="flex items-center gap-2 hover:text-red-600 transition">

                <Heart size={20} />

                Wishlist

              </button>

              <button className="flex items-center gap-2 hover:text-red-600 transition">

                <GitCompare size={20} />

                Compare

              </button>

            </div>

            <Link
              to="/contact"
              className="block mt-8 w-full text-center py-4 rounded-2xl bg-slate-900 text-white font-semibold hover:bg-red-600 transition"
            >
              View Details
            </Link>

          </div>

        </motion.div>

      ))}

    </div>

  </div>
</section>

      {/* Latest News Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-4 mb-12 text-center sm:text-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-2">Most Luxurious SUV in the World</h2>
              <p className="text-slate-600">News, guides, and reviews from our experts.</p>
            </div>
            <Link to="/blog" className="flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 bg-red-100 px-4 py-2 rounded-full transition-colors">
              Read All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post, i) => (
              <motion.a 
                href="/blog"
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all block focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                aria-label={`Read article: ${post.title}`}
              >
                <div className="relative h-48 overflow-hidden">
                 <img
  src={post.image}
  alt={`${post.title} - Luxury Car Blog`}
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
  referrerPolicy="no-referrer"
  loading="lazy"
  decoding="async"
/>
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-500 text-sm font-medium mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 line-clamp-2 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-red-50 rounded-full blur-3xl opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">Why Choose CarQube?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We provide more than just cars. We deliver an exceptional ownership experience from start to finish.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-transform hover:-translate-y-2">
              <div className="mx-auto w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 text-red-600 shadow-sm">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Trusted Quality</h3>
              <p className="text-slate-600 leading-relaxed">Every vehicle undergoes a rigorous 100+ point inspection to meet our premium standards.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-transform hover:-translate-y-2">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600 shadow-sm">
                <DollarSign className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fair Finance</h3>
              <p className="text-slate-600 leading-relaxed">Competitive rates and transparent financing options tailored securely to your needs.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-transform hover:-translate-y-2">
              <div className="mx-auto w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-orange-600 shadow-sm">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Instant Valuation</h3>
              <p className="text-slate-600 leading-relaxed">Get an accurate, market-driven instant quote for your trade-in vehicle.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
