import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { heroCars } from "../../data";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="h-full"
      >
        {heroCars.map((car) => (
          <SwiperSlide key={car.id}>
            <div className="relative h-screen">

              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${car.image})`,
                }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60" />

              {/* Content */}
              <div className="relative z-10 max-w-7xl mx-auto h-full px-6 lg:px-10 flex items-center">
                <motion.div
                  className="max-w-3xl text-white"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="inline-flex items-center rounded-full border border-red-500/40 bg-red-600/20 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-red-300 mb-6">
                    Premium Automotive Collection
                  </span>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                    {car.name}
                  </h1>

                  <p className="mt-5 text-3xl font-bold text-red-400">
                    {car.price}
                  </p>

                  <p className="mt-6 text-lg text-gray-200 max-w-2xl">
                    {car.description}
                  </p>

                  <div className="mt-10 flex flex-wrap gap-5">
                    <Link
                      to="/products"
                      className="inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-4 font-semibold text-white hover:bg-red-700 transition"
                    >
                      Explore Collection
                      <ArrowRight size={18} />
                    </Link>

                    <Link
                      to="/contact"
                      className="inline-flex items-center rounded-full border border-white/40 bg-white/10 px-8 py-4 font-semibold text-white hover:bg-white hover:text-black transition"
                    >
                      Book Test Drive
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Previous Button */}
      <button className="hero-prev absolute left-6 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/10 p-4 backdrop-blur-md text-white hover:bg-red-600 transition">
        <ChevronLeft size={28} />
      </button>

      {/* Next Button */}
      <button className="hero-next absolute right-6 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/10 p-4 backdrop-blur-md text-white hover:bg-red-600 transition">
        <ChevronRight size={28} />
      </button>
    </section>
  );
}