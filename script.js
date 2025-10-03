// Dark mode toggle
const btn = document.getElementById("darkModeToggle");

// Load saved mode on page load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("darkmode");
  btn.textContent = "☀️";
} else {
  btn.textContent = "🌙";
}

btn.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");

  if (document.body.classList.contains("darkmode")) {
    btn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    btn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});



// hamburg menu button
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburgmenu');
  const nav = document.querySelector('.nav');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
});

function downloadCv() {
  const fileId = '10Mo9G0ezQ-JW6lv4o3pIN6pxAKSjnJOH'; // Replace with your actual file ID
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  const a = document.createElement('a');
  a.href = downloadUrl;
  a.target = '_blank';
  a.click();
}

