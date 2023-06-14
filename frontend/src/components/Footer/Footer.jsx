import React from "react";
import ReactAudioPlayer from "react-audio-player";
import sound from "../../assets/sound/honteux.mp3";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="audio-control">
        <div>
          &copy; <a href="https://github.com/Roxyroke">Roxane Belacene</a>
        </div>
        <ReactAudioPlayer src={sound} autoPlay controls />
      </div>
      <div>
        <span>Administrateur</span>
      </div>
    </footer>
  );
}
