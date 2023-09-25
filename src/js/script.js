import songs from "./songs.js";

const screens = document.getElementById("screens");
const songTitle = document.querySelector(".songTitle");
const songAuthor = document.querySelector(".songAuthor");
const songGif = document.querySelector(".songGif");

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
audio.addEventListener("timeupdate", updateProgress);

progressBarDiv.onclick = (e) => {
  progressBarHandler(e);
};

// funções
export function playerHandler() {
  screens.style.display = "flex";
  endTime.textContent = secondsToMinutes(Math.floor(audio.duration));
  songTitle.textContent = songs[0].name;
  songAuthor.textContent = songs[0].author;
  songGif.src = songs[0].gif;
}

function updateProgress() {
  progressBar.style.width = Math.floor((audio.currentTime / audio.duration) * 100) + "%";
  songCurrentTime.textContent = secondsToMinutes(Math.floor(audio.currentTime));

  const progressMarkPosition = (percentage / 100) * progressBarDiv.offsetWidth;
  progressMark.style.left = `${progressMarkPosition}px`;
}

function progressBarHandler(e) {
  progressBar.style.width = e.offsetX + "px";
  audio.currentTime = (e.offsetX / progressBarDiv.offsetWidth) * audio.duration;
}

function secondsToMinutes(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return minutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
}

function playPouse() {
  if (audio.paused) {
    audio.play();
    playPouseBtn.innerHTML = pauseBtn;
  } else {
    audio.pause();
    playPouseBtn.innerHTML = playBtn;
  }
}

function volumeUp() {
  if (audio.volume < 1) {
    audio.volume += 0.1;
  }
}

function volumeDown() {
  if (audio.volume >= 0) {
    audio.volume -= 0.1;
  }
}

export function close() {
  const screens = document.getElementById("screens");
  audio.pause();
  playPouseBtn.innerHTML = playBtn;
  screens.style.display = "none";
}

const progressMark = document.querySelector(".progressMark");
let isDragging = false;
let initialPositionX = 0;

progressMark.addEventListener("mousedown", (e) => {
  isDragging = true;
  initialPositionX = e.clientX;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const offsetX = e.clientX - progressBarDiv.getBoundingClientRect().left;
    const progressBarWidth = progressBarDiv.offsetWidth;
    const percentage = (offsetX / progressBarWidth) * 100;

    progressBar.style.width = `${percentage}%`;

    // Não atualize o tempo de reprodução durante o arrasto
  }
});

document.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;

    // Atualize o tempo de reprodução com base na posição inicial e final do bloquinho
    const progressBarWidth = progressBarDiv.offsetWidth;
    const percentage =
      ((initialPositionX - progressBarDiv.getBoundingClientRect().left) / progressBarWidth) * 100;

    const newTime = (percentage / 100) * audio.duration;
    audio.currentTime = newTime;
  }
});
