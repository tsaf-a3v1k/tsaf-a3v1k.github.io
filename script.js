document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", e => {
            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
