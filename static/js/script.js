const currentPage = window.location.pathname // current page location
console.log(currentPage);

const pages = {
    '/': document.getElementById('home'),
    '/projects/': document.getElementById('projects'),
    '/about/': document.getElementById('about')
}

if (pages[currentPage]){
    console.log('home page!')
    console.log(pages[currentPage])
    pages[currentPage].classList.add('loc');
}