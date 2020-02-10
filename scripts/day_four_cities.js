const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'





// reply = array of city objects

const list = document.getElementById('list')
const input = document.getElementById('input')

input.addEventListener('keyup', (event) => {
  // event.preventDefault();
  list.innerHTML = '';
  let searchTerm = event.target.value;
  fetch(endpoint)
    .then((resp) => resp.json())
    .then((data) => {
      const reply = [];
      data.map((place) => {
        const c = {};
        c['city'] = place['city'];
        c['population'] = place['population'];
        reply.push(c);
      });
      const filteredArray = reply.filter(city => {
        if (searchTerm === '' || null) return false
        if (city.city.toLowerCase().includes(searchTerm.toLowerCase()) || city.population.includes(searchTerm)) {
          return true;
        } else {
          return false;
        }
      })
      let regex = new RegExp(`(${searchTerm})`, 'gm')
      filteredArray.forEach(city => {
        const select = `${city.city}`.split(regex);
        select.splice(1, 0, "<span class='highlight'>");
        select.splice(3, 0, "</span>");
        const result = `<li><nobr>${select.join('')}</nobr></li>`
        list.insertAdjacentHTML("beforeend", `${result}`);
      })
    });
  }
)
