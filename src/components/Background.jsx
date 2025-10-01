import BackgroundCode from './BackgroundCode';

const Background = () => {
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

      {/* Overlay text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
        <h1 className="font-serif text-5xl md:text-7xl font-extrabold tracking-tight mb-5">
          The Queen hides in the shadows
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mb-8 text-white/90">
          Pick your secret queen, bluff your opponent, and master the art of deception in this thrilling twist on classic chess. Can you checkmate without revealing your true power?
        </p>
        <div className="flex flex-row items-center gap-6">
          <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-10 py-3 bg-[#0070f3] rounded-lg text-white font-medium transition-transform duration-200 ease-out hover:scale-105 active:scale-95">
              Play Now
          </button>
          <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-white/15 border border-white/20 px-10 py-3 bg-white/10 rounded-lg text-white font-medium transition-transform duration-200 ease-out hover:scale-105 active:scale-95">
              Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Background;
