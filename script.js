console.log("JS loaded");

document.querySelectorAll('h3').forEach(header => {
  header.addEventListener('click', () => {
    const dropdown = header.parentElement;
    const expanded = dropdown.classList.toggle('open');
    header.setAttribute('aria-expanded', expanded);
  });
});


document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navmenu = document.getElementById("navmenu");

    hamburger.addEventListener("click", function () {
        navmenu.classList.toggle("active");
                      if (navmenu.classList.contains("active")) {
                hamburger.textContent = ">";
            } else {
                hamburger.textContent = "☰";
            }
    });
});