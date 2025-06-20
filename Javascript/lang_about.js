document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        fr: {
            musicStatusEnable: "Désactiver la musique",
            musicStatusDisable: "Activer la musique",
            projectTitle: "🤖 Projet de robotique",
            autonomousMove: "🚗 Déplacement autonome",
            description: "En 2019, lors d’un cours de technologie, notre enseignant nous a proposé de concevoir un objet automatisé. J’ai profité des vacances pour réaliser un robot capable de se déplacer de manière autonome tout en évitant les obstacles.",
            involvedTitle: "🚧 Ce projet a impliqué :",
            involvedItems: [
                "📡 L’utilisation de capteurs afin de détecter les objets environnants",
                "💾 Programmation d’un microcontrôleur pour gérer les déplacements"
            ],
            skillsTitle: "💡 Compétences acquises",
            skillsItems: [
                "🧑‍💻 Programmation",
                "🧠 Résolution de problèmes",
                "📅 Organisation du travail",
                "🔧 Montage de circuits",
                "🔍 Observation et ajustements en fonction des tests"
            ],
            illustrationTitle: "🖼️ Illustration :",
            prevButton: "Précédent",
            nextButton: "Suivant",
            topButton: "Haut de page",
            navAccueil: "Accueil",
            navApropos: "À propos",
            navCV: "CV",
            navSAE: "SAÉ"
        },
        en: {
            musicStatusEnable: "Disable music",
            musicStatusDisable: "Enable music",
            projectTitle: "🤖 Robotics Project",
            autonomousMove: "🚗 Autonomous movement",
            description: "In 2019, during a technology class, our teacher asked us to design an automated object. I took advantage of the holidays to build a robot capable of moving autonomously while avoiding obstacles.",
            involvedTitle: "🚧 This project involved:",
            involvedItems: [
                "📡 Using sensors to detect surrounding objects",
                "💾 Programming a microcontroller to control movements"
            ],
            skillsTitle: "💡 Skills acquired",
            skillsItems: [
                "🧑‍💻 Programming",
                "🧠 Problem solving",
                "📅 Work organization",
                "🔧 Circuit assembly",
                "🔍 Observation and adjustments based on tests"
            ],
            illustrationTitle: "🖼️ Illustration:",
            prevButton: "Previous",
            nextButton: "Next",
            topButton: "Back to top",
            navAccueil: "Home",
            navApropos: "About",
            navCV: "Resume",
            navSAE: "SAE"
        },
        es: {
            musicStatusEnable: "Desactivar música",
            musicStatusDisable: "Activar música",
            projectTitle: "🤖 Proyecto de robótica",
            autonomousMove: "🚗 Movimiento autónomo",
            description: "En 2019, durante una clase de tecnología, nuestro profesor nos pidió diseñar un objeto automatizado. Aproveché las vacaciones para construir un robot capaz de moverse de forma autónoma evitando obstáculos.",
            involvedTitle: "🚧 Este proyecto implicó:",
            involvedItems: [
                "📡 Uso de sensores para detectar objetos cercanos",
                "💾 Programación de un microcontrolador para gestionar los movimientos"
            ],
            skillsTitle: "💡 Habilidades adquiridas",
            skillsItems: [
                "🧑‍💻 Programación",
                "🧠 Resolución de problemas",
                "📅 Organización del trabajo",
                "🔧 Montaje de circuitos",
                "🔍 Observación y ajustes según las pruebas"
            ],
            illustrationTitle: "🖼️ Ilustración:",
            prevButton: "Anterior",
            nextButton: "Siguiente",
            topButton: "Volver arriba",
            navAccueil: "Inicio",
            navApropos: "Acerca de",
            navCV: "Currículum",
            navSAE: "SAE"
        },
        de: {
            musicStatusEnable: "Musik deaktivieren",
            musicStatusDisable: "Musik aktivieren",
            projectTitle: "🤖 Robotik-Projekt",
            autonomousMove: "🚗 Autonome Bewegung",
            description: "Im Jahr 2019 bat uns unser Lehrer im Technikunterricht, ein automatisiertes Objekt zu entwerfen. Ich nutzte die Ferien, um einen Roboter zu bauen, der sich selbstständig bewegen und Hindernissen ausweichen konnte.",
            involvedTitle: "🚧 Dieses Projekt beinhaltete:",
            involvedItems: [
                "📡 Verwendung von Sensoren zur Erkennung von Objekten",
                "💾 Programmierung eines Mikrocontrollers zur Steuerung der Bewegungen"
            ],
            skillsTitle: "💡 Erlernte Fähigkeiten",
            skillsItems: [
                "🧑‍💻 Programmieren",
                "🧠 Problemlösung",
                "📅 Arbeitsorganisation",
                "🔧 Schaltungsaufbau",
                "🔍 Beobachtung und Anpassungen anhand von Tests"
            ],
            illustrationTitle: "🖼️ Abbildung:",
            prevButton: "Zurück",
            nextButton: "Weiter",
            topButton: "Nach oben",
            navAccueil: "Start",
            navApropos: "Über mich",
            navCV: "Lebenslauf",
            navSAE: "SAE"
        },
        ar: {
            musicStatusEnable: "إيقاف الموسيقى",
            musicStatusDisable: "تشغيل الموسيقى",
            projectTitle: "🤖 مشروع الروبوتيك",
            autonomousMove: "🚗 حركة مستقلة",
            description: "في عام 2019، خلال درس التكنولوجيا، طلب منا المعلم تصميم جهاز آلي. استغليت العطلة لصنع روبوت يتحرك بشكل مستقل مع تجنب العقبات.",
            involvedTitle: "🚧 شمل هذا المشروع:",
            involvedItems: [
                "📡 استخدام أجهزة استشعار لاكتشاف الأشياء المحيطة",
                "💾 برمجة متحكم دقيق لإدارة التحركات"
            ],
            skillsTitle: "💡 المهارات المكتسبة",
            skillsItems: [
                "🧑‍💻 البرمجة",
                "🧠 حل المشكلات",
                "📅 تنظيم العمل",
                "🔧 تجميع الدارات",
                "🔍 الملاحظة والتعديل وفقًا للاختبارات"
            ],
            illustrationTitle: "🖼️ صورة توضيحية:",
            prevButton: "السابق",
            nextButton: "التالي",
            topButton: "أعلى الصفحة",
            navAccueil: "الرئيسية",
            navApropos: "حول",
            navCV: "السيرة الذاتية",
            navSAE: "SAE"
        }
    };

    const langSelect = document.querySelector(".languages-section");
    const audio = document.getElementById("ambientAudio");
    const musicStatus = document.getElementById("music-status");

    function changeLanguage(lang) {
        console.log("Changement de langue vers :", lang); // Debug
        const t = translations[lang];
        if (!t) return;

        // Texte musique selon état
        if (audio && musicStatus) {
            musicStatus.textContent = audio.paused ? t.musicStatusDisable : t.musicStatusEnable;
        }

        // Texte principal
        const projectTitle = document.querySelector("section.languages h2");
        if (projectTitle) projectTitle.textContent = t.projectTitle;

        const autonomousMove = document.querySelector("section.languages h3:first-of-type");
        if (autonomousMove) autonomousMove.textContent = t.autonomousMove;

        const description = document.querySelector("section.languages p");
        if (description) description.textContent = t.description;

        const involvedTitle = document.querySelector("section.languages ol").previousElementSibling;
        if (involvedTitle && involvedTitle.tagName === "P") involvedTitle.textContent = t.involvedTitle;

        const involvedListItems = document.querySelectorAll("section.languages ol li");
        involvedListItems.forEach((li, i) => {
            if (t.involvedItems[i]) li.textContent = t.involvedItems[i];
        });

        const skillsTitle = document.querySelector("section.languages ul").previousElementSibling;
        if (skillsTitle && skillsTitle.tagName === "H3") skillsTitle.textContent = t.skillsTitle;

        const skillsListItems = document.querySelectorAll("section.languages ul li");
        skillsListItems.forEach((li, i) => {
            if (t.skillsItems[i]) li.textContent = t.skillsItems[i];
        });

        const illustrationTitle = document.querySelector("section.languages img").previousElementSibling;
        if (illustrationTitle && illustrationTitle.tagName === "H3") illustrationTitle.textContent = t.illustrationTitle;

        // Boutons de navigation
        const buttons = document.querySelectorAll(".resume-download a.btn");
        if (buttons.length >= 3) {
            buttons[0].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/></svg> ${t.prevButton}`;
            buttons[1].innerHTML = `${t.nextButton} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/></svg>`;
            buttons[2].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/></svg> ${t.topButton}`;
        }

        // Menu de navigation
        const navLinks = document.querySelectorAll(".nav-link");
        if (navLinks.length >= 4) {
            navLinks[0].childNodes[0].nodeValue = t.navAccueil + " ";
            navLinks[1].childNodes[0].nodeValue = t.navApropos + " ";
            navLinks[2].childNodes[0].nodeValue = t.navCV + " ";
            navLinks[3].childNodes[0].nodeValue = t.navSAE + " ";
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
