import React, { useState, useEffect } from "react";
import Countdown from "./Countdown";
import { motion } from "framer-motion";
import ConfettiSVG from "../svg/ConfettiSVG";
import MagicSVG from "../svg/MagicSVG";
import GiftSVG from "../svg/GiftSVG";

const FIREFLY_COUNT = 35; // Increased from 20 to 35 for a richer effect

const generateFireflyPositions = () => {
  return Array.from({ length: FIREFLY_COUNT }, (_, i) => ({
    top: `${Math.random() * 100}vh`,
    left: `${(i % 3 === 0 ? Math.random() * 33 : i % 3 === 1 ? Math.random() * 33 + 33 : Math.random() * 34 + 66)}vw`,
  }));
};


const LandingPage: React.FC = () => {
  const [showCountdown, setShowCountdown] = useState(false);
  const [fireflyPositions, setFireflyPositions] = useState<{ top: string; left: string }[]>([]);
  const [isClient, setIsClient] = useState(false); // Prevent SSR hydration mismatch

  useEffect(() => {
    setFireflyPositions(generateFireflyPositions());
    setIsClient(true);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-br from-[#f6e1c3] to-[#e0a96d] text-[#8B4513] text-center overflow-hidden">
      {!showCountdown ? (
        <div className="max-w-6xl relative z-10">
          <h1 className="flex items-center text-3xl md:text-3xl font-extrabold leading-tight mb-4 drop-shadow-md gap-4 md:gap-6">
            <span className="inline-block transform scale-x-[-1]">
              <ConfettiSVG />
            </span>
            <span className="bg-gradient-to-r from-[#b7756e] via-[#e09f3e] to-[#b76e79] bg-clip-text text-transparent animate-text">
              Cherishing You, My Love - Tonight and Always!
            </span>
            <span>
              <ConfettiSVG />
            </span>
          </h1>
          <p className="text-lg md:text-2xl mb-6 px-2 md:px-8 flex items-center">
            Get ready for an unforgettable surprise. Click below to reveal the magic! <MagicSVG />
          </p>
          <button
            onClick={() => setShowCountdown(true)}
            className="bg-[#d4af37] text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-lg md:text-xl font-semibold hover:bg-[#b99332] transition-all duration-300 shadow-lg"
          >
            <span className="flex items-center">Reveal the Surprise! <GiftSVG /></span>
          </button>
        </div>
      ) : (
        <Countdown onComplete={() => console.log("Countdown Done!")} />
      )}

      {/* Fireflies Animation (Rendered Only on Client) */}
      {isClient &&
        fireflyPositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-75"
            style={{ top: pos.top, left: pos.left, filter: "blur(2px)" }}
            animate={{ y: [0, -20, 0], opacity: [0.7, 0.2, 0.7] }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: [0.42, 0, 0.58, 1],
            }}
          />
        ))}
    </div>
  );
};

export default LandingPage;
