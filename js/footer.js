// start

import { playClickSound } from "./player.js";

const startBtn = document.getElementById("start");
const startSection = document.getElementById("startSection");

export function startRender() {
  startBtn.addEventListener("click", () => {
    playClickSound();
    startSection.style.display = "flex";
    closeStart();
  });
}

function closeStart() {
  startBtn.addEventListener("click", () => {
    playClickSound();
    startSection.style.display = "none";
    startRender();
  });
}

// clock

function militaryTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let time = hours + ":" + minutes;
  return time;
}

setInterval(function () {
  document.getElementById("clock").innerHTML = militaryTime();
}, 1000);
