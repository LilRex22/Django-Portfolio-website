const currentPage = window.location.pathname // current page location

const pages = {
    '/': document.getElementById('home'),
    '/projects/': document.getElementById('projects'),
    '/about/': document.getElementById('about'),
    '/contact/': document.getElementById('contact')
}

if (pages[currentPage]){
    pages[currentPage].classList.add('loc');
}


// GSAP Animations 😪
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll("#dy > *");
    const items2 = document.querySelectorAll("#pf > *");
    const absItem = document.querySelectorAll('#pf .position-absolute');

    const tl = gsap.timeline();

    tl.from(items2, {
        opacity: 0,
        scale: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)"
    });

    tl.from(items, {
        y: (i) => 50 * (i + 3),
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)"
    });


});