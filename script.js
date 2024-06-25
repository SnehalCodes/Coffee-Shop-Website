let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showSlide(index) {
    if (index >= totalItems) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalItems - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(nextSlide, 2000); // Change slide every 3 seconds
    showSlide(currentIndex);
});
