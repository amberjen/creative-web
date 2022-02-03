let dots;
let hue;

function setup() {
  createCanvas(windowWidth, windowHeight);
  dots = [];
  hue = random(360);
}

function draw() {
  background('#111');

  dots.forEach(dot => {
    dot.draw();
  });

}

function mouseDragged() {
  hue += .5;

  if(hue > 360) {
    hue = 0;
  }

  dots.push(new Dot(mouseX, mouseY, hue));
}

function mouseReleased() {
  // reset brush
  hue = random(360);
}

function keyTyped() {
  if(key === 's') {
    saveCanvas('Rainbow Brush', 'jpg');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Dot {
  constructor(x, y, hue) {
    this.x = x;
    this.y = y;
    this.hue = hue;
    // this.hue1 = random(0, 180);
    // this.hue2 = random(180, 361);
    this.midSize = 50;
    // this.midSize1 = random(50, 100);
    // this.midSize2 = random(0, 50);
    this.alpha = 1;
  }

  draw() {
    colorMode(HSB);

    noStroke();

    fill(this.hue, 51, 97, this.alpha);
    circle(this.x, this.y, this.midSize);

    // fill(this.hue2, 91, 51);
    // circle(this.x, this.y, this.midSize2);

    // Fade out & resize effects
    // this.alpha -=.01;
    // this.midSize -= 1;
  }

}
