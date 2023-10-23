import songs from "./songs.js";

export let songIndex = 0;

const screens = document.getElementById("screens");
const songTitle = document.querySelector(".songTitle");
const songAuthor = document.querySelector(".songAuthor");
const songGif = document.querySelector(".songGif");
const song = document.getElementById("audio");

const goBackBtn = document.getElementById("goBackBtn");
const goForwardBtn = document.getElementById("goForwardBtn");
const playPouseBtn = document.getElementById("playPouseBtn");
const increaseVolume = document.getElementById("increaseVolume");
const decreaseVolume = document.getElementById("decreaseVolume");
const progressBarDiv = document.querySelector(".progressBar");
const progressBar = document.querySelector("progress");
const songCurrentTime = document.querySelector(".currentTime");
const endTime = document.querySelector(".endTime");

const playBtn = "<i class='fa-solid fa-play' style='color: #000000;'></i>";
const pauseBtn = "<i class='fa-solid fa-pause' style='color: #000000;'></i>";

// eventos
playPouseBtn.addEventListener("click", playPouse);
increaseVolume.addEventListener("click", volumeUp);
decreaseVolume.addEventListener("click", volumeDown);
song.addEventListener("timeupdate", updateProgress);
goBackBtn.addEventListener("click", goBack);
goForwardBtn.addEventListener("click", goForward);

function goForward() {
  if (songIndex === songs.length - 1) {
    songIndex = 0;
    playerRender(songIndex);
    playPouse();
  } else {
    songIndex++;
    playerRender(songIndex);
    playPouse();
  }
}

function goBack() {
  if (songIndex === 0) {
    songIndex = songs.length - 1;
    playerRender(songIndex);
    playPouse();
  } else {
    songIndex--;
    playerRender(songIndex);
    playPouse();
  }
}

progressBarDiv.onclick = (e) => {
  progressBarHandler(e);
};

// funções

export function playerRender() {
  screens.style.display = "flex";
  songTitle.textContent = songs[songIndex].name;
  songAuthor.textContent = songs[songIndex].author;
  songGif.src = songs[songIndex].gif;
  song.src = songs[songIndex].src;
  audio.addEventListener("loadeddata", () => {
    endTime.textContent = secondsToMinutes(Math.floor(song.duration));
  });
  song.addEventListener("timeupdate", updateProgress);
}

function updateProgress() {
  progressBar.style.width = Math.floor((song.currentTime / song.duration) * 100) + "%";
  songCurrentTime.textContent = secondsToMinutes(Math.floor(song.currentTime));
}

function progressBarHandler(e) {
  progressBar.style.width = e.offsetX + "px";
  song.currentTime = (e.offsetX / progressBarDiv.offsetWidth) * song.duration;
}

function secondsToMinutes(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return minutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
}

function playPouse() {
  if (song.paused) {
    song.play();
    playPouseBtn.innerHTML = pauseBtn;
  } else {
    song.pause();
    playPouseBtn.innerHTML = playBtn;
  }
}

function volumeUp() {
  if (song.volume < 1) {
    song.volume += 0.1;
  }
}

function volumeDown() {
  if (song.volume >= 0) {
    song.volume -= 0.1;
  }
}

export function close() {
  const screens = document.getElementById("screens");
  song.pause();
  playPouseBtn.innerHTML = playBtn;
  screens.style.display = "none";
}
