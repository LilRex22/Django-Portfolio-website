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