let count = localStorage.getItem("count");
if (count == null) {
  count = 0;
}

const countElem = document.getElementById("count")

countElem.innerText = count

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.setAttribute('data-bs-theme', 'dark');
}

document.getElementById("increment-btn").onclick = incrementCounter

function incrementCounter() {
  count++;

  countElem.innerText = count;

  localStorage.setItem("count", count)

  countElem.style.transform = "scale(1.1)"

  setTimeout(() => {
    countElem.style.transform = "scale(1)";
  }, 150);
}

function resetCounter() {
  count = 0;
  document.getElementById("count").textContent = count;
  localStorage.setItem("count", count)
}