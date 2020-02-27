const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const articles = ['the', 'and', 'a', 'an'];
const button = document.querySelector('.main-list-button');

const removeArticle = (string) => {
  let split = string.toLowerCase().split(' ');
  if (articles.includes(split[0])) {
    // Return the string, first word removed
    let arr = string.split(' ')
    arr.splice(0,1)
    return arr.join(' ')
  } else {
    return string
  }
}

const sorterFunction = (a , b) => {
  aa = removeArticle(a);
  bb = removeArticle(b);
  if (aa > bb ) {
    return 1
  } else if ( aa < bb ) {
    return -1
  }
  return 0
}

const renderList = (list) => {
  list.forEach((band) => {
    let li = document.createElement("li");
    li.setAttribute("class", "main-list-item")
    li.innerHTML = band;
    console.log(button.after(li));
  });
}

const sortList = (e) => {
  bands.sort(sorterFunction);
  let ting = [...document.querySelectorAll('.main-list-item')];
  ting.forEach(item => item.remove());
  console.log(bands);
  renderList(bands.reverse());
}

renderList(bands);

button.addEventListener('click', sortList);



