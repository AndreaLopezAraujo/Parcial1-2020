url =
  "https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json";
  
const info = document.getElementById("info");
valor="Burguers";
function changeContent(valor) {
  info.innerHTML = ""
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      for (let o of json) {
        let content = `<div class="card">\
        ${valor}
        HOLA\
        </div>`;
        info.innerHTML += content;
      }
    });
}

changeContent(valor)

const p_burguers = document.getElementById("burguers_but")
p_burguers.addEventListener("click", () => {
    valor="Burguers";
  changeContent(valor)
})
const p_tacos = document.getElementById("tacos_but")
p_tacos.addEventListener("click", () => {
    valor="Tacos";
  changeContent(valor)
})
