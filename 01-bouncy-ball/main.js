
let position;
let speed;
let radius;
let sound;

let playSound = false;
let toggleSoundBtn = document.querySelector('.btn-toggle-sound');
let soundIcon = document.querySelector('.btn-toggle-sound i');
let randomBtn = document.querySelector('.btn-random');

toggleSoundBtn.addEventListener('click', () => {
  playSound = !playSound;
  if(soundIcon.classList.contains('ri-volume-mute-line')) {
    soundIcon.classList.remove('ri-volume-mute-line');
    soundIcon.classList.add('ri-volume-up-line');
  } else {
    soundIcon.classList.remove('ri-volume-up-line');
    soundIcon.classList.add('ri-volume-mute-line');
  }
});

randomBtn.addEventListener('click', () => {
  let angle = random(TWO_PI); 
  speed.rotate(angle);
});

function preload() {
  soundFormats('wav');
  sound = loadSound('./hybrid-kick.wav');
}

// Runs once at program start
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Custom state
  position = createVector(50, 50);
  speed = createVector(7, 7); // speed in x,y direction, 5px/frame (1s = 30frames = 150px)
  
  radius = 50;
}

// Loops forever, until stopped
function draw() {
  noStroke();
  background('#8d8df055'); 
  fill('#fff');
  
  // circle(x, y, d): 
  // draw a circle at location (x,y), with a diameter of (d)
  circle(position.x, position.y, radius * 2);

  // Each time draw the ball, move & update the ball position
  position.add(speed);

  // Check if the ball is out of boundaries
  if(position.y > (windowHeight - radius) || position.y < radius) {
    // If true, reverse the direction
    speed.y *= -1;
    
    if (playSound) {
      sound.play();
    }
  }

  if(position.x > (windowWidth - radius) || position.x < radius) {
    speed.x *= -1;
    if (playSound) {
      sound.play();
    }
  }

  // Fix resizing bug
  // constrain(n, low, high):
  // constrains a value between min & max value
  position.y = constrain(position.y, radius, windowHeight - radius);
  position.x = constrain(position.x, radius, windowWidth - radius);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}