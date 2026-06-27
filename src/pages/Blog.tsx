import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { blogPosts } from "../data";

export function Blog() {
  return (
    <>
      <SEO 
        title="Journal" 
        description="The latest automotive news, ownership guides, and exclusive reviews from our team of experts."
      />
      <div className="relative h-[300px] mb-12">
        <div className="absolute inset-0 bg-slate-900 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0be2?q=80&w=3538&auto=format&fit=crop" 
            alt="Blog Banner" 
            className="w-full h-full object-cover opacity-50 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight"
          >
            CarQube Journal
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl"
          >
            The latest automotive news, ownership guides, and exclusive reviews from our team of experts.
          </motion.p>
        </div>
      </div>

      <div className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((post, i) => (
          <motion.a 
            href="#"
            key={post.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col group cursor-pointer block focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 rounded-2xl"
            aria-label={`Read article: ${post.title}`}
          >
            <div className="relative h-60 rounded-2xl overflow-hidden mb-6">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {post.category}
              </div>
            </div>
            <p className="text-slate-500 text-sm font-medium mb-3">{post.date}</p>
            <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
              {post.title}
            </h2>
            <p className="text-slate-600 line-clamp-3 leading-relaxed">
              {post.excerpt}
            </p>
          </motion.a>
        ))}
      </div>
      </div>
    </>
  );
}
