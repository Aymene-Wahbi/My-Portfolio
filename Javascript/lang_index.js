document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        fr: {
            title: "Bienvenue dans mon Portfolio",
            intro: "Bonjour, je suis Aymene WAHBI, étudiant de 18 ans. Je suis ravi de partager avec vous mon parcours et mes aspirations. Dans cette page, vous trouverez toutes les informations me concernant.",
            button: "En savoir plus sur moi",
            navAccueil: "Accueil",
            navApropos: "À propos",
            navCV: "CV",
            navSAE: "SAÉ",
            musicEnable: "Désactiver la musique",
            musicDisable: "Activer la musique"
        },
        en: {
            title: "Welcome to my Portfolio",
            intro: "Hello, I’m Aymene WAHBI, an 18-year-old student. I'm delighted to share with you my journey and ambitions. On this page, you'll find all the information about me.",
            button: "Learn more about me",
            navAccueil: "Home",
            navApropos: "About",
            navCV: "Resume",
            navSAE: "SAE",
            musicEnable: "Disable music",
            musicDisable: "Enable music"
        },
        es: {
            title: "Bienvenido a mi portafolio",
            intro: "Hola, soy Aymene WAHBI, un estudiante de 18 años. Estoy encantado de compartir contigo mi trayectoria y mis aspiraciones. En esta página encontrarás toda la información sobre mí.",
            button: "Saber más sobre mí",
            navAccueil: "Inicio",
            navApropos: "Acerca de",
            navCV: "Currículum",
            navSAE: "SAE",
            musicEnable: "Desactivar música",
            musicDisable: "Activar música"
        },
        de: {
            title: "Willkommen in meinem Portfolio",
            intro: "Hallo, ich bin Aymene WAHBI, ein 18-jähriger Student. Ich freue mich, mit Ihnen meinen Werdegang und meine Ziele zu teilen. Auf dieser Seite finden Sie alle Informationen über mich.",
            button: "Mehr über mich erfahren",
            navAccueil: "Start",
            navApropos: "Über mich",
            navCV: "Lebenslauf",
            navSAE: "SAE",
            musicEnable: "Musik deaktivieren",
            musicDisable: "Musik aktivieren"
        },
        ar: {
            title: "مرحبًا بكم في ملفي الشخصي",
            intro: "مرحبًا، أنا أيمن وهبي، طالب يبلغ من العمر 18 عامًا. يسعدني أن أشارككم مسيرتي وطموحاتي. في هذه الصفحة، ستجدون جميع المعلومات عني.",
            button: "معرفة المزيد عني",
            navAccueil: "الرئيسية",
            navApropos: "حول",
            navCV: "السيرة الذاتية",
            navSAE: "SAE",
            musicEnable: "إيقاف الموسيقى",
            musicDisable: "تشغيل الموسيقى"
        }
    };

    const langSelect = document.querySelector(".languages-section");
    const audio = document.getElementById("ambientAudio");
    const musicStatus = document.getElementById("music-status");

    function changeLanguage(lang) {
        const data = translations[lang];
        if (!data) return;

        // Texte principal
        document.querySelector("h1").textContent = data.title;
        document.querySelector("p.lead").textContent = data.intro;
        document.querySelector("a.btn").textContent = data.button;

        // Menu
        const navLinks = document.querySelectorAll(".nav-link");
        if (navLinks.length >= 4) {
            navLinks[0].childNodes[0].nodeValue = data.navAccueil + " ";
            navLinks[1].childNodes[0].nodeValue = data.navApropos + " ";
            navLinks[2].childNodes[0].nodeValue = data.navCV + " ";
            navLinks[3].childNodes[0].nodeValue = data.navSAE + " ";
        }

        // Texte musique selon état audio
        if (audio && musicStatus) {
            musicStatus.textContent = audio.paused ? data.musicDisable : data.musicEnable;
        }
    }

    // Initialisation
    const savedLang = localStorage.getItem("selectedLang") || "fr";
    langSelect.value = savedLang;
    changeLanguage(savedLang);

    // Changement langue
    langSelect.addEventListener("change", function () {
        const selectedLang = this.value;
        localStorage.setItem("selectedLang", selectedLang);
        changeLanguage(selectedLang);
    });

    // Gestion musique
    if (musicStatus && audio) {
        musicStatus.style.cursor = "pointer";
        musicStatus.addEventListener("click", () => {
            if (audio.paused) audio.play();
            else audio.pause();
            changeLanguage(langSelect.value);
        });
        audio.addEventListener("play", () => changeLanguage(langSelect.value));
        audio.addEventListener("pause", () => changeLanguage(langSelect.value));
    }
});
