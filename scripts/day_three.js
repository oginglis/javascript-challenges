const blur = document.getElementById('blur');
const padding = document.getElementById('padding');
const body = document.querySelector('body');
const color = document.getElementById('color');
const image = document.querySelector('.picture');

const updateBlur = () => {
  image.style.filter = `blur(${blur.value}px)`;
}
const updateColor = () => {
  image.style.backgroundColor = `${color.value}`;
}
const updateWidth = () => {
  image.style.width = `${padding.value}vw`;
}
blur.addEventListener("input", updateBlur);
color.addEventListener("change", updateColor);
padding.addEventListener("input", updateWidth);
