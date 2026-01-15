// Smooth scroll with bounce effect
function scrollLeft() {
  const container = document.querySelector('.projects-container');
  const boxWidth = container.querySelector('.project-box').offsetWidth;

  container.scrollBy({ left: -boxWidth, behavior: 'smooth' });

  // Bounce animation
  container.animate(
    [{ transform: 'translateX(10px)' }, { transform: 'translateX(0)' }],
    { duration: 300, easing: 'ease-out' }
  );
}

function scrollRight() {
  const container = document.querySelector('.projects-container');
  const boxWidth = container.querySelector('.project-box').offsetWidth;

  container.scrollBy({ left: boxWidth, behavior: 'smooth' });

  // Bounce animation
  container.animate(
    [{ transform: 'translateX(-10px)' }, { transform: 'translateX(0)' }],
    { duration: 300, easing: 'ease-out' }
  );
}

// Drag-to-scroll functionality
const container = document.querySelector('.projects-container');
let isDown = false;
let startX;
let scrollLeftPos;

container.addEventListener('mousedown', (e) => {
  isDown = true;
  container.classList.add('active');
  startX = e.pageX - container.offsetLeft;
  scrollLeftPos = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
  isDown = false;
  container.classList.remove('active');
});

container.addEventListener('mouseup', () => {
  isDown = false;
  container.classList.remove('active');
});

container.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 2; // scroll speed
  container.scrollLeft = scrollLeftPos - walk;
});