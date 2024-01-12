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
  wallpapers.forEach((wallpaper) => {
    const src = wallpaper.getAttribute("src");
    wallpaper.setAttribute("src", src.replace(/\.(gif|png)$/, `.${extension}`));
  });
}

let isWppPaused = localStorage.getItem("pauseWpp") ?? false;

if (isWppPaused === "true" || isWppPaused === true) {
  wppOnBtn.style.backgroundColor = "#00ff00";
  switchWallpaperExtension("png");
} else {
  wppOffBtn.style.backgroundColor = "#ff0000";
  switchWallpaperExtension("gif");
}

wppOnBtn.addEventListener("click", () => {
  switchWallpaperExtension("png");

  localStorage.setItem("pauseWpp", true);
  wppOnBtn.style.backgroundColor = "#00ff00";
  wppOffBtn.style.backgroundColor = "#c0c0c0";

  changeWpp("on");
});

wppOffBtn.addEventListener("click", () => {
  switchWallpaperExtension("gif");

  localStorage.setItem("pauseWpp", false);
  wppOffBtn.style.backgroundColor = "#ff0000";
  wppOnBtn.style.backgroundColor = "#c0c0c0";

  changeWpp("off");
});

function changeWpp(onOff) {
  let currentWpp = localStorage.getItem("bgGif") ?? wallpapers[0].image;

  if (onOff === "on") {
    currentWpp = currentWpp.replace(/\.gif$/, ".png");
  } else {
    currentWpp = currentWpp.replace(/\.png$/, ".gif");
  }

  localStorage.setItem("bgGif", currentWpp);
  document.querySelector("body").style.backgroundImage = `url(${currentWpp})`;
}
