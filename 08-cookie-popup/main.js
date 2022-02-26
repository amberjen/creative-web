// gsap.registerPlugin();

const tl = gsap.timeline({
  defaults: {
    duration: .5,
    easing: "power2.out"
  }
});

tl.fromTo(
  '.cookie-container', 
  { scale: 0 },
  { scale: 1, ease: "elastic.out(1, .9)", duration: 1 }
);

tl.fromTo(
  '.cookie', 
  { opacity: 0, y: -25, rotation: '-180deg' },
  { opacity: 1, y: 5, rotation: '0deg' },
  '-=.5'
);

tl.fromTo(
  '.cookie-content', 
  { opacity: 0, y: 35 },
  { opacity: 1, y: 0 },
  '<'
);

// Cookie jump
tl.fromTo(
  '.cookie',
  { y: 5, rotation: '0deg' },
  { y: -25, rotation: '-25deg', yoyo: true, repeat: 3 }
);

tl.fromTo(
  '#crumbs',
  { y: 0 },
  { y: -50, yoyo: true, repeat: 3 },
  '<'
);

// Fade out cookie container 
let btn = document.querySelector('.btn-accept');
btn.addEventListener('click', () => {
  gsap.to('.cookie-container', {
    opacity: 0,
    y: 100,
    duration: .5,
    ease: "power3.in"
  })
});

// Split text animation (alternative)
let logo = document.querySelector('.logo');
let letters = logo.textContent.split('');

logo.textContent = '';

letters.forEach((letter) => {
  logo.innerHTML += `<span class="letter">${letter}</span>`;
});

gsap.set('.letter', { display: 'inline-block' });
gsap.fromTo(
  '.letter', 
  { y: '100%', opacity: 0 }, 
  { y: 0, opacity: 1, delay: 1.25, stagger: .05, duration: .5, ease: 'back.out(3)'  }
);
