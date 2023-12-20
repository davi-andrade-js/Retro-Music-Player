const computerScreen = document.getElementById("computerScreen");
const computerSection = document.getElementById("computerSection");

const wallpapers = document.querySelectorAll(".wallpaper");

export function renderWallpapers() {
  computerSection.style.display = "flex";
  computerScreen.style.display = "block";
}

const initialBg = localStorage.getItem("bgGif") ?? wallpapers[0];
document.querySelector("body").style.backgroundImage = `url(${initialBg})`;

wallpapers.forEach((wallpaper) => {
  wallpaper.addEventListener("click", () => {
    const body = document.querySelector("body");
    const imageUrl = wallpaper.getAttribute("src");

    body.style.backgroundImage = `url(${imageUrl})`;
    localStorage.setItem("bgGif", imageUrl);
    computerSection.style.display = "none";
  });
});
