const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const slideInterval = 4000; // Change this value to control the time between slides (in milliseconds)

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, slideInterval);
