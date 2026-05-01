import React from 'react';
import { motion } from 'framer-motion';
import { PixelHeart } from './PixelIcons';

const Logo: React.FC = () => {
  // Shared class for the running rainbow effect
  // We use a 200% width background so it loops smoothly
  const rainbowTextClass = `
    bg-clip-text text-transparent 
    bg-gradient-to-r from-[#ff99cc] via-[#ffff99] via-[#99ffcc] via-[#99ccff] to-[#ff99cc]
    bg-[length:200%_auto]
    animate-rainbow
    stroke-text
    drop-shadow-[0_4px_0_rgba(0,0,0,0.2)]
  `;

  return (
    <div className="relative flex flex-col items-center justify-center select-none z-10">
      
      {/* CMD Blocky Text */}
      <motion.div 
        className="relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.5 }}
      >
        <div className="relative font-pixel font-bold text-8xl md:text-9xl tracking-tighter leading-none">
          {/* Main CMD Layer with Gradient */}
          <div className="relative z-10 flex items-center justify-center gap-1">
            {/* Letter C */}
            <div className="relative group">
              <span className={rainbowTextClass}>
                C
              </span>
              <div className="absolute inset-0 border-4 border-[#1a1a2e] rounded-lg -z-10 bg-[#1a1a2e] translate-y-1 translate-x-1"></div>
              {/* Tech Lines Overlay */}
              <div className="absolute top-4 left-2 w-full h-full opacity-40 pointer-events-none">
                <div className="h-1 w-8 bg-white mb-2"></div>
                <div className="h-1 w-4 bg-white translate-x-4"></div>
              </div>
              <div className="absolute top-2 right-2"><PixelHeart className="w-4 h-4 text-white" /></div>
            </div>

            {/* Letter M - Slightly Higher */}
            <div className="relative -translate-y-4 group">
              <span className={rainbowTextClass}>
                M
              </span>
              <div className="absolute inset-0 border-4 border-[#1a1a2e] rounded-lg -z-10 bg-[#1a1a2e] translate-y-1 translate-x-1"></div>
              {/* Tech Lines */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-2 h-8 bg-pink-400 opacity-50"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><div className="w-2 h-2 bg-white rounded-full"></div></div>
            </div>

            {/* Letter D */}
            <div className="relative group">
              <span className={rainbowTextClass}>
                D
              </span>
              <div className="absolute inset-0 border-4 border-[#1a1a2e] rounded-lg -z-10 bg-[#1a1a2e] translate-y-1 translate-x-1"></div>
               {/* Tech Lines */}
               <div className="absolute top-6 right-4 w-6 h-1 bg-white opacity-40"></div>
               <div className="absolute bottom-4 right-2"><PixelHeart className="w-4 h-4 text-white" /></div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ChuongMyDistrict Text */}
      <motion.div 
        className="mt-2 md:mt-4 relative"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="
          font-pixel text-2xl md:text-4xl 
          text-white
          px-6 py-2
          bg-[#1a1a2e]
          border-4 border-[#2d2d44]
          rounded-lg
          shadow-[0_0_20px_rgba(160,231,229,0.5)]
        ">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-white to-pink-300 animate-pulse">
            ChuongMyDistrict
          </span>
        </div>
      </motion.div>

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 8px #1a1a2e;
          paint-order: stroke fill;
        }
        @media (max-width: 768px) {
          .stroke-text {
            -webkit-text-stroke: 4px #1a1a2e;
          }
        }
      `}</style>
    </div>
  );
};

export default Logo;