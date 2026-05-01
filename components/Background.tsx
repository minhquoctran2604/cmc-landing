import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PixelCat, PixelHeart, PixelNote, PixelStar } from './PixelIcons';
import { FloatingItem } from '../types';

const Background: React.FC = () => {
  const [items, setItems] = useState<FloatingItem[]>([]);

  useEffect(() => {
    // Generate random floating items
    const newItems: FloatingItem[] = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      scale: 0.5 + Math.random() * 0.8,
      type: ['heart', 'star', 'cat', 'note'][Math.floor(Math.random() * 4)] as any,
      duration: 3 + Math.random() * 5,
      delay: Math.random() * 2,
    }));
    setItems(newItems);
  }, []);

  const renderIcon = (type: string, className: string) => {
    switch (type) {
      case 'heart': return <PixelHeart className={className} color="rgba(255, 255, 255, 0.6)" />;
      case 'cat': return <PixelCat className={className} color="rgba(255, 255, 255, 0.8)" />;
      case 'note': return <PixelNote className={className} color="rgba(255, 255, 255, 0.5)" />;
      default: return <PixelStar className={className} color="rgba(255, 255, 255, 0.7)" />;
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
      {/* Base Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-yellow-200 via-emerald-200 to-cyan-300 animate-pulse-slow"></div>

      {/* Checkerboard Overlay (Subtle) */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #ccc 25%, transparent 25%), 
            linear-gradient(-45deg, #ccc 25%, transparent 25%), 
            linear-gradient(45deg, transparent 75%, #ccc 75%), 
            linear-gradient(-45deg, transparent 75%, #ccc 75%)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
        }}
      ></div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.1)_100%)]"></div>

      {/* Floating Elements */}
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="absolute"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 0.8, 0.4],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut"
          }}
        >
          {renderIcon(item.type, `w-8 h-8 md:w-12 md:h-12`)}
        </motion.div>
      ))}
    </div>
  );
};

export default Background;