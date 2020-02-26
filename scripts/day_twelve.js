const text = document.querySelector('.title');

function debounce(func, wait = 100) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

const moveShadow = (e) => {
  let x = ((e.pageX / window.innerWidth) * 30) - 15;
  let y = ((e.pageY / window.innerHeight) * 30) - 15;
  console.log(x, y);
  text.style.textShadow = `${x}px ${y}px 0px white`
}


// Start
const debounced = debounce(moveShadow, 10);
// window.addEventListener('resize', debounced);


window.addEventListener('mousemove', debounced);
