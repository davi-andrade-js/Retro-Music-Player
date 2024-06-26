import songs from "./songs.js";

export let songIndex = 0;
let savedPlaybackPosition = 0;

const playerSection = document.getElementById("playerSection");
const songTitle = document.querySelector(".songTitle");
const songAuthor = document.querySelector(".songAuthor");
const songGif = document.querySelector(".songGif");
const song = document.getElementById("audio");

const goBackBtn = document.getElementById("goBackBtn");
const goForwardBtn = document.getElementById("goForwardBtn");
const playPauseBtn = document.getElementById("playPauseBtn");
const increaseVolume = document.getElementById("increaseVolume");
const decreaseVolume = document.getElementById("decreaseVolume");
const progressBarDiv = document.querySelector(".progressBar");
const progressBar = document.querySelector("progress");
const songCurrentTime = document.querySelector(".currentTime");
const endTime = document.querySelector(".endTime");

const playBtn = "<i class='fa-solid fa-play' style='color: #000000;'></i>";
const pauseBtn = "<i class='fa-solid fa-pause' style='color: #000000;'></i>";

// events

playPauseBtn.addEventListener("click", playPause);
increaseVolume.addEventListener("click", volumeUp);
decreaseVolume.addEventListener("click", volumeDown);
song.addEventListener("timeupdate", updateProgress);
goBackBtn.addEventListener("click", rewind);
goForwardBtn.addEventListener("click", skip);

song.addEventListener("timeupdate", () => {
  if (song.duration == song.currentTime) {
    setTimeout(() => skip(), 1500);
  }
});

// player functions

export function playerRender() {
  const musicPlayerScreen = document.getElementById("musicPlayerScreen");
  musicPlayerScreen.style.display = "block";
  playerSection.style.display = "flex";
  songTitle.textContent = songs[songIndex].name;
  songAuthor.textContent = songs[songIndex].author;
  songGif.src = songs[songIndex].gif;
  song.src = songs[songIndex].src;

  song.addEventListener("loadedmetadata", () => {
    endTime.textContent = secondsToMinutes(Math.floor(song.duration));
  });
  song.addEventListener("timeupdate", updateProgress);

  song.currentTime = savedPlaybackPosition;
}

function rewind() {
  savedPlaybackPosition = 0;
  if (songIndex === 0) {
    songIndex = songs.length - 1;
    playerRender(songIndex);
    playPause();
    return;
  }
  songIndex--;
  playerRender(songIndex);
  playPause();
}

function skip() {
  savedPlaybackPosition = 0;
  if (songIndex === songs.length - 1) {
    songIndex = 0;
    playerRender(songIndex);
    playPause();
    return;
  }
  songIndex++;
  playerRender(songIndex);
  playPause();
}

export function play() {
  if (song.paused) {
    if (savedPlaybackPosition > 0) {
      song.currentTime = savedPlaybackPosition;
      savedPlaybackPosition = 0;
    }
    song.play();
    playPauseBtn.innerHTML = pauseBtn;
  }
}

export function pause() {
  song.pause();
  playPauseBtn.innerHTML = playBtn;
  savedPlaybackPosition = song.currentTime;
}

export function playPause() {
  if (song.paused) {
    play();
    return;
  }
  pause();
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

// progressbar

function progressBarHandler(e) {
  const progressBarRect = progressBarDiv.getBoundingClientRect();
  const clickPositionX = e.clientX - progressBarRect.left;
  const progressBarWidth = progressBarRect.width;
  const clickPositionRatio = clickPositionX / progressBarWidth;
  const newTime = clickPositionRatio * song.duration;
  song.currentTime = newTime;
}

progressBarDiv.addEventListener("mousedown", (e) => {
  progressBarHandler(e);

  function moveHandler(e) {
    progressBarHandler(e);
  }

  document.addEventListener("mousemove", moveHandler);
  document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", moveHandler);
  });
});

function updateProgress() {
  progressBar.style.width = Math.floor((song.currentTime / song.duration) * 100) + "%";
  songCurrentTime.textContent = secondsToMinutes(Math.floor(song.currentTime));
  savedPlaybackPosition = song.currentTime;
}

function secondsToMinutes(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return minutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
}
