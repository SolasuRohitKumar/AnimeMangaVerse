// Carousel functionality
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');

let currentIndex = 0;

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}, 6000);

window.addEventListener('resize', updateCarousel);

// 🔎 Search Bar Functionality
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keyup', function () {
  let filter = searchInput.value.toLowerCase().trim();
  let cards = document.querySelectorAll('.anime-card, .manga-card');

  cards.forEach(card => {
    // Look for h3 first, otherwise fallback to p
    let titleElement = card.querySelector('h3') || card.querySelector('p');
    let title = titleElement ? titleElement.textContent.toLowerCase() : "";

    if (title.includes(filter)) {
      card.classList.remove('hide');   // show match
    } else {
      card.classList.add('hide');      // hide non-match
    }
  });
});


// Sticky header shadow on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// 🌙 Dark Mode Toggle
const themeSwitch = document.getElementById('switch');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', themeSwitch.checked);

  // Save preference in localStorage
  if (themeSwitch.checked) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// On page load → apply saved theme
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeSwitch.checked = true;
  }
});

// AOS animations init
AOS.init({
  duration: 1000,
  once: true
});
