import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const RomanticPopup: React.FC<{ show: boolean }> = ({ show }) => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setTimeout(() => setVisible(true), 1000); // Delay for smooth appearance
    }
  }, [show]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gradient-to-br from-[#fbd786] to-[#f7797d] text-white rounded-2xl shadow-2xl p-8 text-center max-w-lg md:max-w-xl w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-lg">
              Love, as Infinite as the Stars! ✨❤️
            </h2>
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              Your love is the melody of my heart, and tonight, the universe sings for you.
            </p>
            <button
              onClick={() => router.push("/heartfelt")}
              className="bg-white text-[#f7797d] px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-lg md:text-xl shadow-md hover:bg-[#ffe066] transition-all duration-300"
            >
              Discover the Words of My Heart 💖
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RomanticPopup;
