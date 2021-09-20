const burgerEl = document.querySelector('.burger');
const menuLinks = document.querySelectorAll('.header__list-item_link');
const nuvigationEl = document.querySelector('.header__nav');
const bodyEl = document.querySelector('body');
const workItems = document.querySelectorAll('.experience-item');


burgerEl.addEventListener('click', () => {
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
    let linkHref = item.querySelector('.experience-item__link').href;
    if(linkHref) {
        window.open(linkHref);
    } else {
        return false;
    }

}))


// works slider
const slides = document.querySelectorAll('.experience-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
let index = 0; // index for active slide

const activeSlide = (index) => {
    for(let slide of slides) {
        slide.classList.remove('active');
    }
    for(let dot of dots) {
        dot.classList.remove('active');
    }

    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

  const nextSlide = () => {
      
    if(index == slides.length - 1) {
      index = 0;
      activeSlide(index);
    } else {
      index++;
      activeSlide(index);
    }
  }
  
const prevSlide = () => {
    if(index == 0 ) {
      index = slides.length - 1;
      activeSlide(index);
    } else {
      index--;
      activeSlide(index);
    }
  }
  
// by buttons
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

// by dots
  dots.forEach((dot,indexDot) => {
    dot.addEventListener('click', () => {
        index = indexDot
        activeSlide(index);
      })
  })

/* // by swipe

let x1 = null;
let y1 = null;

const handleTouchStart = (event) => {
    console.log('touchstart');
    let firsTouch = event.changedTouches[0];
    console.log(firsTouch );
    x1 = firsTouch.clientX;
    y1 = firsTouch.clientY;
    // console.log('x1,y1: ',x1,y1)

}

const handleTouchMove = (event) => {
    console.log('touchmove');
    if (!x1 || !y1) {
        return false;
    }
    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;
    // console.log('x2, y2: ',x2, y2)

    let difX = x1 - x2;
    let difY = y1 - y2;
    console.log(difX);
    if(difX > 0 && difX > 50){
        prevSlide();
    }
    if(difX < 0 && Math.abs(difX) > 50) {
        nextSlide();
    }
    // x1 = null;
    // y1 = null;
}

slides.forEach(slide => slide.addEventListener('touchstart', handleTouchStart) );
slides.forEach(slide => addEventListener('touchmove', handleTouchMove) );
   */
