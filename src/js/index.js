import { playerHandler } from "./playerHandler.js";
import { close } from "./script.js";

const playerButton = document.getElementById("musicPlayer");
playerButton.addEventListener("click", playerHandler);

const screenButton = document.getElementById("screenButton");
screenButton.addEventListener("click", close);
