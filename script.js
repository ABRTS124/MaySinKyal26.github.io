const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.1
    }
);

const elements = document.querySelectorAll(
    ".experience-card, .skill-card, .about-card, .education-card"
);

elements.forEach((element) => {
    element.classList.add("hidden");
    observer.observe(element);
});

.hidden {
    opacity: 0;
    transform: translateY(25px);
    transition: opacity 0.7s ease, transform 0.7s ease;
}

.show {
    opacity: 1;
    transform: translateY(0);
}
