const list = document.querySelectorAll('.checker');

let lastChecked
function handleClick(e) {
  let search = this.getAttribute('name')
  document.querySelector(`label[for=${search}]`).classList.toggle("done")
  lastChecked = this;
  console.log(this)
}

list.forEach((item) => {
  item.addEventListener("click", handleClick);
});

