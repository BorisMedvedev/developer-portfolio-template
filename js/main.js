const loader = () => {
  setTimeout(() => {
    if (document.getElementById('loader')) {
      document.getElementById('loader').classList.remove('show');
    }
  }, 1);
};
loader();

new WOW().init();

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 200) {
    document.querySelector('.back-to-top').style.display = 'block';
  } else {
    document.querySelector('.back-to-top').style.display = 'none';
  }
});

document.querySelector('.back-to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 0) {
    document.querySelector('.navbar').classList.add('nav-sticky');
  } else {
    document.querySelector('.navbar').classList.remove('nav-sticky');
  }
});

const navbarLinks = document.querySelectorAll('.navbar-nav a');
navbarLinks.forEach((link) => {
  link.addEventListener('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();

      const targetElement = document.querySelector(this.hash);
      window.scrollTo({
        top: targetElement.offsetTop - 45,
        behavior: 'smooth',
      });

      if (this.parentElement.classList.contains('navbar-nav')) {
        document.querySelector('.navbar-nav .active').classList.remove('active');
        this.closest('a').classList.add('active');
      }
    }
  });
});

if (document.querySelectorAll('.hero .hero-text h2').length == 1) {
  const typed_strings = document.querySelector('.hero .hero-text .typed-text').textContent;
  new Typed('.hero .hero-text h2', {
    strings: typed_strings.split(', '),
    typeSpeed: 100, backSpeed: 20, smartBackspace: false, loop: true,
  });
}

const skills = document.querySelector('.skills'); if (skills) {
  new Waypoint({
    element: skills, handler() {
      const progressBars = document.querySelectorAll('.progress .progress-bar'); progressBars.forEach((bar) => {
        bar.style.width = bar.getAttribute('aria-valuenow') + '%';
      });
    }, offset: '80%',
  });
}

const testimonialsCarousel = document.querySelector('.testimonials-carousel');
if (testimonialsCarousel) {
  $('.testimonials-carousel').owlCarousel
    ({ center: true, autoplay: true, dots: true, loop: true, responsive: { 0: { items: 1 } } });
}

const portfolioIsotope = $('.portfolio-container').isotope({ itemSelector: '.portfolio-item', layoutMode: 'fitRows' });

const portfolioFilters = document.querySelectorAll('#portfolio-filter li'); portfolioFilters.forEach((filter) => {
  filter.addEventListener('click', () => {
    document.querySelectorAll('#portfolio-filter li').forEach((li) => {
      li.classList.remove('filter-active');
    }); filter.classList.add('filter-active'); portfolioIsotope.isotope({ filter: filter.getAttribute('data-filter') });
  });
});
