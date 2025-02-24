"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import RosePetals from "./components/RosePetals";

const FIREFLY_COUNT = 20;

const generateFireflyPositions = () => {
  return Array.from({ length: FIREFLY_COUNT }, () => ({
    top: Math.random() * 100 + "vh",
    left: Math.random() * 100 + "vw",
  }));
};

const RomanticMessage: React.FC = () => {
  const [fireflyPositions, setFireflyPositions] = useState<{ top: string; left: string }[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setFireflyPositions(generateFireflyPositions());
    setIsClient(true);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-br from-[#f6e1c3] to-[#e0a96d] text-[#8B4513] text-center overflow-hidden">
      <RosePetals />
      <div className="max-w-5xl relative z-10">
        <button
          onClick={() => window.history.back()}
          className="mt-6 bg-[#d4af37] text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-lg md:text-xl font-semibold hover:bg-[#b99332] transition-all duration-300 shadow-lg"
        >
          Back to Surprise 🎁
        </button>
      </div>

      {/* Fireflies Animation */}
      {isClient &&
        fireflyPositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-75"
            style={{ top: pos.top, left: pos.left, filter: "blur(2px)" }}
            animate={{ y: [0, -20, 0], opacity: [0.7, 0.2, 0.7] }}
            transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, ease: [0.42, 0, 0.58, 1] }}
          />
        ))}
    </div>
  );
};

export default RomanticMessage;
