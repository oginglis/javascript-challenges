const list = document.querySelectorAll('.checker');

handleClick = (e) => {
  let lastChecked = this;
  console.log(this);
}

list.forEach((item) => {
  item.addEventListener("click", handleClick);
});


