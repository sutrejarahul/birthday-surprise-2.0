import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import FloatingHearts from "./FloatingHearts";
import BirthdayMessage from "./BirthdayMessage";

const BirthdayReveal: React.FC = () => {
  const [playCheer, setPlayCheer] = useState(true);
  const [playSong, setPlaySong] = useState(false);
  const [playHearts, setPlayHearts] = useState(false); // Controls Floating Hearts
  const [showConfetti, setShowConfetti] = useState(true); // Controls Confetti
  const songRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Start birthday song after cheer sound (6s delay)
    const songTimeout = setTimeout(() => {
      setPlayCheer(false);
      setPlaySong(true);
      setShowConfetti(false); // Stop confetti after 6s
    }, 6000);

    return () => clearTimeout(songTimeout);
  }, []);

  useEffect(() => {
    if (playSong && songRef.current) {
      songRef.current.play();
      setPlayHearts(true); // Start floating hearts when song plays

      songRef.current.onended = () => {
        setPlayHearts(false); // Stop hearts when song ends
      };
    }
  }, [playSong]);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-br from-[#f6e1c3] to-[#e0a96d]">
      {/* Floating Hearts ❤️ (only when song is playing) */}
      <FloatingHearts playHearts={playHearts} />

      {/* Confetti 🎉 (Stops after 6s) */}
      {showConfetti && <Confetti numberOfPieces={600} recycle={false} gravity={0.2} colors={["#ff4d6d", "#ff85a1", "#ffe066", "#ffc107"]} />}

      {/* Cake Image with animation (Slightly Smaller) */}
      <motion.img
        src="/cake.png"
        alt="Birthday Cake"
        className="w-[80%] max-w-[300px] md:max-w-[400px] h-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Birthday Message */}
      <BirthdayMessage />

      {/* Cheer Sound (Plays First) */}
      {playCheer && (
        <audio autoPlay>
          <source src="/cheering.mp3" type="audio/mpeg" />
        </audio>
      )}

      {/* Birthday Song (Plays After Cheer Ends) */}
      {playSong && (
        <audio ref={songRef} autoPlay>
          <source src="/happy_birthday.mp3" type="audio/mpeg" />
        </audio>
      )}
    </div>
  );
};

export default BirthdayReveal;
