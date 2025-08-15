let count = 0;
const countElem = document.getElementById("count")

fetch("https://xnythal.github.io/tasbih-click/navbar") // مسار الملف
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar-container").innerHTML = data;
});

fetch("https://xnythal.github.io/tasbih-click/reset-popup") // مسار الملف
  .then(response => response.text())
  .then(data => {
    document.getElementById("reset-popup-container").innerHTML = data;
  });

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.setAttribute('data-bs-theme', 'dark');
}

document.getElementById("increment-btn").onclick = incrementCounter

document.getElementById("confirm-reset").onclick = resetCounter

function incrementCounter() {
  count++;

  countElem.innerText = count;
  countElem.style.transform = "scale(1.1)"

  setTimeout(() => {
    countElem.style.transform = "scale(1)";
  }, 150);
}

function resetCounter() {
  count = 0;
  document.getElementById("count").textContent = count;
}