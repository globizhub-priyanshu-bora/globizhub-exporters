import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { ShieldCheck, Globe2, Package, TrendingUp, ChevronRight, Anchor } from "lucide-react";

// --- SEO & GEO CONFIGURATION ---
export const metadata: Metadata = {
  title: "GlobizHub Exporters | Premium Global Trade & Manufacturing",
  description: "Connecting local quality with global opportunity. Premier exporters of CitiFab Leather, E&M Garments, Premium Tea & Coffee, and Industrial Tools.",
};

const products = [
  { name: "CitiFab Leather", desc: "Premium crafted leather goods.", count: "50+ Products", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop" },
  { name: "E&M Garments", desc: "High-quality apparel manufacturing.", count: "10+ Lines", img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhzfGVufDB8fDB8fHww" },
  { name: "Premium Tea & Coffee", desc: "Sourced from reputable plantations.", count: "Bulk Exports", img: "https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8fHww" },
  { name: "Industrial Tools", desc: "Durable tools for heavy industry.", count: "20+ Categories", img: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=800&auto=format&fit=crop" },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* CORPORATE HERO SECTION - Updated for perfect mobile responsiveness */}
      <section className="relative w-full min-h-[85svh] lg:min-h-[85vh] py-32 flex items-center overflow-hidden">
        
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          {/* Ensure you download the video and place it in your public folder as bg.mp4 */}
          <source src="/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-slate-900/60" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 mt-12 md:mt-0">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Connecting Local Quality to Global Markets.
            </h1>
            <p className="text-lg lg:text-xl text-slate-200 mb-10 leading-relaxed">
              We streamline international trade with uncompromising quality. From premium leather manufacturing to global logistics, we ensure seamless supply chain solutions worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-700 transition-colors text-center shadow-lg">
                Request a Quote
              </a>
              <a href="#portfolio" className="bg-transparent border border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-slate-900 transition-colors text-center backdrop-blur-sm">
                View Export Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS / TRUST BAR */}
      <section className="bg-blue-600 py-8 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x md:divide-y-0 divide-y divide-blue-500/50">
          <div className="text-center px-4 pt-4 md:pt-0">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">50+</h3>
            <p className="text-blue-200 text-xs md:text-sm font-medium uppercase tracking-wider">Leather Products</p>
          </div>
          <div className="text-center px-4 pt-4 md:pt-0">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">100%</h3>
            <p className="text-blue-200 text-xs md:text-sm font-medium uppercase tracking-wider">Quality Assured</p>
          </div>
          <div className="text-center px-4 pt-8 md:pt-0">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</h3>
            <p className="text-blue-200 text-xs md:text-sm font-medium uppercase tracking-wider">Logistics Support</p>
          </div>
          <div className="text-center px-4 pt-8 md:pt-0">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Global</h3>
            <p className="text-blue-200 text-xs md:text-sm font-medium uppercase tracking-wider">Shipping Network</p>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES (VALUE PROPOSITION) */}
      <section className="py-20 md:py-24 px-6 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16 max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Why Partner With Us?</h2>
            <p className="text-slate-600 text-base md:text-lg">We bring years of experience in international trade, streamlining your exporting services to provide a seamless buying experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: ShieldCheck, title: "Uncompromising Quality", desc: "Rigorous quality control for all manufactured goods and raw material sourcing." },
              { icon: Package, title: "Versatile Customization", desc: "Tailored manufacturing solutions to meet your specific regional market demands." },
              { icon: TrendingUp, title: "Competitive Pricing", desc: "Optimized supply chain operations allowing for highly competitive bulk pricing." },
              { icon: Globe2, title: "Seamless Logistics", desc: "End-to-end freight forwarding and customs clearance for timely global deliveries." },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPORT PORTFOLIO */}
      <section id="portfolio" className="py-20 md:py-24 px-6 lg:px-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Export Divisions</h2>
              <p className="text-slate-600 text-base md:text-lg">A diverse portfolio of high-grade commodities and manufactured goods.</p>
            </div>
            <a href="#contact" className="text-blue-600 font-semibold flex items-center gap-1 hover:text-blue-700 transition-colors mt-6 md:mt-0">
              Request Full Catalog <ChevronRight size={20} />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {products.map((prod, i) => (
              <div key={i} className="group flex flex-col sm:flex-row bg-slate-50 rounded-xl overflow-hidden border border-slate-100 hover:border-blue-200 transition-colors">
                <div className="w-full sm:w-2/5 h-48 sm:h-auto overflow-hidden">
                  <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 md:p-8 sm:w-3/5 flex flex-col justify-center">
                  <span className="text-blue-600 font-semibold text-xs md:text-sm mb-2 uppercase tracking-wide">{prod.count}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{prod.name}</h3>
                  <p className="text-slate-600 text-sm md:text-base mb-6">{prod.desc}</p>
                  <a href="#contact" className="text-slate-900 font-semibold flex items-center gap-1 hover:text-blue-600 transition-colors w-fit text-sm md:text-base">
                    Inquire Now <ChevronRight size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B CONTACT SECTION */}
      <section id="contact" className="py-20 md:py-24 px-6 lg:px-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Initiate Trade Inquiry</h2>
            <p className="text-slate-400 text-base md:text-lg mb-8 max-w-md">
              Contact our corporate sales team to discuss bulk pricing, request free samples, or outline your specific import requirements.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                  <ShieldCheck className="text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Verified Supplier</h4>
                  <p className="text-slate-400 text-sm">Strict adherence to international trade standards.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                  <Globe2 className="text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Global Reach</h4>
                  <p className="text-slate-400 text-sm">Current exports to North America, Europe, and Asia-Pacific.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-6 md:p-8 rounded-xl border border-slate-700">
            <h3 className="text-xl md:text-2xl font-bold mb-6">Request Samples & Pricing</h3>
            <ContactForm />
          </div>
        </div>
      </section>

    </main>
  );
}