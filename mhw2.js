const header_elms = document.querySelectorAll('.fade-opacity');
const header_bg = document.querySelector('.header-bg');
const header = document.querySelector('header');

let lastScrollTop = 0;

function fade() {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        header_elms.forEach((item) => {item.style.opacity = '0';});
        header_bg.style.transform = 'translate(0,-100%)';
    }
    else {
        if (lastScrollTop > (window.innerHeight - header.offsetHeight))
            header_bg.style.transform = 'translate(0,0)';
        else
            header_bg.style.transform = 'translate(0,-100%)';
        header_elms.forEach((item) => {item.style.opacity = '1';});
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}

function toggleHeaderTransictions() {
    if (window.innerWidth > 1256) {
        header_bg.classList.remove('hidden');

        window.addEventListener('scroll', fade);
    }
    else {
        header_elms.forEach((item) => {item.style.opacity = '1';});
        header_bg.classList.add('hidden');

        window.removeEventListener('scroll', fade);
    }
}

function shadowing(nodeList) {
    nodeList.forEach((item) => {item.classList.add('shadowed');});
}

const h2_articles = document.querySelectorAll('#inner-section article h2');
shadowing(h2_articles);

toggleHeaderTransictions();

window.addEventListener('resize', toggleHeaderTransictions);