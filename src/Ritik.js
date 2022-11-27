import { useEffect, useState } from "react";
import { ReactFloatingBalloons } from "react-floating-balloons";
import party from "party-js";
import ritik from './ritik.png'
import "./Ritik.css"

function Ritik() {
  useEffect(() => {
    document.querySelector("html").addEventListener("click", function (e) {
      party.confetti(this, {
        count: party.variation.range(20, 40),
      });
    });
    setInterval(() => {
      document.querySelector("html").click();
    }, 1000);
  }, []);

  return (
    <div id='container'>
      <img src={ritik} id='ritik' />
      <ReactFloatingBalloons
        count={3}
        msgText="Happy Birthday Ritik"
        colors={["yellow", "purple"]}
        popVolumeLevel={0.1}
      />
    </div>
  );
}

export default Ritik;
