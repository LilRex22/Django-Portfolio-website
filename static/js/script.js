const currentPage = window.location.pathname // current page location

const pages = {
    '/': document.getElementById('home'),
    '/projects/': document.getElementById('projects'),
    '/about/': document.getElementById('about')
}

if (pages[currentPage]){
    pages[currentPage].classlist.add('.loc');
}