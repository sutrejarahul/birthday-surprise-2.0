import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

const Countdown: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [count, setCount] = useState(10);
  const [showConfetti, setShowConfetti] = useState(false);
  const [playSound, setPlaySound] = useState(false);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowConfetti(true);
      setPlaySound(true);
      setTimeout(() => {
        setShowConfetti(false);
        onComplete();
      }, 5000);
    }
  }, [count, onComplete]);

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-br from-[#f6e1c3] to-[#e0a96d]">
      {showConfetti && <Confetti numberOfPieces={600} recycle={false} gravity={0.2} />}
      {playSound && (
        <audio autoPlay>
          <source src="/cheering.mp3" type="audio/mpeg" />
        </audio>
      )}
      {count > 0 && (
        <motion.div
          key={count}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#8B4513] text-6xl md:text-9xl font-extrabold drop-shadow-md"
        >
          {count}
        </motion.div>
      )}
    </div>
  );
};

export default Countdown;
