let slides = document.querySelectorAll(".slide");
let prevButton = document.querySelector(".prev");
let nextButton = document.querySelector(".next");
let currentIndex = 0;

function showSlide(index) {
  slides[currentIndex].style.display = "none";
  slides[index].style.display = "block";
  currentIndex = index;
}

function nextSlide() {
  let newIndex = (currentIndex + 1) % slides.length;
  showSlide(newIndex);
}

function prevSlide() {
  let newIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(newIndex);
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

showSlide(currentIndex);
