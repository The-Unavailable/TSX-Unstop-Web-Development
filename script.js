// Contact form handler
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for contacting me!");
  this.reset();
});

// Scroll reveal animation
function revealOnScroll() {
  const cards = document.querySelectorAll('.animate-card');
  cards.forEach(card => {
    const position = card.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (position < screenHeight - 100) {
      card.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
