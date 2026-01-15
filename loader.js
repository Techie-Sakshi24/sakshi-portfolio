// Hide loader once page fully loads
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.classList.add("fade-out");

  // Remove loader from DOM after fade-out
  setTimeout(() => {
    loader.style.display = "none";
  }, 600); // match CSS transition duration
});
