// ========= SMOOTH SCROLL =========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// ========= DARK/LIGHT MODE TOGGLE =========
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Apply saved theme on load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});

// Toggle theme on click
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  toggleBtn.textContent = isDark ? "☀️" : "🌙";
});

// ========= AOS ANIMATIONS =========
AOS.init({
  duration: 1000,
  once: true,
});

// ========= LAZY LOADING FALLBACK =========
document.addEventListener("DOMContentLoaded", () => {
  if ("loading" in HTMLImageElement.prototype) {
    const images = document.querySelectorAll("img[loading='lazy']");
    images.forEach(img => {
      img.src = img.dataset.src || img.src;
    });
  } else {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
    document.body.appendChild(script);
  }
});
