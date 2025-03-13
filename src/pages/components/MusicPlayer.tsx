import React, { useEffect, useRef, useState } from "react";
import Popup from "./Popup";
import CakeSVG from "../svg/CakeSVG";

const AUDIO_URL = "song.mp3";

const MusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(() => console.log("User interaction needed for autoplay."));

      // Show popup when music ends
      audioRef.current.onended = () => setShowPopup(true);
    }
  }, []);

  return (
    <div className="text-center p-6 text-white">
      <h1
        className="flex items-center justify-center text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text 
             bg-gradient-to-r from-pink-400 via-red-500 to-yellow-400 
             animate-pulse drop-shadow-lg space-x-3"
      >
        <CakeSVG width={100} height={100} />
        <span>Happy Birthday, Hira</span>
        <CakeSVG width={100} height={100} />
      </h1>



      <audio ref={audioRef} src={AUDIO_URL} autoPlay />

      {/* 🎉 Show Popup When Music Ends */}
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

export default MusicPlayer;
