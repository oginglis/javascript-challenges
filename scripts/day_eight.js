const CODE = [38,40,37,39,38,40,37,39]
let keys = []
const replace = document.querySelector('.replace-me');

const isInArray = (current, index) => {
  if (CODE[index] === current) {
    return true
  }
  return false
}

const sequenceCheck = (e) => {
  e.preventDefault()
  keys.push(e.keyCode);
  if (keys.every(isInArray) && keys.length === CODE.length) {
    if (replace) {
      replace.parentNode.removeChild(replace);
      var title = document.createElement("H1");
      var textnode = document.createTextNode("YESSS - YOU HAVE FOUND THE HIDDEN CODE");
      title.appendChild(textnode);
      document.querySelector('body').appendChild(title);
    }
  } else if (keys.every(isInArray)){
    return keys;
  } else {
    return keys = [];
  }
}

window.addEventListener('keydown', sequenceCheck)
