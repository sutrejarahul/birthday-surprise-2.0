import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const messages = [
  "In your eyes, I found my home. In your heart, I found my forever. ❤️🏡",
  "Loving you is like breathing—I can't stop, and I don't want to. 💕",
  "Even from miles away, every moment with you feels like a dream I never want to wake up from. ✨",
  "You are not just my love; you are my greatest adventure. 🌍",
  "With you, even a simple call turns into magic. ✨",
  "You are my today, my tomorrow, and every heartbeat in between. 💓",
  "No words can truly describe what you mean to me, but I promise to spend my life showing you. 💑",
  "You stole my heart, but I’ll let you keep it forever. 😉🔐",
  "You're my favorite reason to smile, every single day. 😊",
  "You and me, forever? That’s my favorite love story. 📖",
];

const HeartfeltWords: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isFinalMessage, setIsFinalMessage] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (charIndex < messages[messageIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + messages[messageIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 80); // Typing Speed
      return () => clearTimeout(timeout);
    } else if (messageIndex < messages.length - 1) {
      setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setMessageIndex((prev) => prev + 1);
      }, 4000); // Delay before next message
    } else {
      setIsFinalMessage(true);
      setTimeout(() => setShowButton(true), 3000); // Show button after final message
    }
  }, [charIndex, messageIndex]);

  return (
    <div className="flex flex-col items-center">
      <motion.p
        className={`text-3xl md:text-5xl font-serif italic tracking-wide text-[#8B4513] ${isFinalMessage ? "animate-bounce" : ""
          }`}
        style={{
          lineHeight: "1.2",
          textShadow:
            "0px 0px 12px rgba(255, 255, 255, 0.9), 0px 0px 22px rgba(255, 255, 255, 0.6), 0px 0px 35px rgba(255, 255, 255, 0.5)",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {displayedText}
      </motion.p>

      {showButton && (
        <motion.button
          onClick={onFinish}
          className="bg-[#d4af37] text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-lg md:text-xl font-semibold hover:bg-[#b99332] transition-all duration-300 shadow-lg fixed bottom-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <span className="flex items-center">Reveal My Feelings 💖</span>
        </motion.button>
      )}

    </div>
  );
};

export default HeartfeltWords;
