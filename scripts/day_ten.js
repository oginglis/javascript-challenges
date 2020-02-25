const panels = document.querySelectorAll('.panel');



const makeActive = (e, panel) => {
  panels.forEach(panel => panel.classList.remove('active'));
  e.target.classList.add('active');
}


panels.forEach((panel) => {
  panel.addEventListener('click', makeActive)
})
