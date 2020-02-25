const panels = document.querySelectorAll('.panel');



const makeActive = (e) => {
  const containsActive = [...e.target.classList].includes('active');
  panels.forEach((panel) => {
    panel.classList.remove('active')
  });
  if (containsActive) {
    e.target.classList.remove('active');
  } else {
    e.target.classList.add('active');
  }
}


panels.forEach((panel) => {
  panel.addEventListener('click', makeActive)
});
