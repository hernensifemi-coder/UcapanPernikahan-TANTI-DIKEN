// Buka kartu + musik
function bukaUndangan() {
    document.querySelector(".cover").style.display = "none";
    document.querySelector(".container").classList.remove("hidden");

    const musik = document.getElementById("musik");
    musik.currentTime = 40; // mulai dari bagian enak
    musik.play();
}

// Slider otomatis
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
    index = (index + 1) % slides.length;
}, 3000);
