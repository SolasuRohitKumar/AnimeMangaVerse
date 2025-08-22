// existing JS code (carousel, search, scroll)

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

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keyup', function () {
      let filter = searchInput.value.toLowerCase();
      let cards = document.querySelectorAll('.anime-card, .manga-card');
      cards.forEach(card => {
        let titleElement = card.querySelector('h3, p');
        let title = titleElement ? titleElement.textContent.toLowerCase() : "";
        if (title.includes(filter)) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });

    window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    AOS.init({
      duration: 1000,
      once: true
    });