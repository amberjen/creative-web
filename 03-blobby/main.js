let blob;

function setup() {
  createCanvas(windowWidth, windowHeight);
  blob = new Blob();
}

function draw() {
  background('#f7b0e0');
  blob.draw();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Blob {

  constructor() {
    this.numOfPoints = 480;
    this.time = 0;
  }

  // Creating sine wave with movement
  wave(num, amp, freq, speed) {
    // amplitude = how tall
    // frequency = how many waves
    // height * sin(frequency * 2PI * percentage + time * speed)
    return amp * sin(freq * TWO_PI * (num / this.numOfPoints) + this.time * speed);
  }

  draw() {
    
    noStroke();
    fill('#ff3400')
    
    // BEGIN: making a custom shape
    beginShape();

    for(let n = 0; n < this.numOfPoints; n++) {

      // Find angle, i.e. the percentage fo the circle
      let angle = TWO_PI * (n / this.numOfPoints);
      let r = 180 
              + this.wave(n, 15, 3, 1) 
              + this.wave(n, 10, 5, 7)
              + this.wave(n, 3, 4, -1)
              + this.wave(n, 2, 7, -3);
      
      // Making additive waves
      // this.wave(n, 20, 7) + this.wave(n, 20, 3);

      let x = (windowWidth / 2) + r * cos(angle);
      let y = (windowHeight / 2) + r * sin(angle);

      // Drawing a custom shape
      vertex(x, y);

    }

    // END: making a custom shape
    endShape(CLOSE);

    this.time += 0.01;

  }

}