const banner = document.getElementById("header");

const images = [
  "url('images/ali-pazani-3w14X-Yxffk-unsplash.jpg')",
  "url('images/linda-xu-fUEP0djb1hA-unsplash.jpg')",
  "url('images/thom-bradley-A6qNzfJXRGQ-unsplash.jpg')"
];

let current = 0;

function changeBackground() {
  banner.style.backgroundImage = images[current];
  current = (current + 1) % images.length;
}

changeBackground(); // Set initial background
setInterval(changeBackground, 3000); 