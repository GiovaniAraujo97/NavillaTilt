document.addEventListener('DOMContentLoaded', () => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
        max: 25,
        speed: 360,
        glare: true,
        "max-glare": 0.5
    });
});
