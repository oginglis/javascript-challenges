const emptyList = document.querySelector('.dishes');
const foodItems = ['Gambas', 'Squid'];
let emoji = []
const form = document.querySelector('.submit-area');
const value = document.querySelector('.submit-value');
let listItems;
let checkItems;

const itemCreator = (taco) => {
  emoji = JSON.parse(sessionStorage.getItem("emoji")) || [];
  let li = document.createElement('li');
  li.classList.add('item');
  let newItem
  if (!emoji.includes(taco) || null) {
    let input = document.createElement('input');
    input.setAttribute("type", "checkbox");
    input.setAttribute("name", `${taco}`);
    newItem = input;
  } else {
    let newEl = document.createElement('p');
    newEl.innerHTML = '🌮';
    newEl.setAttribute("style", `font-size:${13}px;`);
    newEl.addEventListener('click', deTaco);
    newItem = newEl;
  }
  let p = document.createElement("p");
  let pText = document.createTextNode(`${taco}`);
  p.appendChild(pText);
  li.appendChild(newItem);
  li.appendChild(p);
  return li;
}

document.querySelector('[name="Gambas"]')

const deTaco = (e) => {
  emoji.splice( emoji.indexOf(e.target.name), 1 )
  let input = document.createElement('input');
  input.setAttribute("type", "checkbox");
  input.setAttribute("name", `${e.target.name}`);
  input.setAttribute("style", `height:${13}px;`);
  e.target.parentNode.replaceChild(input, e.target);
  checkItems = document.querySelectorAll('[type="checkbox"]');
  sessionStorage.setItem('emoji', JSON.stringify(emoji));
  addListeners();
}

const taco = (e) => {
  if (!emoji.includes(e.target.name)) {
    let newEl = document.createElement('p');
    newEl.innerHTML = '🌮';
    newEl.setAttribute("style", `font-size:${13}px;`);
    newEl.addEventListener('click', deTaco);
    e.target.parentNode.replaceChild(newEl, e.target);
    emoji.push(e.target.name);
    sessionStorage.setItem('emoji', JSON.stringify(emoji));
  }
}

const addListeners = () => {
  checkItems.forEach((item) => {
    item.addEventListener('change', taco)
  });
}

const renderList = () => {
  emptyList.innerHTML = "";
  foodItems.forEach((item) => {
    emptyList.appendChild(itemCreator(item));
  });
  listItems = document.querySelectorAll('.item');
  checkItems = document.querySelectorAll('[type="checkbox"]')
  addListeners();
}

const createFoodArray = () => {
  for (let i = 0; i < sessionStorage.length; i++) {
    let value =sessionStorage.key(i);
    if (sessionStorage[value] === value) {
      foodItems.push(value);
    }
  }
}

const addItem = (e) => {
  e.preventDefault();
  sessionStorage.setItem(value.value, value.value);
  foodItems.push(value.value);
  renderList();
}


createFoodArray();


renderList();



form.addEventListener('submit', addItem);
