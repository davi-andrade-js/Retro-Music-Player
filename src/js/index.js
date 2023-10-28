import { playerRender } from "./script.js";
import { renderWallpapers } from "./my-computer.js";
import { playPouse } from "./script.js";

const playerSection = document.getElementById("playerSection");
const computerSection = document.getElementById("computerSection");
const configSection = document.getElementById("configSection");

const playerButton = document.getElementById("musicPlayer");
const myComputerButton = document.getElementById("myComputer");
const configButton = document.getElementById("config");

const closePlayerBtn = document.getElementById("closePlayer");
const closeComputerBtn = document.getElementById("closeComputer");
const closeConfigBtn = document.getElementById("closeConfig");

const song = document.getElementById("audio");

playerButton.addEventListener("click", playerRender);
myComputerButton.addEventListener("click", renderWallpapers);
configButton.addEventListener("click", () => {
  const configScreen = document.getElementById("configScreen");
  configSection.style.display = "flex";
  configScreen.style.display = "block";
});

closePlayerBtn.addEventListener("click", () => {
  song.pause();
  playerSection.style.display = "none";
});

closeComputerBtn.addEventListener("click", () => {
  computerSection.style.display = "none";
});

closeConfigBtn.addEventListener("click", () => {
  configSection.style.display = "none";
});
