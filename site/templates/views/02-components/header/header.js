const mainNav = document.querySelector('header .nav-container nav.main-nav');
const navIcon = document.querySelector('header .nav-container .mob-nav a');

navIcon.addEventListener('click', event => {
    event.preventDefault();

    if (!mainNav.classList.contains('open')) {
        ElementHelper.slideDown(mainNav);
        mainNav.classList.add('open');
    } else {
        ElementHelper.slideUp(mainNav)
        mainNav.addEventListener('transitionend', () => mainNav.classList.remove('open'), {once: true});
    }

    navIcon.classList.toggle('icon-menu');
    navIcon.classList.toggle('icon-close');
});


const searchForm = document.querySelector('header .search .search-form-container form');
const searchFormIcon = document.querySelector('header .search .search-form-container .icon');

searchFormIcon.addEventListener('click', () => {
    if (searchForm.style.width === '0px' || searchForm.style.width === '') {
        searchForm.style.width = '100%';
    } else {
        searchForm.style.width = '0px';
    }
});