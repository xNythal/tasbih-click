function fetchComponent(elemId, url, additionalWork) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elemId).innerHTML = data;
            if (additionalWork != null) {
                additionalWork();
            }
        });
}

fetchComponent("navbar-container", "https://xnythal.github.io/tasbih-click/components/navbar")

fetchComponent("reset-popup-container", "https://xnythal.github.io/tasbih-click/components/reset-popup", () => {
  document.getElementById("confirm-reset").onclick = resetCounter
})