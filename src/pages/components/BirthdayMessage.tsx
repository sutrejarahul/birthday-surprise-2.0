import React from "react";
import { motion } from "framer-motion";
import CakeSVG from "../svg/CakeSVG";

const words = [
  "Happy",
  "Birthday",
  "My",
  "Love!",
  <CakeSVG key="cake" />,
  "Wishing",
  "you",
  "endless",
  "joy,",
  "laughter,",
  "and",
  "love!",
];

const BirthdayMessage: React.FC = () => {
  return (
    <motion.div
      className="mt-4 text-center text-lg md:text-2xl font-semibold leading-snug"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* Message Box (unchanged) */}
      <motion.div
        className="px-4 py-2 rounded-lg inline-block"
        style={{
          textShadow: "3px 3px 6px rgba(0, 0, 0, 0.3)", // Glow effect
          background: "linear-gradient(to right, #fbd786, #f7797d)", // Gold-to-pink gradient
          color: "#fef9e7", // 🔥 Off-white (matches the theme better)
          padding: "10px 20px",
          borderRadius: "10px",
          display: "inline-block",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Soft shadow
          minWidth: "280px",
          maxWidth: "85%",
          whiteSpace: "pre-line",
        }}
      >
        {/* Floating Words Animation */}
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="font-bold inline-block mx-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            style={{
              textShadow: "0 0 6px rgba(0, 0, 0, 0.4)", // 🔥 Darker shadow for better visibility
              fontSize: "1.2em",
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default BirthdayMessage;
