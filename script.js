// ==========================================
// TEDDY'S LITTLE DELIVERY v2.0
// SCRIPT.JS - PART 1
// ==========================================

// ---------- ELEMENTS ----------

const loader = document.getElementById("loader");

const speech = document.getElementById("speech");
const typing = document.getElementById("typing");

const envelope = document.getElementById("envelope");

const letter = document.getElementById("letter");
const startBtn = document.getElementById("startBtn");

const gallery = document.getElementById("gallery");
const photo = document.getElementById("memoryPhoto");
const text = document.getElementById("memoryText");
const nextBtn = document.getElementById("nextBtn");

const ending = document.getElementById("ending");

const hearts = document.getElementById("hearts");

// ==========================================
// MEMORIES
// ==========================================

const memories = [

    {
        image: "photos/1.jpg",
        caption: "❤️ One of my favourite memories."
    },

    {
        image: "photos/2.jpg",
        caption: "😊 This always makes me smile."
    },

    {
        image: "photos/3.jpg",
        caption: "🌸 A beautiful moment."
    },

    {
        image: "photos/4.jpg",
        caption: "✨ Couldn't forget this one."
    }

];

let randomPhotos = [...memories];

randomPhotos.sort(() => Math.random() - 0.5);

let current = 0;

// ==========================================
// LOADER
// ==========================================

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.pointerEvents = "none";

        setTimeout(() => {

            loader.style.display = "none";

            startStory();

        }, 800);

    }, 2200);

});

// ==========================================
// HEARTS
// ==========================================

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.bottom = "-30px";

    heart.style.fontSize = (18 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 4) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

setInterval(createHeart, 450);

// ==========================================
// TYPEWRITER
// ==========================================

const message =
"Hey... I've been carrying something for quite a while... Would you open it? 💌";

let i = 0;

function typeWriter(){

    if(i < message.length){

        typing.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter, 45);

    }

}

// ==========================================
// STORY
// ==========================================

function startStory(){

    setTimeout(() => {

        speech.classList.remove("hidden");

        typeWriter();

    }, 800);

    setTimeout(() => {

        envelope.classList.remove("hidden");

        envelope.classList.add("fade-in");

    }, 5200);

}

// ==========================================
// OPEN ENVELOPE
// ==========================================

envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    speech.classList.add("fade-out");

    setTimeout(() => {

        speech.classList.add("hidden");

        envelope.classList.add("hidden");

        letter.classList.remove("hidden");

        letter.classList.add("show");

    }, 450);

});

// ==========================================
// SCRIPT.JS - PART 2
// GALLERY + ENDING
// ==========================================

// ------------------------------------------
// SHOW FIRST MEMORY
// ------------------------------------------

function showMemory(){

    photo.src = randomPhotos[current].image;

    text.textContent = randomPhotos[current].caption;

}

// ------------------------------------------
// OPEN MEMORIES
// ------------------------------------------

startBtn.addEventListener("click", () => {

    letter.classList.remove("show");
    letter.classList.add("hidden");

    gallery.classList.remove("hidden");
    gallery.classList.add("show");

    current = 0;

    randomPhotos.sort(() => Math.random() - 0.5);

    showMemory();

});

// ------------------------------------------
// NEXT MEMORY
// ------------------------------------------

nextBtn.addEventListener("click", () => {

    current++;

    if(current >= randomPhotos.length){

        gallery.classList.remove("show");
        gallery.classList.add("hidden");

        ending.classList.remove("hidden");
        ending.classList.add("show");

        return;

    }

    photo.classList.remove("fade-in");

    void photo.offsetWidth;

    photo.classList.add("fade-in");

    showMemory();

});

// ------------------------------------------
// OPTIONAL MUSIC
// ------------------------------------------

const music = document.getElementById("music");

if(music){

    envelope.addEventListener("click", () => {

        music.play().catch(() => {});

    }, { once:true });

}

// ------------------------------------------
// RESTART (OPTIONAL)
// ------------------------------------------

function restartStory(){

    location.reload();

}

// ------------------------------------------
// PRELOAD IMAGES
// ------------------------------------------

randomPhotos.forEach(item => {

    const img = new Image();

    img.src = item.image;

});

// ==========================================
// END OF FILE
// ==========================================