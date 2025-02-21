import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BirthdayReveal from "./BirthdayReveal"; // 🎉 Import Reveal Component

const Countdown: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [count, setCount] = useState(5);
  const [showReveal, setShowReveal] = useState(false); // 🎂 State for Cake Reveal

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setShowReveal(true); // 🎂 Show Cake & Wish
        onComplete();
      }, 100);
    }
  }, [count, onComplete]);

  if (showReveal) return <BirthdayReveal />; // 🎉 Show Cake & Wish After Countdown

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-br from-[#f6e1c3] to-[#e0a96d]">
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
