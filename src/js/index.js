import { pause, playerRender } from "./script.js";
import { renderWallpapers } from "./my-computer.js";
import { renderConfig } from "./config.js";

const playerSection = document.getElementById("playerSection");
const computerSection = document.getElementById("computerSection");
const configSection = document.getElementById("configSection");

const playerButton = document.getElementById("musicPlayer");
const myComputerButton = document.getElementById("myComputer");
const configButton = document.getElementById("config");

const closePlayerBtn = document.getElementById("closePlayer");
const closeComputerBtn = document.getElementById("closeComputer");
const closeConfigBtn = document.getElementById("closeConfig");

// const song = document.getElementById("audio");
// const playPauseBtn = document.getElementById("playPauseBtn");
// const playBtn = "<i class='fa-solid fa-play' style='color: #000000;'></i>";

playerButton.addEventListener("click", playerRender);
myComputerButton.addEventListener("click", renderWallpapers);
configButton.addEventListener("click", renderConfig);

closePlayerBtn.addEventListener("click", () => {
  playerSection.style.display = "none";
  pause();
});

closeComputerBtn.addEventListener("click", () => {
  computerSection.style.display = "none";
});

closeConfigBtn.addEventListener("click", () => {
  configSection.style.display = "none";
});
