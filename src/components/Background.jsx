import { memo } from 'react';
import BackgroundCode from './BackgroundCode';

const Background = memo(() => {
  return (
    <div className="relative w-full h-screen" id="home">
      {/* Background animation */}
      <BackgroundCode
        animationType="rotate"
        timeScale={0.5}
        height={3.5}
        baseWidth={5.5}
        scale={3.6}
        hueShift={0}
        colorFrequency={1}
        noise={0.5}
        glow={1}
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 z-10">
        {/* Heading */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-4 sm:mb-5 leading-tight">
          The Queen hides in the shadows
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-xs sm:max-w-2xl lg:max-w-3xl mb-6 sm:mb-8 text-white/90 leading-relaxed">
          Pick your secret queen, bluff your opponent, and master the art of deception in this thrilling twist on classic chess. Can you checkmate without revealing your true power?
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {/* Primary CTA */}
          <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-6 sm:px-10 py-3 sm:py-3 bg-[#0070f3] rounded-lg text-white font-semibold text-lg transition-transform duration-200 ease-out hover:scale-105 active:scale-95 min-h-[44px] flex items-center justify-center">
            Play Now
          </button>

          {/* Secondary CTA */}
          <button className="shadow-[0_4px_14px_0_rgb(255,255,255,25%)] hover:shadow-[0_6px_20px_rgba(255,255,255,15%)] hover:bg-white/15 border border-white/20 px-6 sm:px-10 py-3 sm:py-3 bg-white/10 rounded-lg text-white font-medium transition-transform duration-200 ease-out hover:scale-105 active:scale-95 min-h-[44px] flex items-center justify-center">
            Login
          </button>
        </div>
      </div>
    </div>
  );
});

export default Background;
