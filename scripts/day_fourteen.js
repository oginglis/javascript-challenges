const list = [...document.querySelectorAll('[data-time]')];
const timesArray = list.map((li) => li.dataset.time);
const button = document.querySelector('.button');

const toNormalTimeSeconds = (string) => {
  let arr = string.split(':');
  let lhs = parseInt(arr[0]) * 60;
  let totalSeconds = lhs + parseInt(arr[1]);
  return parseInt(totalSeconds)
}

const secondsToMinutes = (sec) => {
  let fullTime = parseInt(sec) / 60
  let predec =  fullTime.toFixed(2)
  let  seconds = Math.floor(((predec % 1) ) * 60)
  let minutes = Math.floor(fullTime)
  return `your total video length is ${minutes} minutes and ${seconds} seconds`
}

const magic = (acc, cv, ci) => {
  return acc + toNormalTimeSeconds(cv)
}

const elementMaker = () => {
  let myString = secondsToMinutes(timesArray.reduce(magic, 0));
  let head = document.createElement("h1")
  var node = document.createTextNode(myString);
  head.appendChild(node);
  head.setAttribute("class", "page-title");
  head.style.marginTop = '0px';
  button.after(head);
}

button.addEventListener('click', elementMaker)





