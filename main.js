const toggleBtn = document.getElementById("mobileToggle");
const menu = document.getElementById("mobileMenu");
let isOpen = false;

toggleBtn.addEventListener("click", () => {
  isOpen = !isOpen;
  menu.style.left = isOpen ? "0" : "-100%";
  toggleBtn.textContent = isOpen ? "✕" : "☰";
});
