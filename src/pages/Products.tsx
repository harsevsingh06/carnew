import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { Link, useSearchParams } from "react-router-dom";
import { SEO } from "../components/SEO";
import { featuredCars } from "../data";

export function Products() {
  const [activeFilter, setActiveFilter] = useState("All Vehicles");
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const filteredCars = useMemo(() => {
    let cars = featuredCars;

    if (activeFilter !== "All Vehicles") {
      cars = cars.filter(car => car.category === activeFilter);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      cars = cars.filter(car => 
        car.name.toLowerCase().includes(query) || 
        car.specs.some(spec => spec.toLowerCase().includes(query)) ||
        car.category.toLowerCase().includes(query)
      );
    }

    return cars;
  }, [activeFilter, searchQuery]);

  return (
    <>
      <SEO 
        title="Our Inventory" 
        description="Browse our entire collection of premium high-performance and luxury vehicles."
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
              "url": "https://carqubeb.netlify.app/",
              "priceCurrency": "INR",
              "price": "5000000",
              "priceValidUntil": "2026-06-26",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            }
          })))}
        </script>
      </SEO>
      <div className="relative h-[300px] mb-8">
        <div className="absolute inset-0 bg-slate-900 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=3538&auto=format&fit=crop" 
            alt="Inventory Banner" 
            className="w-full h-full object-cover opacity-50 mix-blend-overlay"
            referrerPolicy="no-referrer"
            fetchPriority="high"
          />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight"
          >
            Our Inventory
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl"
          >
            Browse our entire collection of premium high-performance and luxury vehicles.
          </motion.p>
        </div>
      </div>

      <div className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
        {["All Vehicles", "Sports Cars", "Luxury Sedans", "SUVs", "Supercars"].map((filter) => (
          <button 
            key={filter} 
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-full whitespace-nowrap font-medium transition-colors ${filter === activeFilter ? "bg-slate-900 text-white" : "bg-white border border-slate-200 text-slate-700 hover:border-slate-300"}`}
            aria-pressed={filter === activeFilter}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCars.map((car, i) => (
          <motion.div 
            key={car.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group hover:-translate-y-1"
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={car.image} 
                alt={car.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold text-slate-900 shadow-sm">
                {car.price}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">{car.name}</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {car.specs.map(spec => (
                  <span key={spec} className="bg-slate-50 border border-slate-200 text-slate-600 text-xs px-3 py-1.5 rounded-md font-semibold">
                    {spec}
                  </span>
                ))}
              </div>
              <Link to="/contact" aria-label={`View details for ${car.name}`} className="block text-center w-full py-3.5 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors">
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </>
  );
}
