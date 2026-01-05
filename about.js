
document.addEventListener("DOMContentLoaded", () => {
  const revealImage = document.querySelector(".reveal-img");

  function revealOnScroll() {
    if (!revealImage) return; // safety check
    const rect = revealImage.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      revealImage.classList.add("visible");
    }
  }

  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);
});
