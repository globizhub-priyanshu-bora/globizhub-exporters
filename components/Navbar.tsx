"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Anchor, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  
  // Detect current route
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if navbar should be solid white
  // Always solid if NOT on homepage, OR if scrolled, OR if mobile menu is open
  const isSolid = !isHomePage || isScrolled || isMobileMenuOpen;

  return (
    <nav
      className={`${
        isHomePage ? "fixed" : "sticky"
      } top-0 w-full z-50 transition-all duration-300 ${
        isSolid
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 py-4 text-slate-900 shadow-sm"
          : "bg-transparent py-6 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* LOGO */}
        <Link 
          href="/" 
          className="flex items-center gap-2 font-bold text-xl tracking-tight z-50"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Anchor className={isSolid ? "text-[#283593]" : "text-blue-400"} size={24} />
          <span>GlobizHub</span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex items-center gap-8 font-medium text-sm">
          <Link href="/about" className="hover:text-blue-600 transition-colors">
            About Us
          </Link>

          {/* PRODUCTS DROPDOWN */}
          <div 
            className="relative group cursor-pointer"
            onMouseEnter={() => setIsProductDropdownOpen(true)}
            onMouseLeave={() => setIsProductDropdownOpen(false)}
          >
            <div className="flex items-center gap-1 hover:text-blue-600 transition-colors py-2">
              Products <ChevronDown size={16} className={`transition-transform duration-200 ${isProductDropdownOpen ? "rotate-180" : ""}`} />
            </div>
            
            <div className={`absolute top-full left-0 mt-2 w-64 bg-white border border-slate-100 shadow-xl rounded-xl overflow-hidden transition-all duration-200 origin-top-left ${isProductDropdownOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}>
              <div className="flex flex-col py-2">
                <Link href="/products/leather" className="px-5 py-3 text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">CitiFab Leather</Link>
                <Link href="/products/garments" className="px-5 py-3 text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">E&M Garments</Link>
                <Link href="/products/tea-coffee" className="px-5 py-3 text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">Premium Tea & Coffee</Link>
                <Link href="/products/industrial-tools" className="px-5 py-3 text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">Industrial Tools</Link>
              </div>
            </div>
          </div>

          <Link href="/services" className="hover:text-blue-600 transition-colors">
            Services
          </Link>
          <Link href="/quality" className="hover:text-blue-600 transition-colors">
            Quality & Compliance
          </Link>
          
          <Link
            href="/#contact"
            className={`px-6 py-2.5 rounded-md font-semibold transition-all shadow-sm ${
              isSolid
                ? "bg-[#283593] text-white hover:bg-[#1e2a78]"
                : "bg-white text-slate-900 hover:bg-slate-100"
            }`}
          >
            Get a Quote
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden z-50 p-2 -mr-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* MOBILE MENU (Removed for brevity, keep your existing mobile menu code here) */}
    </nav>
  );
}