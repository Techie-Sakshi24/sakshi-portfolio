// -----------------------------
// Smooth scrolling for navbar links
// -----------------------------
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// -----------------------------
// Reveal sections on scroll
// -----------------------------
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add('visible');
    }
  });
});

// -----------------------------
// Gentle pastel background transitions
// -----------------------------
const colors = [
  "rgb(255, 245, 235)", // light peach
  "rgb(240, 250, 255)", // soft sky blue
  "rgb(245, 255, 240)"  // pale mint
];

let current = 0;
function changeBackground() {
  document.body.style.transition = "background 8s ease-in-out"; // smooth fade
  document.body.style.background = colors[current];
  current = (current + 1) % colors.length;
}

// Change every 10 seconds for natural feel
setInterval(changeBackground, 10000);
changeBackground();

// -----------------------------
// Reveal timeline items on scroll
// -----------------------------
const timelineItems = document.querySelectorAll('.timeline-item');

function revealTimeline() {
  timelineItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      item.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealTimeline);
window.addEventListener('load', revealTimeline);