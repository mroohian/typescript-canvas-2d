import "./style.css";

console.clear();

const viewEl: HTMLCanvasElement = document.getElementById(
  "view"
) as HTMLCanvasElement;

const width = viewEl.width;
const height = viewEl.height;

const context = viewEl.getContext("2d");
context.globalCompositeOperation = 'destination-over';

const sun = new Image();
sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
const sunImageWidth = 300;
const sunImageHeight = 300;

const moon = new Image();
moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';

const earth = new Image();
earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
const earthOrbitRadius = 105;

function draw() {
  const time = new Date();

  context.clearRect(0, 0, width, height); // clear canvas

  context.save();
  context.translate(width / 2, height / 2);

  // Earth
  context.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
  context.translate(earthOrbitRadius, 0);
  context.fillRect(0, -12, 40, 24); // Shadow
  context.drawImage(earth, -12, -12);

  // Moon
  context.save();
  context.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
  context.translate(0, 28.5);
  context.drawImage(moon, -3.5, -3.5);
  context.restore();

  context.restore();

  context.fillStyle = 'rgba(0, 0, 0, 0.4)';
  context.strokeStyle = 'rgba(0, 153, 255, 0.4)';
  context.beginPath();
  context.arc(width / 2, height / 2, earthOrbitRadius, 0, Math.PI * 2, false); // Earth orbit
  context.stroke();

  context.drawImage(
    sun,
    (width - sunImageWidth) / 2,
    (height - sunImageHeight) / 2,
    sunImageWidth,
    sunImageHeight
  );

  window.requestAnimationFrame(draw);
}

// setInterval(draw, 500);
window.requestAnimationFrame(draw);