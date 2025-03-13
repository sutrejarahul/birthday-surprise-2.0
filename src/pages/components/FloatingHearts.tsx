import React, { useEffect, useState } from "react";
import HeartSVG from "../svg/HeartSVG";

interface FloatingHeartsProps {
  playHearts: boolean;
}

const FloatingHearts: React.FC<FloatingHeartsProps> = ({ playHearts }) => {
  const [hearts, setHearts] = useState<
    { id: number; left: string; animationDelay: string; size: string }[]
  >([]);

  useEffect(() => {
    if (!playHearts) {
      setHearts([]); // Clear hearts when stopped
      return;
    }

    const createHeart = () => {
      const id = Math.random();
      setHearts((prev) => [
        ...prev,
        {
          id,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
          size: `${Math.random() * 20 + 15}px`,
        },
      ]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((heart) => heart.id !== id));
      }, 7000);
    };

    const interval = setInterval(createHeart, 500);

    return () => clearInterval(interval);
  }, [playHearts]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map(({ id, left, animationDelay, size }) => (
        <div
          key={id}
          className="absolute text-red-500"
          style={{
            left,
            fontSize: size,
            opacity: 0,
            visibility: "hidden",
            animation: `floatUp 7s linear ${animationDelay} forwards, fadeIn 0.5s ease-in ${animationDelay} forwards`,
          }}
        >
          <HeartSVG />
        </div>
      ))}

      <style>
        {`
          @keyframes floatUp {
            0% {
              transform: translateY(100vh) scale(0.7);
              opacity: 1;
              visibility: visible;
            }
            100% {
              transform: translateY(-10vh) scale(1.4);
              opacity: 0;
            }
          }

          @keyframes fadeIn {
            0% { opacity: 0; visibility: hidden; }
            100% { opacity: 1; visibility: visible; }
          }
        `}
      </style>
    </div>
  );
};

export default FloatingHearts;
