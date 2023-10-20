import { playerRender, songIndex } from "./script.js";
import { close } from "./script.js";

const playerButton = document.getElementById("musicPlayer");
playerButton.addEventListener("click", playerRender);

const closeScreenBtn = document.querySelector(".closeScreenBtn");
closeScreenBtn.addEventListener("click", close);
