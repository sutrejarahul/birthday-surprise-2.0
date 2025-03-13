"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import HeartfeltWords from "./components/HeartfeltWords";
import MusicPlayer from "./components/MusicPlayer";
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
  const [showPoem, setShowPoem] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setFireflyPositions(generateFireflyPositions());
    setIsClient(true);

    // 🎵 Autoplay Fix
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // 🔊 Adjust volume
      audioRef.current.play().catch(() => console.log("User interaction needed for autoplay."));

      // Stop background music when it ends
      audioRef.current.onended = () => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0; // Reset to start
        }
      };
    }
  }, []);

  // 🎶 Stop music when poem is revealed
  useEffect(() => {
    if (showPoem && audioRef.current) {
      audioRef.current.pause();
    }
  }, [showPoem]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-br from-[#f6e1c3] to-[#e0a96d] text-[#8B4513] text-center overflow-hidden">
      <RosePetals />

      {/* 🎶 Background Romantic Music */}
      <audio ref={audioRef} autoPlay>
        <source src="romantic.mp3" type="audio/mp3" />
      </audio>

      {/* 💖 Message Box */}
      <div className="max-w-5xl relative z-10">
        {!showPoem ? <HeartfeltWords onFinish={() => setShowPoem(true)} /> : <MusicPlayer />}
      </div>

      {/* ✨ Fireflies Animation */}
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
