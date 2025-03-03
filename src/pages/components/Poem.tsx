import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Popup from "./Popup";

const poemLines = [
  "दूरीयों ने हमें रोका नहीं,",
  "दिल से दिल की बात छुपी नहीं।",
  "",
  "बस एक मुलाक़ात, एक पल की बात,",
  "मगर हर रोज़ महसूस होती तेरी सौ मुलाक़ात।",
  "",
  "तू मेरी आवाज़ का सुकून है,",
  "तू अनदेखी मुस्कान का जुनून है।",
  "",
  "हर मैसेज, हर कॉल में बसा एक एहसास,",
  "जैसे पास होकर भी पास का इंतज़ार है ख़ास।",
  "",
  "सिर्फ़ लफ़्ज़ों का रिश्ता नहीं,",
  "ये एक एहसास की डोर है,",
  "",
  "जिसमें ना कोई दूरी, ना कोई फ़ासला,",
  "सिर्फ़ एक उम्मीद—एक दिन तू सामने होगी, और दुनिया ठहर जाएगी बस वहीं… ❤️✨",
];


const Poem = () => {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowPopup(true), 30000); // Show popup after 30s
  }, []);
  return (
    <div className="max-h-screen p-6 text-center">
      {poemLines.map((line, index) => (
        <motion.p
          key={index}
          className="text-lg md:text-xl lg:text-2xl font-handwriting text-[#8B4513] my-1 md:my-2 tracking-wide"
          style={{
            lineHeight: "1.5",
            textShadow:
              "0px 0px 10px rgba(255, 255, 255, 0.9), 0px 0px 15px rgba(255, 255, 255, 0.7), 0px 0px 25px rgba(255, 255, 255, 0.5)",
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: index * 0.4 }}
        >
          {line}
        </motion.p>
      ))}

      <Popup
        show={showPopup}
        title="Let’s Relive the Magic! 💫"
        message="Every word was a heartbeat, every line a whisper of love. Let's relive the magic once more!"
        buttonText="Experience It Again 🔄✨"
        redirectUrl="/"
      />
    </div>
  );
};

export default Poem;
