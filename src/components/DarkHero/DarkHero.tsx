import React from "react";
import { routes } from "@/data/navigationRoutes";
import Navbar from "@/layout/Navbar/Navbar";
import { GlobeIcon, Sparkles, MousePointer2 } from "lucide-react";

const DarkHero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black pt-8">
      {/* Container that limits the scope of backgrounds to just the hero section */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Enhanced animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#18181b] via-[#27272a] to-[#18181b] opacity-40" />

        {/* Animated dots overlay with improved animation */}
        <div className="motion-safe:animate-fade-in absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:32px_32px]" />

        {/* Animated gradient orb with responsive sizing */}
        <div className="absolute right-1/4 top-1/4 h-72 w-72 animate-pulse rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute bottom-1/4 left-1/4 h-72 w-72 animate-pulse rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl delay-700 sm:h-96 sm:w-96" />

        {/* Enhanced decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-1/2 h-24 w-px -translate-x-1/2 bg-gradient-to-b from-transparent to-white/10" />

        {/* Corner accents */}
        <div className="absolute right-0 top-0 h-32 w-32 rounded-tr-3xl border-r-2 border-t-2 border-white/5" />
        <div className="absolute bottom-0 left-0 h-32 w-32 rounded-bl-3xl border-b-2 border-l-2 border-white/5" />
      </div>

      <Navbar routes={routes} />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col justify-between px-2 py-12 sm:px-4 lg:px-8">
        {/* Main headline with enhanced typography */}
        <div className="relative mt-8 max-w-3xl sm:mt-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            <span className="block bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Crafting digital experiences
            </span>
            <span className="mt-2 block bg-gradient-to-r from-white/90 to-white/60 bg-clip-text text-transparent">
              that inspire and captivate.
            </span>
          </h2>

          {/* Enhanced subtitle with hover effects */}
          <div className="mt-4 space-y-2">
            <div className="group flex cursor-default items-center text-white/80 transition-colors hover:text-white">
              <Sparkles className="mr-2 h-4 w-4 group-hover:animate-spin" />
              <span className="text-sm font-medium italic">
                AKA Cool Websites & Apps
              </span>
            </div>
            <div className="group flex cursor-default items-center text-white/60 transition-colors hover:text-white">
              <GlobeIcon className="mr-2 h-4 w-4 transition-transform duration-1000 group-hover:rotate-180" />
              <span className="text-xs font-light uppercase tracking-wider">
                LOCATED IN{" "}
                <span className="font-bold italic text-white">INDIA</span>
              </span>
            </div>
          </div>

          {/* Interactive scroll indicator */}
          <div className="absolute bottom-[-100px] left-1/2 flex -translate-x-1/2 transform animate-bounce flex-col items-center text-white/40">
            <MousePointer2 className="h-4 w-4" />
            <span className="mt-2 text-xs">Scroll</span>
          </div>
        </div>

        {/* Enhanced Designer & Developer section */}
        <div className="relative w-full mb-36">
          <div className="flex flex-col items-end space-y-2">
            <div className="cursor-default text-xs font-light uppercase tracking-widest text-white/60 transition-colors hover:text-white/80 sm:text-sm">
              DESIGNER & DEVELOPER
            </div>
            <h1 className="relative text-right leading-[0.85] text-white">
              <span className="relative block text-[clamp(3.5rem,12vw,8rem)] font-bold tracking-tighter transition-all duration-300 hover:text-white/90 md:text-[clamp(3rem,10vw,6rem)]">
                ABHAYY
              </span>
              <span className="block text-[clamp(3.5rem,12vw,8rem)] font-bold tracking-tighter transition-all duration-300 hover:text-white/90 md:text-[clamp(3rem,10vw,6rem)]">
                CHAUHANN
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkHero;
