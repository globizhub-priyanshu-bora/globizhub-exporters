"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the globe to prevent Next.js Server-Side Rendering errors
const GlobeGL = dynamic(() => import("react-globe.gl"), { ssr: false });

export default function Globe() {
  const globeEl = useRef<any>();
  const [dimensions, setDimensions] = useState({ width: 600, height: 600 });

  // Make the globe responsive
  useEffect(() => {
    function handleResize() {
      // Adjust size based on window width to keep it responsive
      const width = window.innerWidth < 1024 ? window.innerWidth - 48 : 600;
      setDimensions({ width, height: width });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Auto-rotate the globe slowly
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 1.2;
      globeEl.current.controls().enableZoom = false; // Disable zoom to keep UI clean
    }
  }, []);

  // Define our Export Routes
  // Originating from your hub (Guwahati, India) to global markets
  const HUB = { lat: 26.1445, lng: 91.7362 }; 

  const routes = [
    { startLat: HUB.lat, startLng: HUB.lng, endLat: 40.7128, endLng: -74.0060 }, // New York
    { startLat: HUB.lat, startLng: HUB.lng, endLat: 51.5074, endLng: -0.1278 },  // London
    { startLat: HUB.lat, startLng: HUB.lng, endLat: 25.2048, endLng: 55.2708 },  // Dubai
    { startLat: HUB.lat, startLng: HUB.lng, endLat: 35.6895, endLng: 139.6917 }, // Tokyo
    { startLat: HUB.lat, startLng: HUB.lng, endLat: -33.8688, endLng: 151.2093 },// Sydney
    { startLat: HUB.lat, startLng: HUB.lng, endLat: -23.5505, endLng: -46.6333 },// Sao Paulo
  ];

  return (
    <div className="flex items-center justify-center w-full aspect-square cursor-grab active:cursor-grabbing">
      <GlobeGL
        ref={globeEl}
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="rgba(0,0,0,0)" // Transparent background
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg" // High-res dark earth
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png" // 3D terrain bumps
        
        // --- ARC (FLIGHT PATH) CONFIGURATION ---
        arcsData={routes}
        arcStartLat={(d: any) => d.startLat}
        arcStartLng={(d: any) => d.startLng}
        arcEndLat={(d: any) => d.endLat}
        arcEndLng={(d: any) => d.endLng}
        arcColor={() => "#3b82f6"} // Globizhub Blue
        arcDashLength={0.4} // Length of the "airplane" line
        arcDashGap={0.2}
        arcDashInitialGap={() => Math.random()}
        arcDashAnimateTime={2000} // Speed of the flight (lower is faster)
        arcAltitudeAutoScale={0.3} // How high the curve goes
        
        // --- RINGS (PULSING HUBS) CONFIGURATION ---
        ringsData={[HUB]} // Put a pulsing ring on the main hub
        ringLat={(d: any) => d.lat}
        ringLng={(d: any) => d.lng}
        ringColor={() => "#06b6d4"} // Cyan glow
        ringMaxRadius={5}
        ringPropagationSpeed={2}
        ringRepeatPeriod={1000}
      />
    </div>
  );
}