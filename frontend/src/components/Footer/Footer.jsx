import ReactPlayer from "react-player";
import sound from "../../assets/sound/mix_rox.wav";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="audio-control">
        <div>
          &copy; <a href="https://github.com/Roxyroke">Roxane Belacene</a>
        </div>
        <ReactPlayer url={sound} width="20rem" height="3rem" controls />
      </div>
      <div>
        <span>Administrateur</span>
      </div>
    </footer>
  );
}
