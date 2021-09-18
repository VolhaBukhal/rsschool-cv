const burgerEl = document.querySelector('.burger');
const menuLinks = document.querySelectorAll('.header__list-item_link');
const nuvigationEl = document.querySelector('.header__nav');


burgerEl.addEventListener('click', () => {
    console.log('click');
    burgerEl.classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
    nuvigationEl.classList.toggle('active');

})

//hide pop up menu and go to section when link is clicked
menuLinks.forEach(link => link.addEventListener('click', () => {
    if(nuvigationEl.classList.contains('active')) {
        nuvigationEl.classList.remove('active');
        document.querySelector('body').classList.remove('lock');
        burgerEl.classList.remove('active');
    }
}) );