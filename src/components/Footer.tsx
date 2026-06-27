import { Car, Camera, Star, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 text-slate-400 border-t-4 border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-red-600 p-2 rounded-lg">
                <Car className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">CarQube</span>
            </div>
            <p className="max-w-md text-slate-400 mb-8 leading-relaxed">
              Your premier destination for luxury and performance vehicles. We redefine the car-buying experience with transparency and excellence.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"><Camera className="w-5 h-5" aria-hidden="true" /></a>
              <a href="#" aria-label="Reviews" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"><Star className="w-5 h-5" aria-hidden="true" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4 font-medium">
              <li><Link to="/products" className="hover:text-red-500 transition-colors">Inventory</Link></li>
              <li><Link to="/about" className="hover:text-red-500 transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-red-500 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-red-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-sm sm:text-base">
              <li className="flex items-start gap-3 group">
                <div className="bg-slate-800 p-2 rounded-md group-hover:bg-red-600 transition-colors mt-0.5">
                  <MapPin className="w-4 h-4 text-white" aria-hidden="true" />
                </div>
                <span>1234 Luxury Lane,<br />Motor City, MC 90210</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="bg-slate-800 p-2 rounded-md group-hover:bg-red-600 transition-colors">
                  <Phone className="w-4 h-4 text-white" aria-hidden="true" />
                </div>
                <span>1-800-CARQUBE</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
          <p>© 2026 CarQube. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
