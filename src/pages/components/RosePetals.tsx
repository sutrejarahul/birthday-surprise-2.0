"use client";
import React, { useState, useEffect } from "react";
import { motion, easeInOut } from "framer-motion";
import PetalSVG from "../svg/RoseSVG"; // Your petal SVG

const PETAL_COUNT = 15; // Smooth performance

const generatePetalPositions = () => {
  return Array.from({ length: PETAL_COUNT }, () => {
    const side = Math.random() > 0.5 ? 1 : -1; // Randomly left or right drift

    return {
      left: Math.random() * 100 + "vw", // Full width spread
      delay: Math.random() * 3 + 1, // Staggered falling start
      duration: Math.random() * 6 + 4, // Smooth varied speeds
      rotate: Math.random() * 360, // Initial random rotation
      drift: side * (Math.random() * 5 + 2) + "vw", // Some drift to left/right
    };
  });
};

const RosePetals: React.FC = () => {
  const [petalPositions, setPetalPositions] = useState<
    { left: string; delay: number; duration: number; rotate: number; drift: string }[]
  >([]);

  useEffect(() => {
    setPetalPositions(generatePetalPositions());
  }, []);

  return (
    <>
      {petalPositions.map((petal, index) => (
        <motion.div
          key={index}
          className="absolute w-8 h-8"
          style={{ left: petal.left, top: "-10vh", opacity: 0 }} // Initially hidden
          animate={{
            opacity: [0, 1], // Fade-in effect
            y: ["-10vh", "110vh"], // Fall from top to bottom
            x: ["0vw", petal.drift, petal.drift, petal.drift], // More balanced left-right drift
            rotate: [petal.rotate, petal.rotate + 180, petal.rotate + 360], // Smooth rotation
          }}
          transition={{
            opacity: { duration: 1, delay: petal.delay }, // Delayed fade-in
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: easeInOut, // ✅ Fix applied here
          }}
        >
          <PetalSVG />
        </motion.div>
      ))}
    </>
  );
};

export default RosePetals;
