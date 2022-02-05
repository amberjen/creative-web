let words;
let choices;
let choiceNum;
let pos; // position

function preload() {
  choices = [
    loadImage('./img/001-rubik.png'),
    loadImage('./img/002-gamepad.png'),
    loadImage('./img/003-chess.png'),
    loadImage('./img/004-mug.png'),
    loadImage('./img/005-cassette-tape.png'),
    loadImage('./img/006-keychain.png'),
    loadImage('./img/007-sword.png'),
    loadImage('./img/008-video-console.png'),
    loadImage('./img/009-robot.png'),
    loadImage('./img/010-flask.png')
  ]
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#1e2117')
  words = [];
  // choices = ['this', 'is', 'a', 'falling', 'text'];
  choiceNum = 0;
  pos = createVector(200, 200);
}

function draw() {
  // noStroke()
  // fill('#b9f932');
  
  background('#1e2117')

  words.forEach(word => {
    word.draw(); 
  });

}

function mouseClicked() {
  let choice = choices[choiceNum];
  let word = new Word(mouseX, mouseY, choice);
  words.push(word); 

  choiceNum += 1;

  if(choiceNum > choices.length - 1) {
    choiceNum = 0;
  }
}

function keyTyped() {
  let word = new Word(pos.x, pos.y, key);
  words.push(word); 
  pos.x += 50;
  if(pos.x > windowWidth - 200) {
    pos.x = 200;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// easeInCubic: https://gist.github.com/gre/1650294
// t is between 0...1
let easing = (t) => {
  return t * t * t;
}

class Word {
  constructor(x, y, text) {
    let randomAngle = random(-0.25 * PI, 0.25 * PI);
    let mass = 0.25 + random(0, 0.5); // weight

    this.position = createVector(x, y);
    this.speed = createVector(0, -10);
    this.speed = this.speed.rotate(randomAngle);
    this.acceleration = createVector(0, mass); // gravity
    this.friction = 0.99;
    this.elastic = 0.8;
    // this.size = size;

    this.text = text;
    
    this.time = 0;
  }

  move() {
    this.speed = this.speed.add(this.acceleration);
    this.speed = this.speed.mult( this.friction); // friction
    this.position = this.position.add(this.speed);
    // this.size = constrain(this.size - 1, 0, this.size);

    if(this.position.y > windowHeight) {
      this.speed.y *= -this.elastic;
    }
    this.position.y = constrain(this.position.y, -windowHeight, windowHeight);
    
    this.time += 0.005;
  }

  draw() {
    this.move(); 

    let alpha = 255 - 255 * easing(this.time);
    fill(185, 249, 50, alpha);

    // textSize(96);
    // textFont('SF Mono');
    // textAlign(CENTER, BASELINE); 
    // text(this.text, this.position.x, this.position.y);

    image(
      this.text, 
      this.position.x - 64 / 2, 
      this.position.y - 64,
      64, 
      64
    );

  }

}