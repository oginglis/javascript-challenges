const timeToDegrees = (time) => {
  const degrees = time * 6;
  const css = `${degrees + 90}deg`;
  return css;
};

const hourToDegrees = (hour) => {
  const degree = hour * 30;
  const hCss = `${degree + 90}deg`;
  return hCss;
};

const clock = () => {
  const d = new Date(); // for now
  const h = d.getHours(); // => 9
  const hour = document.querySelector('.hour');
  console.log(h);
  hour.style.transform = `rotate(${hourToDegrees(h)})`;
  const m = d.getMinutes();
  const minute = document.querySelector('.minute');
  minute.style.transform = `rotate(${timeToDegrees(m)})`;
  const s = d.getSeconds();
  const second = document.querySelector('.second');
  second.style.transform = `rotate(${timeToDegrees(s)})`;
};

window.setInterval(clock, 1000);
