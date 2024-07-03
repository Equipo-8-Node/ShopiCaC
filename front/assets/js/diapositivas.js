const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slider = document.querySelector(".carrousel__slider");
let counter = 0;

function slideTo(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

function prevSlide() {
  counter = counter === 0 ? slider.children.length - 1 : counter - 1;
  slideTo(counter);
}

function nextSlide() {
  counter = counter === slider.children.length - 1 ? 0 : counter + 1;
  slideTo(counter);
}

function autoSlide() {
  nextSlide();
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

setInterval(autoSlide, 5000);
