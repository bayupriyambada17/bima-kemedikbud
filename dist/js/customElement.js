document.addEventListener("DOMContentLoaded", function () {
  lucide.createIcons();

  fetch('../components/header.html').then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    })
})

// script lucide
