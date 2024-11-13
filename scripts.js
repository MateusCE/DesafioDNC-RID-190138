document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('#div3, .div4');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach((element) => {
        element.classList.add('slide-in');
        observer.observe(element);
    });
});
