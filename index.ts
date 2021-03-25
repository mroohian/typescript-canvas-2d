import "./style.css";

const viewEl: HTMLCanvasElement = document.getElementById(
  "view"
) as HTMLCanvasElement;

const width = viewEl.width;
const height = viewEl.height;

const context = viewEl.getContext("2d");

context.fillStyle = 'red';
context.fillRect(5, 5, width - 10, height - 10);
