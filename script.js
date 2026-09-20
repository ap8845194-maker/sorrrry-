/* ==========================================
   SORRY JERIKAAA
   PREMIUM APOLOGY WEBSITE
========================================== */


/* ================= LOADER ================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);

    }, 1500);

});


/* ================= TEDDY SITUPS ================= */

let situps = 0;

const teddy = document.getElementById("teddy");
const situpCount = document.getElementById("situpCount");

setInterval(() => {

    situps++;

    situpCount.innerText = situps;

}, 2300);


/* ================= SCROLL ================= */

function scrollToApology() {

    document
        .getElementById("apology")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ================= MODAL ================= */

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalIcon = document.getElementById("modalIcon");


function showModal(icon, title, text) {

    modalIcon.innerText = icon;
    modalTitle.innerText = title;
    modalText.innerText = text;

    modal.classList.add("show");

}


function closeModal() {

    modal.classList.remove("show");

}


modal.addEventListener("click", (e) => {

    if (e.target === modal) {
        closeModal();
    }

});


/* ================= QUICK ACTIONS ================= */

function openApology() {

    teddy.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


function openLetter() {

    showModal(
        "💌",
        "My Apology",
        "Jerikaaa, I'm genuinely sorry. I know I made a mistake and I wish I could take that moment back. You are too special to me to let one mistake become bigger than our bond. Please forgive your idiot. ❤️"
    );

}


function openReasons() {

    showModal(
        "❤️",
        "Why I'm Sorry",
        "Because I hurt someone who means the world to me. Because I should have understood you better. Because your smile matters to me. And because I never want to be the reason for your tears."
    );

}


function openPromise() {

    showModal(
        "🎁",
        "My Promise",
        "I promise I'll try to understand better, listen better, communicate better and most importantly... love you better. I'm not promising perfection. I'm promising effort. Every single day. ❤️"
    );

}


/* ================= FORGIVENESS ================= */

function forgiveMe() {

    const message =
        document.getElementById("forgiveMessage");

    message.innerHTML =
        "Please forgive me, Jerikaaa... 🥺❤️";

    createHeartExplosion();

}


/* ================= HEART EXPLOSION ================= */

function createHeartExplosion() {

    for (let i = 0; i < 35; i++) {

        const heart = document.createElement("div");

        heart.innerHTML =
            ["❤️", "💗", "💕", "💖", "💘"][
                Math.floor(Math.random() * 5)
            ];

        heart.style.position = "fixed";

        heart.style.left = "50%";
        heart.style.top = "70%";

        heart.style.fontSize =
            `${15 + Math.random() * 30}px`;

        heart.style.zIndex = "9999";

        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        const x =
            (Math.random() - .5) * 700;

        const y =
            (Math.random() - .5) * 500;

        heart.animate(
            [
                {
                    transform:
                        "translate(-50%,-50%) scale(0)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(${x}px,${y}px) scale(1.4)`,
                    opacity: 0
                }
            ],
            {
                duration:
                    1200 + Math.random() * 800,
                easing: "cubic-bezier(.2,.8,.2,1)"
            }
        );

        setTimeout(() => {
            heart.remove();
        }, 2200);

    }

}


/* ================= FLOATING HEARTS ================= */

function createFloatingHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML =
        ["♡", "♥", "💗", "✨"][
            Math.floor(Math.random() * 4)
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        10 + Math.random() * 25 + "px";

    heart.style.color =
        Math.random() > .5
            ? "#ff6db5"
            : "#9b7cff";

    heart.style.animationDuration =
        5 + Math.random() * 8 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 14000);

}


setInterval(createFloatingHeart, 700);


/* ================= MUSIC ================= */

const music =
    document.getElementById("music");

const musicBtn =
    document.getElementById("musicBtn");

let musicPlaying = false;


function toggleMusic() {

    if (!musicPlaying) {

        music.play()
            .then(() => {

                musicPlaying = true;

                musicBtn.innerText = "❚❚";

            })
            .catch(() => {

                alert(
                    "Please add your music file inside assets/music.mp3"
                );

            });

    } else {

        music.pause();

        musicPlaying = false;

        musicBtn.innerText = "♫";

    }

}


/* ================= NAV ACTIVE ================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".navbar nav a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (
            window.scrollY >= sectionTop
        ) {
            current = section.id;
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.classList.add("active");
        }

    });

});


/* ================= EASTER EGG ================= */

let clickCount = 0;

document.querySelector(".logo")
    .addEventListener("click", () => {

        clickCount++;

        if (clickCount === 5) {

            showModal(
                "🧸",
                "Teddy's Secret",
                "Jerikaaa, please forgive this boy. He made me do 1000 sit-ups and honestly... I think he deserves forgiveness 😭❤️"
            );

            clickCount = 0;
        }

    });