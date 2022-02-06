function setup() {
  createCanvas(720, 480);
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw() {
  background(211);
  
  // --------------------------------
  // Neck
  // --------------------------------
  stroke(131);
  line(200, 200, 200, 300); // Left
  line(210, 200, 210, 300); // Middle
  line(220, 200, 220, 300); // Right

  // --------------------------------
  // Antennae
  // --------------------------------
  line(210, 165, 175, 130); // Left (short)
  line(210, 165, 245, 70); // Middle (tall)
  line(210, 165, 275, 185); // Right (medium)

  // --------------------------------
  // Head
  // --------------------------------
  fill(0);
  noStroke();
  circle(210, 170, 45); // Head

  fill(255);
  circle(223, 165, 15); // Large eye

  fill(0);
  circle(223, 165, 4); // Pupil

  fill(151);
  circle(198, 160, 5); // Small eye #1
  circle(230, 143, 4); // Small eye #2
  circle(239, 180, 3); // Small eye #3

  // --------------------------------
  // Body
  // --------------------------------
  fill(131);
  circle(205, 360, 30); // Antigravity orb

  fill(0);
  rect(160, 255, 85, 110); // Main body

  fill(131);
  rect(160, 275, 85, 5);  // Stripe
}