gsap.registerPlugin(ScrollTrigger);

// ------- Header -------
const tl_header = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-hero',
    start: '55%',
    end: '85%',
    scrub: true,
    // markers: true
  }
});

tl_header.fromTo( 'header', { opacity: 1 }, { opacity: 0 } );

// ------- Section Hero -------
const tl_hero = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-hero',
    start: '0%',
    end: '100%',
    pin: true,
    pinSpacing: false,
    // markers: true
  }
});

// ------- Section Smoke -------
const tl_smoke = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-smoke',
    start: '-20%',
    end: '50%',
    scrub: true,
    // markers: { startColor: '#6420fb', endColor: 'yellowgreen'}
  }
});

tl_smoke.fromTo(
  '.highlight',
  { color: 'rgba(255, 255, 255, .4)' },
  { color: 'rgba(255, 255, 255, 1)', stagger: .75},
)

const tl_smoke_remove = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-smoke',
    start: '0',
    end: '70%',
    scrub: true,
    // markers: { startColor: 'salmon', endColor: 'salmon'}
  }
});

tl_smoke_remove.to(
  '.highlight',
  { color: 'rgba(255, 255, 255, .4)', stagger: .75},
)


// ------- Section Split -------
const tl_split = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-split-phone',
    start: '-50%',
    end: '10%',
    // markers: true,
    scrub: true
  }
});

tl_split.fromTo('.phone-lg', {x: '40%'}, {x: '25%'});
tl_split.fromTo('.phone-sm', {x: '-40%'}, {x: '-25%'}, '<');

tl_split.fromTo(
  '.text-left',
  { x: 50, opacity: 0},
  { x: 0, opacity: 1},
  '<'
);

tl_split.fromTo(
  '.text-right',
  { x: -50, opacity: 0},
  { x: -10, opacity: 1},
  '<'
);

// Pin the split section
const tl_split_pin = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-split-phone',
    pin: true,
    pinSpacing: false,
    start: '0%',
    end: '100%'
  }
});


// ------- Section Carousel -------
let swatches = document.querySelectorAll('.color-swatches img');
let gallery = document.querySelector('.gallery');
let slides = document.querySelectorAll('.gallery .img-wrapper');

let currentSwatch = 'blue';
let topIndex = 2;

swatches.forEach((swatch, index) => {
  let coord = slides[index].getBoundingClientRect().left;

  swatch.addEventListener('click', (e) => {
    let swatchName = e.target.getAttribute('swatch');
    let closeUp = document.querySelector(`.closeup.${swatchName}`)

    // If we are on the same swatch
    if(currentSwatch === swatchName) return;

    // Set up animation
    gsap.set(closeUp, { zIndex: topIndex});
    gsap.fromTo(closeUp, { opacity: 0}, {opacity: 1, duration: .5});
    gsap.to(gallery, { x: -coord, duration: .5, ease: 'Power2.easeOut'});

    topIndex++;
    currentSwatch = swatchName;

  })
  
});

// ------- Section Product -------
const tl_product = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-product',
    start: '0%',
    end: '140%',
    scrub: true,
    pin: true,
    // markers: true
  }
})

tl_product.fromTo(
  '.product-video', 
  { currentTime: 0 }, 
  { currentTime: 3, duration: 1 }
);

tl_product.fromTo(
  '.product-info-container p', 
  { opacity: 0 }, 
  { opacity: 1, stagger: .25, duration: .5},
  '<'
);

// ------- Section Portrait -------
const tl_portrait = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-portrait',
    start: '-50%',
    end: '30%',
    // markers: true,
    scrub: true
  }
});

tl_portrait.fromTo(
  '.section-portrait .section-headings',
  { y: 120 },
  { y: '-40px' }
);

tl_portrait.fromTo(
  '.portrait-wrapper',
  { y: 120 },
  { y: '-40px'},
  '<'
);

tl_portrait.fromTo(
  '.portrait-video',
  { y: 80, scale: .8 },
  { y: '-40px', scale: 1},
  '<'
);

