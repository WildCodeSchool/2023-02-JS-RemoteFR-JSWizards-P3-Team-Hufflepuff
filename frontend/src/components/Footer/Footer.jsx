import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div>
        <input className="message" id="message" type="message" />
      </div>
      <p1>Administrateur</p1>
      <button className="btn" type="submit">
        Submit
      </button>
      <p2>©RoxyRoke.WCS-P3-2023-02-Remote</p2>
    </footer>
  );
}
