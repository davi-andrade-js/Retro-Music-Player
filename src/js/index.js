import { pause, playerRender } from "./script.js";
import { renderWallpapers } from "./my-computer.js";
import { renderConfig } from "./config.js";
import { renderInfo } from "./info.js";

const playerSection = document.getElementById("playerSection");
const playerButton = document.getElementById("musicPlayer");
const closePlayerBtn = document.getElementById("closePlayer");

const computerSection = document.getElementById("computerSection");
const myComputerButton = document.getElementById("myComputer");
const closeComputerBtn = document.getElementById("closeComputer");

const configSection = document.getElementById("configSection");
const configButton = document.getElementById("config");
const closeConfigBtn = document.getElementById("closeConfig");

const infoSection = document.getElementById("infoSection");
const infoButton = document.getElementById("info");
const closeInfoBtn = document.getElementById("closeInfo");

// const song = document.getElementById("audio");
// const playPauseBtn = document.getElementById("playPauseBtn");
// const playBtn = "<i class='fa-solid fa-play' style='color: #000000;'></i>";

playerButton.addEventListener("click", playerRender);
myComputerButton.addEventListener("click", renderWallpapers);
configButton.addEventListener("click", renderConfig);
infoButton.addEventListener("click", renderInfo);

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

closeInfoBtn.addEventListener("click", () => {
  infoSection.style.display = "none";
});
