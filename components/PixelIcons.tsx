import React from 'react';

export const PixelHeart = ({ className = "w-6 h-6", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 14 12" className={className} fill={color} xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
    <path d="M2 2h2v2H2zM4 0h2v2H4zM6 2h2v2H6zM8 0h2v2H8zM10 2h2v2H10zM12 4h2v2H12zM10 6h2v2H10zM8 8h2v2H8zM6 10h2v2H6zM4 8h2v2H4zM2 6h2v2H2zM0 4h2v2H0z" />
  </svg>
);

export const PixelCat = ({ className = "w-10 h-10", color = "#FFF" }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 16 14" className={className} fill={color} xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
    {/* Ears */}
    <rect x="1" y="0" width="2" height="2" fill={color} />
    <rect x="13" y="0" width="2" height="2" fill={color} />
    {/* Head Main */}
    <rect x="0" y="2" width="16" height="9" fill={color} />
    <rect x="2" y="11" width="12" height="2" fill={color} />
    
    {/* Eyes (Dark) */}
    <rect x="3" y="5" width="2" height="2" fill="#4a4a4a" opacity="0.6" />
    <rect x="11" y="5" width="2" height="2" fill="#4a4a4a" opacity="0.6" />
    
    {/* Cheeks (Pink) */}
    <rect x="2" y="7" width="2" height="1" fill="#FF99CC" opacity="0.6" />
    <rect x="12" y="7" width="2" height="1" fill="#FF99CC" opacity="0.6" />
    
    {/* Mouth */}
    <rect x="7" y="7" width="2" height="1" fill="#4a4a4a" opacity="0.6" />
  </svg>
);

export const PixelStar = ({ className = "w-4 h-4", color = "#FFF" }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 8 8" className={className} fill={color} xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
    <rect x="3" y="0" width="2" height="8" />
    <rect x="0" y="3" width="8" height="2" />
    <rect x="2" y="2" width="4" height="4" opacity="0.5" />
  </svg>
);

export const PixelNote = ({ className = "w-4 h-4", color = "#FFF" }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 10 10" className={className} fill={color} xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
    <rect x="4" y="0" width="2" height="8" />
    <rect x="4" y="0" width="4" height="2" />
    <rect x="8" y="0" width="2" height="2" />
    <rect x="2" y="6" width="4" height="4" />
  </svg>
);