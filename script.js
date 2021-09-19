const burgerEl = document.querySelector('.burger');
const menuLinks = document.querySelectorAll('.header__list-item_link');
const nuvigationEl = document.querySelector('.header__nav');
const bodyEl = document.querySelector('body');
const workItems = document.querySelectorAll('.experience-item');


burgerEl.addEventListener('click', () => {
    console.log('click');
    burgerEl.classList.toggle('active');
    bodyEl.classList.toggle('lock');
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


//popup the code example after click
const codeEl = document.querySelector('.experience-work__row').firstElementChild;
const modalEl = document.querySelector('.modal');
codeEl.addEventListener('click', ()=> {
    modalEl.classList.add('active');
    bodyEl.classList.add('lock');
});

// open link in new window

workItems.forEach(item => item.addEventListener('click', () => {
    console.log('link clicked');
    let linkHref = item.querySelector('.experience-item__link').href;
    console.log(linkHref);
    if(linkHref) {
        window.open(linkHref);
    } else {
        return false;
    }

}))


// works slider