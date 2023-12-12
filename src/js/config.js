import { playClickSound } from "./script.js";

export function renderConfig() {
  const configSection = document.getElementById("configSection");
  const configScreen = document.getElementById("configScreen");
  configSection.style.display = "flex";
  configScreen.style.display = "block";
}

// sound configs

const clickSound = document.getElementById("clickSound");
const soundOnBtn = document.getElementById("soundOnBtn");
const soundOffBtn = document.getElementById("soundOffBtn");

let clickSoundOn = localStorage.getItem("click") ?? true;

if (clickSoundOn === "true" || clickSoundOn === true) {
  soundOnBtn.style.backgroundColor = "#00ff00";
  clickSound.muted = false;
} else {
  soundOffBtn.style.backgroundColor = "#ff0000";
  clickSound.muted = true;
}

soundOnBtn.addEventListener("click", () => {
  playClickSound();
  clickSound.muted = false;
  soundOnBtn.style.backgroundColor = "#00ff00";
  soundOffBtn.style.backgroundColor = "#c0c0c0";
  clickSoundOn = true;

  localStorage.setItem("click", clickSoundOn);
});

soundOffBtn.addEventListener("click", () => {
  clickSound.muted = true;
  soundOffBtn.style.backgroundColor = "#ff0000";
  soundOnBtn.style.backgroundColor = "#c0c0c0";
  clickSoundOn = false;

  localStorage.setItem("click", clickSoundOn);
});

// wallpapers configs

const wallpapers = document.querySelectorAll(".wallpaper");

const wppOnBtn = document.getElementById("wppOnBtn");
const wppOffBtn = document.getElementById("wppOffBtn");

function switchWallpaperExtension(extension) {
  const wallpapers = document.querySelectorAll(".wallpaper");
  wallpapers.forEach((wallpaper) => {
    const src = wallpaper.getAttribute("src");
    wallpaper.setAttribute("src", src.replace(/\.(gif|png)$/, `.${extension}`));
  });
}

wppOnBtn.addEventListener("click", () => {
  playClickSound();
  switchWallpaperExtension("png");
});

wppOffBtn.addEventListener("click", () => {
  playClickSound();
  switchWallpaperExtension("gif");
});
