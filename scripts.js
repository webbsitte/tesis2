// Animaciones de navegación
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.href = link.getAttribute("href");
        });
    });
});
