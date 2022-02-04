let layer1 = document.querySelector('.layer-1');
let layer2 = document.querySelector('.layer-2');
let generateBtn = document.querySelector('.btn-generate');

function createColor() {
  // hsl(x, y%, z%)
  // Hue: 0 - 360
  // Saturation: 50 - 90
  // Lightness: 40 - 90
  let h = Math.random() * 360;
  let s = 50 + Math.random() * 40;
  let l = 40 + Math.random() * 50;

  return `hsl(${h}, ${s}%, ${l}%)`;
}

function createGradient() {
  let color1 = createColor();
  let color2 = createColor();
  
  // Angle: 0 - 360
  let angle = Math.random() * 360;
  
  return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
}

function changeBg() {
  layer1.style.background = createGradient();
  layer2.style.background = createGradient();
}

generateBtn.addEventListener('click', () => {
  changeBg();
});