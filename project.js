// Smooth scroll for project section
function scrollLeft() {
  const container = document.querySelector('.projects-container');
  const boxWidth = container.querySelector('.project-box').offsetWidth;
  container.scrollBy({ left: -boxWidth, behavior: 'smooth' });
}

function scrollRight() {
  const container = document.querySelector('.projects-container');
  const boxWidth = container.querySelector('.project-box').offsetWidth;
  container.scrollBy({ left: boxWidth, behavior: 'smooth' });
}