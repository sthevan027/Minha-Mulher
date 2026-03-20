const music = document.getElementById("music");
const enterButton = document.getElementById("enter-button");
const mainPage = document.getElementById("principal");
const toggleButton = document.getElementById("toggle-music");
const volumeSlider = document.getElementById("volume-slider");
const musicStatus = document.getElementById("music-status");

music.volume = Number(volumeSlider.value) / 100;

function updateMusicUi() {
  const isPaused = music.paused;
  toggleButton.textContent = isPaused ? "Tocar música" : "Pausar música";
  musicStatus.textContent = isPaused ? "Música pausada" : "Tocando agora";
}

async function startMusic() {
  try {
    await music.play();
    updateMusicUi();
  } catch (error) {
    musicStatus.textContent = "Toque para iniciar a música";
  }
}

async function toggleMusic() {
  if (music.paused) {
    await startMusic();
    return;
  }

  music.pause();
  updateMusicUi();
}

function updateVolume() {
  music.volume = Number(volumeSlider.value) / 100;
}

function enterSite(event) {
  event.preventDefault();

  startMusic();
  document.body.classList.add("entered");

  requestAnimationFrame(() => {
    mainPage.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

enterButton.addEventListener("click", enterSite);

toggleButton.addEventListener("click", toggleMusic);
volumeSlider.addEventListener("input", updateVolume);
music.addEventListener("play", updateMusicUi);
music.addEventListener("pause", updateMusicUi);

document.addEventListener("DOMContentLoaded", () => {
  updateVolume();
  updateMusicUi();
});
