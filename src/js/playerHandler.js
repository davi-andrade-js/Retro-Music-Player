import songs from "./songs.js";

const screens = document.getElementById("screens");
const songTitle = document.querySelector(".songTitle");
const songAuthor = document.querySelector(".songAuthor");
const songGif = document.querySelector(".songGif");

export function playerHandler() {
  screens.style.display = "flex";
  songTitle.textContent = songs[0].name;
  songAuthor.textContent = songs[0].author;
  songGif.src = songs[0].gif;
}
