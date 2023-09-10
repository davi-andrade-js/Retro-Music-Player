const goBackBtn = document.getElementById("goBackBtn");
const goForwardBtn = document.getElementById("goForwardBtn");
const playPouseBtn = document.getElementById("playPouseBtn");
const increaseVolume = document.getElementById("increaseVolume");
const decreaseVolume = document.getElementById("decreaseVolume");

const playBtn = "<i class='fa-solid fa-play' style='color: #000000;'></i>";
const pauseBtn = "<i class='fa-solid fa-pause' style='color: #000000;'></i>";

playPouseBtn.addEventListener("click", playPouse);
increaseVolume.addEventListener("click", volumeUp);
decreaseVolume.addEventListener("click", volumeDown);

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
  if (audio.volume > 1) {
    audio.volume -= 0.1;
  }
}

export function close() {
  const screens = document.getElementById("screens");
  screens.style.display = "none";
}
