const canvas = document.querySelector('.playground');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');
const frameCount = 144;

const currentFrame = (index) => {
  return `./img/${(index + 1).toString()}.jpg`;
};

const images = [];
let ball = {
  frame: 0,
};

// Create image sequence
for(i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

const render = () => {
  context.canvas.width = images[0].width;
  context.canvas.height = images[0].height;
  
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[ball.frame], 0, 0);
};

images[0].addEventListener('load', () => render());

gsap.to(ball, {
  frame: frameCount - 1,
  snap: 'frame',
  ease: 'none',
  scrollTrigger: {
    scrub: true,
    pin: 'canvas',
    end: '500%',
    // markers: true
  },
  onUpdate: render
});

gsap.fromTo(
  'h1', 
  { opacity: 0 }, 
  { 
    opacity: 1,
    scrollTrigger: {
      scrub: true,
      start: '45%',
      end: '85%'
    },
    onComplete: () => {
      gsap.to('h1', { opacity: 0 })
    }
  },
  
);
