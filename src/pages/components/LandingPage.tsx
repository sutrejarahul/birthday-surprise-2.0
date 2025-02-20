import React, { useState } from "react";
import Countdown from "./Countdown";

const LandingPage: React.FC = () => {
  const [showCountdown, setShowCountdown] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-br from-[#f6e1c3] to-[#e0a96d] text-[#8B4513] text-center">
      {!showCountdown ? (
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-md">
            🎉 A Royal Celebration Awaits! 🎉
          </h1>
          <p className="text-lg md:text-2xl mb-6 px-2 md:px-8">
            Get ready for an unforgettable surprise. Click below to reveal the magic! ✨
          </p>
          <button
            onClick={() => setShowCountdown(true)}
            className="bg-[#d4af37] text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-lg md:text-xl font-semibold hover:bg-[#b99332] transition-all duration-300 shadow-lg"
          >
            Reveal the Surprise! 🎁
          </button>
        </div>
      ) : (
        <Countdown onComplete={() => console.log("Countdown Done!")} />
      )}
    </div>
  );
};

export default LandingPage;
