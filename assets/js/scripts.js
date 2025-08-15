let count = 0;
let countElem = document.getElementById("count")

fetch("navbar.html") // مسار الملف
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar-container").innerHTML = data;
  });

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.setAttribute('data-bs-theme', 'dark');
  document.getElementById("reset-btn").style.color = "white"
}


document.getElementById("increment-btn").onclick = incrementCounter

document.getElementById("reset-btn").onclick = resetCounter

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