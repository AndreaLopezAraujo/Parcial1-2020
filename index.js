url =
    "https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json";

const info = document.getElementById("info");
const totalCarrito = document.getElementById("numero");
let total = "";
numero = 0;
valor = "Burguers";
function changeContent(valor) {
    info.innerHTML = "";
    totalCarrito.innerHTML = numero + " items";
    fetch(url)
        .then((response) => response.json())
        .then((json) => {
            let titulo = `<h2 align="center"><hr>${valor}<hr></h2>`;
            let ini = `<div class="card-deck">`;
            let fin = `</div>`;
            let comidas;
            i = 0;
            if (valor == "Tacos") {
                i = 1;
                comidas = json[i].products;
                Concomidas(comidas);
                info.innerHTML = titulo + ini + total + fin;
            }
            else if (valor == "Salads") {
                i = 2;
                comidas = json[i].products;
                Concomidas(comidas);
                info.innerHTML = titulo + ini + total + fin;
            }
            else if (valor == "Burguers") {
                i = 0;
                comidas = json[i].products;
                Concomidas(comidas);
                info.innerHTML = titulo + ini + total + fin;
            }
            else if (valor == "Desserts") {
                i = 3;
                comidas = json[i].products;
                Concomidas(comidas);
                info.innerHTML = titulo + ini + total + fin;
            }
            else if (valor == "Drinks and Sides") {
                i = 4;
                comidas = json[i].products;
                Concomidas(comidas);
                info.innerHTML = titulo + ini + total + fin;
            }
            else if (valor == "Order detail") {
                info.innerHTML =titulo;
            }
        });
    console.log(fetch(url))
}
function Concomidas(comidas) {

    total="";
    for (let o of comidas) {
        let content = `<div class="card mb-3" style="min-width: 15rem;">\
<img src="${o["image"]}" class="card-img-top" alt="${o["name"]}">\
<div class="card-body">\
  <h5 class="card-title">${o["name"]}</h5>\
  <p class="card-text">${o["description"]}</p>\
  <p class="card-text">$${o["price"]}</p>\
  <button type="button" class="btn btn-dark">Add to car</button>
</div>\
</div>`;
        total += content;
    }
}
changeContent(valor)

const p_burguers = document.getElementById("burguers_but")
p_burguers.addEventListener("click", () => {
    valor = "Burguers";
    changeContent(valor)
})
const p_tacos = document.getElementById("tacos_but")
p_tacos.addEventListener("click", () => {
    valor = "Tacos";
    changeContent(valor)
})
const p_salads = document.getElementById("salads_but")
p_salads.addEventListener("click", () => {
    valor = "Salads";
    changeContent(valor)
})
const p_desserts = document.getElementById("desserts_but")
p_desserts.addEventListener("click", () => {
    valor = "Desserts";
    changeContent(valor)
})
const p_drinks = document.getElementById("drinks_but")
p_drinks.addEventListener("click", () => {
    valor = "Drinks and Sides";
    changeContent(valor)
})
const p_carrito = document.getElementById("carrito_but")
p_carrito.addEventListener("click", () => {
    valor = "Order detail";
    changeContent(valor)
})
