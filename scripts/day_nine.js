const images = document.querySelectorAll('.img1');

const moveIn = (e) => {
  e.classList.add('active');
}

const moveOut = (e) => {
  e.classList.remove('active');
}

const isScrolledIntoView = (el) => {
    let rect = el.getBoundingClientRect();
    console.log(rect);
    let elemTop = rect.top;
    let elemBottom = rect.bottom;
    let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    let visible = (window.innerHeight - elemTop) >= (rect.height / 4)
    return visible;
}

const debounce = (func, wait = 50) => {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

const checkSlide = (e) => {
  images.forEach((image) => {
    let test = image.getBoundingClientRect()
    let top = test.top;
    let bottom = test.bottom;
    if (isScrolledIntoView(image)) {
      return moveIn(image);
    } else if (top >= window.innerHeight || bottom <= 0) {
      moveOut(image)
    }
  })
}

window.addEventListener('scroll', debounce(checkSlide));


