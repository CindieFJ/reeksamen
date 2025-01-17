document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form");
  const closeButton = document.querySelector(".close-button");
  const openButton = document.querySelector(".cta-button");
  const panda = document.querySelector(".panda");

  const progressText = document.getElementById("progress-text");
  const bar = document.getElementById("bar");
  let progress = 0;

  // Funktion til at opdatere progress bar
  function updateProgress() {
    if (progress < 100) {
      progress++;
      progressText.innerText = `${progress}%`;
      bar.style.width = `${progress}%`;
      setTimeout(updateProgress, 18);
    } else {
      document.getElementById("loading-screen").style.opacity = "0";
      document.getElementById("loading-screen").style.zIndex = "-1";
      document.getElementById("content").style.display = "block";
      document.getElementById("content").style.opacity = "1";
      document.getElementById("content").style.transition = "opacity 2s ease-in-out";

      window.scrollTo(0, 0);
      revealWelcomeSection();
    }
  }

  // Start progress bar
  updateProgress();

  // Funktion til at afsløre velkomstsektionen
  function revealWelcomeSection() {
    const welcomeSection = document.querySelector('.welcome-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = 'slide-in 1s ease-out forwards';
          }
        });
      },
      { threshold: 0.1 }
    );

    if (welcomeSection) {
      observer.observe(welcomeSection);
    }
  }

  // Funktion til at vise/skjule kontaktformularen og pandaen
  function toggleForm(show) {
    if (!contactForm || !panda) return;

    if (show) {
      contactForm.classList.remove("hidden");
      panda.classList.remove("hidden");
      contactForm.classList.add("sliding");
      panda.classList.add("sliding");

      setTimeout(() => {
        contactForm.classList.remove("sliding");
        panda.classList.remove("sliding");
      }, 800);
    } else {
      contactForm.classList.add("closing");
      panda.classList.add("closing");

      setTimeout(() => {
        contactForm.classList.add("hidden");
        panda.classList.add("hidden");
        contactForm.classList.remove("closing");
        panda.classList.remove("closing");
      }, 800);
    }
  }

  // Event listeners for åbne/lukke knapper
  if (closeButton) {
    closeButton.addEventListener("click", () => toggleForm(false));
  }

  if (openButton) {
    openButton.addEventListener("click", (e) => {
      e.preventDefault();
      toggleForm(true);
    });
  }

  // Skjul formularen og pandaen ved start
  toggleForm(false);

  // Automatisk visning efter 10 sekunder
  setTimeout(() => {
    toggleForm(true);
  }, 10000);

  // Form submit handler
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Din besked er blevet sendt!");
      toggleForm(false);
    });
  }
});

  const carousel = document.querySelector('.portfolio-carousel');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  const itemWidth = 370; // Width of each item + gap

  let scrollPosition = 0;

  leftArrow.addEventListener('click', () => {
    scrollPosition = Math.max(scrollPosition - itemWidth, 0);
    carousel.style.transform = `translateX(-${scrollPosition}px)`;
  });

  rightArrow.addEventListener('click', () => {
    const maxScroll = carousel.scrollWidth - carousel.offsetWidth;
    scrollPosition = Math.min(scrollPosition + itemWidth, maxScroll);
    carousel.style.transform = `translateX(-${scrollPosition}px)`;
  });

  // JavaScript to scroll back to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show or hide the button based on scroll position
window.onscroll = function() {
    const button = document.getElementById('back-to-top');
    if (window.scrollY > 0) { // Show button when user scrolls down
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
};

function submitForm(event) {
  event.preventDefault(); // Prevents the form from submitting and refreshing the page

  // Hide the form
  document.getElementById("form-container").style.display = "none";

  // Show the thank you message
  document.getElementById("thank-you-message").style.display = "block";
}
