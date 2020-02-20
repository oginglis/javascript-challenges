const list = document.querySelectorAll('.checker');

let lastChecked

function handleClick(e) {
  let search = this.getAttribute('name');
  document.querySelector(`label[for=${search}]`).classList.toggle("done");
  let inBetween = false;
  if(e.shiftKey && this.checked) {
    list.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        let searchIn = checkbox.getAttribute('name');
        document.querySelector(`label[for=${searchIn}]`).classList.toggle("done");
        checkbox.checked = true;
      }
    })
  }

  lastChecked = this;
}


list.forEach((item) => {
  item.addEventListener("click", handleClick);
});

