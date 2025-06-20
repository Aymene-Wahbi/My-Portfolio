document.addEventListener("DOMContentLoaded", function () {
    const playIcon = document.getElementById("playIcon");
    const pauseIcon = document.getElementById("pauseIcon");
    const audio = document.getElementById("ambientAudio");
    const musicStatus = document.getElementById("music-status");
    const langSelector = document.getElementById("custom-content");

    let isMusicPaused = localStorage.getItem("musicPaused") === "true";

    if (isMusicPaused) {
        audio.pause();
        playIcon.style.display = "inline";
        pauseIcon.style.display = "none";
        musicStatus.textContent = "Activer la musique";
    } else {
        audio.play();
        playIcon.style.display = "none";
        pauseIcon.style.display = "inline";
        musicStatus.textContent = "Désactiver la musique";
    }

    function toggleMusic() {
        if (audio.paused) {
            audio.play();
            localStorage.setItem("musicPaused", "false");
            playIcon.style.display = "none";
            pauseIcon.style.display = "inline";
            musicStatus.textContent = "Désactiver la musique";
        } else {
            audio.pause();
            localStorage.setItem("musicPaused", "true");
            playIcon.style.display = "inline";
            pauseIcon.style.display = "none";
            musicStatus.textContent = "Activer la musique";
        }
    }

    playIcon.addEventListener("click", toggleMusic);
    pauseIcon.addEventListener("click", toggleMusic);

    const savedLang = localStorage.getItem("selectedLang");
    if (savedLang && langSelector.value !== savedLang) {
        langSelector.value = savedLang;
    }

    if (typeof changeLanguage === "function") {
        changeLanguage(langSelector.value);
    }

    langSelector.addEventListener("change", function () {
        localStorage.setItem("selectedLang", this.value);
        if (typeof changeLanguage === "function") {
            changeLanguage(this.value);
        }
    });
});