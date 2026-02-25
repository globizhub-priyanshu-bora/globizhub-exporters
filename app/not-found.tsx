import Link from "next/link";
import { Ship, Anchor, ArrowRight, Home, MapPinOff } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipment Not Found | GlobizHub Exporters",
  description: "The requested page could not be found on our servers.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-900 flex flex-col items-center justify-center px-6 py-24 font-sans text-white text-center relative overflow-hidden">
      
      {/* BACKGROUND RADAR ANIMATION */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] border border-blue-500 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
        <div className="absolute w-[450px] h-[450px] sm:w-[750px] sm:h-[750px] border border-blue-600 rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite_1s]" />
        <div className="absolute w-px h-full bg-blue-900/50" />
        <div className="absolute h-px w-full bg-blue-900/50" />
      </div>
      
      <div className="relative z-10 max-w-2xl flex flex-col items-center">
        
        {/* INTERACTIVE ICON: Floating Ship with a missing pin */}
        <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
          <Ship 
            size={64} 
            className="text-blue-400 relative z-10 -translate-y-2 animate-[bounce_3s_ease-in-out_infinite]" 
            strokeWidth={1.5} 
          />
          <MapPinOff 
            size={28} 
            className="text-red-400 absolute top-2 right-4 z-20" 
            strokeWidth={2} 
          />
        </div>
        
        {/* EXPORT-THEMED MESSAGING */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium mb-6 uppercase tracking-widest">
          <Anchor size={14} className="text-blue-400" />
          Error 404
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
          Shipment Off Course
        </h1>
        <p className="text-lg text-slate-400 mb-10 max-w-lg mx-auto leading-relaxed">
          We've checked the manifest, but the page you are tracking seems to have dropped off the radar. Let's get your supply chain back on route.
        </p>
        
        {/* RECOVERY ACTIONS */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Link 
            href="/" 
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] w-full sm:w-auto relative group overflow-hidden"
          >
            <Home size={18} className="relative z-10" />
            <span className="relative z-10">Reroute to Homepage</span>
          </Link>
          
          <Link 
            href="/#portfolio" 
            className="flex items-center justify-center gap-2 bg-slate-800 border border-slate-700 text-white px-8 py-4 rounded-md font-semibold hover:bg-slate-700 transition-colors w-full sm:w-auto"
          >
            View Export Portfolio <ArrowRight size={18} />
          </Link>
        </div>

      </div>
      
    </main>
  );
}