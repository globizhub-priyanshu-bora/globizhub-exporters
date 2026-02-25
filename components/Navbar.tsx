"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Anchor, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4 text-slate-900"
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
          <Anchor className={isScrolled || isMobileMenuOpen ? "text-blue-600" : "text-blue-400"} size={24} />
          <span>GlobizHub Exporters</span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex items-center gap-8 font-medium text-sm">
          <Link href="/about" className="hover:text-blue-500 transition-colors">
            About Us
          </Link>

          {/* PRODUCTS DROPDOWN */}
          <div 
            className="relative group cursor-pointer"
            onMouseEnter={() => setIsProductDropdownOpen(true)}
            onMouseLeave={() => setIsProductDropdownOpen(false)}
          >
            <div className="flex items-center gap-1 hover:text-blue-500 transition-colors py-2">
              Products <ChevronDown size={16} className={`transition-transform duration-200 ${isProductDropdownOpen ? "rotate-180" : ""}`} />
            </div>
            
            {/* Dropdown Menu */}
            <div 
              className={`absolute top-full left-0 mt-2 w-64 bg-white border border-slate-100 shadow-xl rounded-xl overflow-hidden transition-all duration-200 origin-top-left ${
                isProductDropdownOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
              }`}
            >
              <div className="flex flex-col py-2">
                <Link href="/products/leather" className="px-5 py-3 text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">CitiFab Leather</Link>
                <Link href="/products/garments" className="px-5 py-3 text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">E&M Garments</Link>
                <Link href="/products/tea-coffee" className="px-5 py-3 text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">Premium Tea & Coffee</Link>
                <Link href="/products/industrial-tools" className="px-5 py-3 text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">Industrial Tools</Link>
              </div>
            </div>
          </div>

          <Link href="/services" className="hover:text-blue-500 transition-colors">
            Services
          </Link>
          <Link href="/quality" className="hover:text-blue-500 transition-colors">
            Quality & Compliance
          </Link>
          <Link href="/blog" className="hover:text-blue-500 transition-colors">
            Insights
          </Link>
          
          <Link
            href="/#contact"
            className={`px-6 py-2.5 rounded-md font-semibold transition-all shadow-sm ${
              isScrolled
                ? "bg-blue-600 text-white hover:bg-blue-700"
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
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-xl flex flex-col overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "max-h-[80vh] opacity-100 border-t border-slate-100 overflow-y-auto" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-8 gap-6">
          <Link href="/about" className="text-lg font-medium text-slate-900 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          
          {/* Mobile Products Section */}
          <div className="flex flex-col gap-3">
            <span className="text-lg font-medium text-slate-900">Products</span>
            <div className="flex flex-col pl-4 border-l-2 border-slate-100 gap-3">
              <Link href="/products/leather" className="text-slate-600 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>CitiFab Leather</Link>
              <Link href="/products/garments" className="text-slate-600 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>E&M Garments</Link>
              <Link href="/products/tea-coffee" className="text-slate-600 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>Premium Tea & Coffee</Link>
              <Link href="/products/industrial-tools" className="text-slate-600 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>Industrial Tools</Link>
            </div>
          </div>

          <Link href="/services" className="text-lg font-medium text-slate-900 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link href="/quality" className="text-lg font-medium text-slate-900 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>Quality & Compliance</Link>
          <Link href="/blog" className="text-lg font-medium text-slate-900 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>Insights</Link>
          
          <Link
            href="/#contact"
            className="bg-blue-600 text-white px-8 py-3 mt-4 rounded-md font-semibold text-base shadow-md w-full text-center hover:bg-blue-700 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}