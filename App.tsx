import React from 'react';
import { motion } from 'framer-motion';
import { Disc, ExternalLink, Gamepad2, MessageCircle } from 'lucide-react';
import Background from './components/Background';
import Logo from './components/Logo';
import { PixelHeart } from './components/PixelIcons';

const App: React.FC = () => {
  const discordLink = "https://discord.gg/your-invite-code"; // Placeholder

  return (
    <div className="min-h-screen text-slate-800 font-pixel selection:bg-pink-300 selection:text-white flex flex-col">
      <Background />

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center justify-center p-4 relative">
        
        {/* Logo Section */}
        <div className="mb-12 md:mb-16 mt-10 md:mt-0">
          <Logo />
        </div>

        {/* Discord Call To Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="z-10"
        >
          <a 
            href={discordLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-xl text-xl md:text-2xl transition-all hover:-translate-y-1 hover:shadow-[0_10px_0_rgba(26,26,46,1)] border-b-8 border-[#1a1a2e] active:translate-y-1 active:border-b-0 active:shadow-none shadow-[0_5px_0_rgba(26,26,46,0.5)]"
          >
            <div className="absolute -top-3 -right-3 rotate-12 opacity-0 group-hover:opacity-100 transition-opacity">
              <PixelHeart className="w-8 h-8 text-pink-400 drop-shadow-md" />
            </div>
            
            <Gamepad2 className="w-8 h-8 md:w-10 md:h-10 animate-bounce" />
            <span>Join the Crew</span>
            <ExternalLink className="w-5 h-5 opacity-50 group-hover:opacity-100" />
          </a>
        </motion.div>

        {/* Info Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl w-full z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <InfoCard 
            icon={<MessageCircle className="w-6 h-6 text-cmc-purple" />}
            title="Chat & Chill"
            desc="A cozy place to hang out, share art, and talk about games."
          />
          <InfoCard 
            icon={<Gamepad2 className="w-6 h-6 text-cmc-blue" />}
            title="Gaming Events"
            desc="Weekly game nights, tournaments, and Minecraft server."
          />
           <InfoCard 
            icon={<Disc className="w-6 h-6 text-pink-400" />}
            title="Music & Vibes"
            desc="Share your playlists and listen to music together."
          />
        </motion.div>

      </main>

      {/* Footer */}
      <footer className="p-6 text-center z-10 font-retro text-xl text-slate-500/80">
        <p>© 2024 ChuongMyCrew. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <span className="hover:text-cmc-purple cursor-pointer transition-colors">Terms</span>
          <span>•</span>
          <span className="hover:text-cmc-purple cursor-pointer transition-colors">Privacy</span>
        </div>
      </footer>
    </div>
  );
};

const InfoCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="bg-white/40 backdrop-blur-sm border-2 border-white p-6 rounded-2xl shadow-sm hover:bg-white/60 transition-colors text-center">
    <div className="flex justify-center mb-3 bg-white w-12 h-12 mx-auto rounded-full items-center shadow-inner">
      {icon}
    </div>
    <h3 className="text-lg font-bold mb-2 text-slate-700">{title}</h3>
    <p className="font-retro text-xl text-slate-600 leading-tight">{desc}</p>
  </div>
);

export default App;