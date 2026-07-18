<<<<<<< HEAD
// ==============================
// TEDDY'S LITTLE DELIVERY
// ==============================

const speech = document.getElementById("speech");
const envelope = document.getElementById("envelope");

const letter = document.getElementById("letter");
const startBtn = document.getElementById("startBtn");

const gallery = document.getElementById("gallery");
const photo = document.getElementById("memoryPhoto");
const text = document.getElementById("memoryText");
const nextBtn = document.getElementById("nextBtn");

const ending = document.getElementById("ending");

const hearts = document.getElementById("hearts");

// ====================================
// YOUR PHOTOS
// ====================================

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

// ====================================
// SHUFFLE PHOTOS
// ====================================

let randomPhotos = [...memories];

randomPhotos.sort(() => Math.random() - 0.5);

let current = 0;

// ====================================
// HEARTS
// ====================================

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.bottom = "-30px";

    heart.style.fontSize = (18 + Math.random() * 18) + "px";

    heart.style.animationDuration = (5 + Math.random() * 4) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

setInterval(createHeart, 450);

// ====================================
// TEDDY STORY
// ====================================

setTimeout(() => {

    speech.classList.remove("hidden");

}, 9000);

setTimeout(() => {

    envelope.classList.remove("hidden");

}, 11500);

// ====================================
// OPEN LETTER
// ====================================

envelope.addEventListener("click", () => {

    speech.classList.add("hidden");

    envelope.classList.add("hidden");

    letter.classList.remove("hidden");

    letter.classList.add("show");

});

// ====================================
// START MEMORIES
// ====================================

startBtn.addEventListener("click", () => {

    letter.classList.remove("show");

    letter.classList.add("hidden");

    gallery.classList.remove("hidden");

    gallery.classList.add("show");

    current = 0;

    showMemory();

});

// ====================================
// SHOW PHOTO
// ====================================

function showMemory() {

    photo.src = randomPhotos[current].image;

    text.innerHTML = randomPhotos[current].caption;

}

// ====================================
// NEXT PHOTO
// ====================================

nextBtn.addEventListener("click", () => {

    current++;

    if (current >= randomPhotos.length) {

        gallery.classList.remove("show");

        gallery.classList.add("hidden");

        ending.classList.remove("hidden");

        ending.classList.add("show");

        return;

    }

    showMemory();

=======
// ==============================
// TEDDY'S LITTLE DELIVERY
// ==============================

const speech = document.getElementById("speech");
const envelope = document.getElementById("envelope");

const letter = document.getElementById("letter");
const startBtn = document.getElementById("startBtn");

const gallery = document.getElementById("gallery");
const photo = document.getElementById("memoryPhoto");
const text = document.getElementById("memoryText");
const nextBtn = document.getElementById("nextBtn");

const ending = document.getElementById("ending");

const hearts = document.getElementById("hearts");

// ====================================
// YOUR PHOTOS
// ====================================

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

// ====================================
// SHUFFLE PHOTOS
// ====================================

let randomPhotos = [...memories];

randomPhotos.sort(() => Math.random() - 0.5);

let current = 0;

// ====================================
// HEARTS
// ====================================

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.bottom = "-30px";

    heart.style.fontSize = (18 + Math.random() * 18) + "px";

    heart.style.animationDuration = (5 + Math.random() * 4) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

setInterval(createHeart, 450);

// ====================================
// TEDDY STORY
// ====================================

setTimeout(() => {

    speech.classList.remove("hidden");

}, 9000);

setTimeout(() => {

    envelope.classList.remove("hidden");

}, 11500);

// ====================================
// OPEN LETTER
// ====================================

envelope.addEventListener("click", () => {

    speech.classList.add("hidden");

    envelope.classList.add("hidden");

    letter.classList.remove("hidden");

    letter.classList.add("show");

});

// ====================================
// START MEMORIES
// ====================================

startBtn.addEventListener("click", () => {

    letter.classList.remove("show");

    letter.classList.add("hidden");

    gallery.classList.remove("hidden");

    gallery.classList.add("show");

    current = 0;

    showMemory();

});

// ====================================
// SHOW PHOTO
// ====================================

function showMemory() {

    photo.src = randomPhotos[current].image;

    text.innerHTML = randomPhotos[current].caption;

}

// ====================================
// NEXT PHOTO
// ====================================

nextBtn.addEventListener("click", () => {

    current++;

    if (current >= randomPhotos.length) {

        gallery.classList.remove("show");

        gallery.classList.add("hidden");

        ending.classList.remove("hidden");

        ending.classList.add("show");

        return;

    }

    showMemory();

>>>>>>> 232565ccdb084b0f88fc51951ffe6b3efc8f787d
});