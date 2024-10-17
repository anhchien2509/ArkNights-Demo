
/*-------JavaScript-------*/
const slides = document.querySelector('.slide');
const images = document.querySelectorAll('.slide img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let index = 0;

function showSlide(i) {
  index = (i + images.length) % images.length;
  slides.style.transform = `translateX(${-index * 100}%)`;
}

prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));

// Tự động chuyển slide mỗi 3 giây
setInterval(() => showSlide(index + 1), 3000);

/*---------JavaScript Menu---------*/
document.getElementById('menu-toggle').addEventListener('click', function() {
  document.getElementById('menu').classList.toggle('active');
});

