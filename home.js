const navbar = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY > 20) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
};

const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});

gsap.fromTo(
    '.navbar', 
    { opacity: 0, y: -50 }, 
    { opacity: 1, y: 0, duration: 1 }
);

gsap.fromTo(
    '.c1', 
    { opacity: 0, y: 50 }, 
    { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
);
