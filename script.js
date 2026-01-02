// Smooth scrolling for navbar links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark mode toggle
const toggleButton = document.createElement('button');
toggleButton.textContent = "Toggle Dark Mode";
toggleButton.style.marginTop = "20px";
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Reveal sections on scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            sec.classList.add('visible');
        }
    });
});

// Starfield animation (soft twinkling stars in background)
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for (let i = 0; i < 100; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        dx: (Math.random() - 0.5) * 0.2, // slower movement
        dy: (Math.random() - 0.5) * 0.2
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        star.x += star.dx;
        star.y += star.dy;
        if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
    });
    requestAnimationFrame(drawStars);
}
drawStars();

// Gentle pastel background with very slow natural change
const colors = [
    "rgba(220, 132, 236, 1)", // light peach
    "rgba(155, 209, 237, 1)", // soft sky blue
    "rgba(249, 146, 163, 1)"  // pale mint
];

let current = 0;
function changeBackground() {
    document.body.style.transition = "background 8s ease-in-out"; // very slow fade
    document.body.style.background = colors[current];
    current = (current + 1) % colors.length;
}

// Change every 10 seconds for natural feel
setInterval(changeBackground, 10000);
changeBackground();