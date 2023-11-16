const computerScreen = document.getElementById("computerScreen");
const computerSection = document.getElementById("computerSection");

export function renderWallpapers() {
  computerSection.style.display = "flex";
  computerScreen.style.display = "block";
}

const wallpapers = document.querySelectorAll(".wallpaper");

wallpapers.forEach((wallpaper) => {
  wallpaper.addEventListener("click", () => {
    const body = document.querySelector("body");
    const imageUrl = wallpaper.getAttribute("src");
    body.style.backgroundImage = `url(${imageUrl})`;
    computerSection.style.display = "none";
  });
});
