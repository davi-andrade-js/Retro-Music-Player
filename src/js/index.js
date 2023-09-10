import { playerHandler } from "./playerHandler.js";
import { close } from "./script.js";

const playerButton = document.getElementById("musicPlayer");
playerButton.addEventListener("click", playerHandler);

const closeScreenBtn = document.querySelector(".closeScreenBtn");
closeScreenBtn.addEventListener("click", close);
